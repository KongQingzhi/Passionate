<template>
    <div id="Information">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="5rem" class="demo-ruleForm"
            status-icon>
            <el-col :span="24">
                <div class="image">
                    <img :src="ruleForm.img" ref="headimg" alt="">
                    <input @change="getFile" ref="inputFile" type="file">
                </div>
                <p>点击更换头像</p>
            </el-col>
            <el-col :span="24">
                <el-form-item label="昵 称" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="王 磊" />
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="账 号" prop="account">
                    <el-input :disabled="true" v-model="ruleForm.account" />
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="性 别" prop="gender">
                    <el-radio-group v-model="ruleForm.gender">
                        <el-radio label="小哥哥" />
                        <el-radio label="小姐姐" />
                    </el-radio-group>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="生 日" required>
                    <el-form-item prop="birthday">
                        <el-date-picker v-model="ruleForm.birthday" type="date" placeholder="请选择"
                            style="width: 255px;" />
                    </el-form-item>
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="家 乡" prop="hometown">
                    <el-input v-model="ruleForm.hometown" placeholder="嘉祥" />
                </el-form-item>
            </el-col>
            <el-col :span="24">
                <el-form-item label="签 名" prop="desc">
                    <el-input v-model="ruleForm.motto" type="textarea" />
                </el-form-item>
            </el-col>
        </el-form>
        <div class="formBottom">
            <button @click="submitForm(ruleFormRef)">
                <div class="content">
                    <i class="bi bi-check-lg"></i>
                    <span>保 存</span>
                </div>
            </button>
            <button @click="resetForm(ruleFormRef)">
                <div class="content">
                    <i class="bi bi-trash-fill"></i>
                    <span>取 消</span>
                </div>
            </button>
        </div>
        <div class="mask">
            <img src="../../../../../assets/img/堆雪人.svg" alt="">
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, reactive, onMounted, ref, } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import api from '../../../../../axios/api';
import { useRouter, useRoute } from 'vue-router'
export default ({
    setup() {
        const router = useRouter()
        const ruleFormRef = ref<FormInstance>()
        const User: any = sessionStorage;
        const ruleForm = reactive({
            name: User.UserName,
            account: User.UserAccount,
            gender: User.UserGender,
            birthday: User.UserBirthday,
            hometown: User.UserHometown,
            motto: User.UserMotto,
            img: User.UserHeadImg
        })

        const rules = reactive<FormRules>({
            name: [
                {
                    required: true,
                    message: '请输入昵称',
                    trigger: 'blur'
                },
            ],
            gender: [
                {
                    required: true,
                    message: '请选择性别',
                    trigger: 'change',
                },
            ],
            birthday: [
                {
                    type: 'date',
                    required: true,
                    message: '请选择生日',
                    trigger: 'change',
                },
            ],
            hometown: [
                {
                    required: true,
                    message: '请输入家乡',
                    trigger: 'change',
                },
            ],
            motto: [
                {
                    required: true,
                    message: '请输入个性签名',
                    trigger: 'blur'
                },
            ],
        })
        onMounted(() => {
            if (sessionStorage.getItem('UserAccount') == undefined) {
                router.push({
                    name: 'Login'
                })
            }
        })
        return {
            rules,
            User,
            ruleFormRef,
            ruleForm
        }
    },
    methods: {
        getFile() {
            const that: any = this;
            const file: any = that.$refs.inputFile.files[0];
            const url = window.URL.createObjectURL(file);
            that.$refs.headimg.src = `${url}`;
        },
        async submitForm(formEl: FormInstance | undefined) {
            let that: any = this;
            if (!formEl) {
                return;
            }
            await formEl.validate((valid, fields) => {
                if (valid) {
                    let formData = new FormData();
                    if (that.$refs.inputFile.files[0] != undefined) {
                        formData.append('uploadFile', that.$refs.inputFile.files[0], that.$refs.inputFile.files[0].name);
                    }
                    formData.append('UserAccount', that.User.UserAccount);
                    formData.append('UserName', that.ruleForm.name);
                    formData.append('UserGender', that.ruleForm.gender);
                    formData.append('UserMotto', that.ruleForm.motto);
                    formData.append('UserBirthday', that.ruleForm.birthday);
                    formData.append('UserHometown', that.ruleForm.hometown);
                    const config = {
                        headers: {
                            "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
                        }
                    };
                    api.updateUser(formData).then(res => {
                        api.login({ UserAccount: that.User.UserAccount, UserPassword: that.User.UserPassword }).then(res => {
                            alert('信息保存成功！')
                            const data = res.data;
                            sessionStorage.setItem('UserAccount', data.UserAccount);
                            sessionStorage.setItem('UserHeadImg', data.UserHeadImg);
                            sessionStorage.setItem('UserName', data.UserName);
                            sessionStorage.setItem('UserGender', data.UserGender);
                            sessionStorage.setItem('UserMotto', data.UserMotto);
                            sessionStorage.setItem('UerBirthday', data.UserBirthday);
                            sessionStorage.setItem('UserHometown', data.UserHometown);
                        }).catch(e => {
                            alert('信息保存失败！')
                        })
                    }).catch(e => {
                        alert('信息保存失败！')
                    })
                } else {
                    alert('信息保存失败！')
                }
            })
        },

        resetForm: (formEl: FormInstance | undefined) => {
            if (!formEl) return
            formEl.resetFields()
        }
    }
})

</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#Information {
    position: relative;
    width: 64rem;
    padding: 2rem 4rem;
    background-color: #fff;
    border-radius: $borRadiusBig;
    box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.07);
    overflow: hidden;

    .demo-ruleForm {
        width: 21rem;

        .image {
            position: relative;
            width: 12rem;
            height: 12rem;
            margin: 0 4.5rem;
            margin-bottom: 1rem;
            border-radius: 6rem;
            overflow: hidden;
            text-align: center;
            border: 0.2rem solid #f3f3f3;

            img {
                @include posiAR(absolute, 0, 0);
                object-fit: cover;
                width: 12rem;
                height: 12rem;
                // z-index: 99;
            }

            input {
                @include posiAR(absolute, -2rem, 0);
                height: 14rem;
            }
        }

        p {
            text-align: center;
            color: #606266;
            font-size: 0.75rem;
            letter-spacing: 0.1rem;
            margin-bottom: 2rem;
        }
    }

    .formBottom {
        width: 23rem;
        margin-top: 2rem;
        padding: 0 4rem;
        @include disFlex(space-between, center);

        button {
            width: 7rem;
            overflow: hidden;

            .content {
                width: 14rem;
                height: 2.5rem;
                transform: translateX(-7rem);
                transition: all 0.5s;

                i {
                    display: inline-block;
                    width: 7rem;
                    height: 2.5rem;
                    font-size: 1.5rem;
                    font-weight: 700;
                    vertical-align: middle;
                }

                span {
                    display: inline-block;
                    width: 7rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    font-size: 1rem;
                }
            }

            &:hover .content {
                transform: translateX(0);
            }

            &:hover {
                box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.1);
            }

            &:active {
                transform: translateY(0rem);
                box-shadow: 1px 1px 10px 1px rgba($color: #000000, $alpha: 0.2);
            }
        }
    }

    .mask {
        @include posiAR(absolute, -4rem, 32rem);
        width: 40rem;
        height: 40rem;
        border-radius: 20rem;
        background-color: $primaryGreen;

        img {
            width: 35rem;
            @include posiAR(absolute, 14rem, -2rem);
        }
    }

}

@media only screen and (max-width: 420px) {
    #Information {
        width: 30rem;
    }
}
</style>