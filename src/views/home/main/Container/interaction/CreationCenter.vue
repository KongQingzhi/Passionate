<template>
    <div id="CreationCenter">
        <h1 class="title">发布中心</h1>
        <div class="fromContainer">
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                :size="formSize" status-icon>
                <el-rol :span="24">
                    <el-form-item label="标题" prop="articleTitle">
                        <el-input v-model="ruleForm.articleTitle" placeholder="Hello Wolrd！" />
                    </el-form-item>
                </el-rol>
                <el-form-item label="内容" prop="articleContent">
                    <el-input v-model="ruleForm.articleContent" type="textarea" />
                </el-form-item>
                <el-form-item label="类型" prop="articleClass">
                    <el-select v-model="ruleForm.articleClass" placeholder="搞笑">
                        <el-option :label="items" :value="items" v-for="items in optionList" />
                    </el-select>
                </el-form-item>
                <!-- <el-form-item label="隐私" prop="articlePrivacy">
                            <el-radio-group v-model="ruleForm.articlePrivacy">
                                <el-radio label="公开" />
                                <el-radio label="私有" />
                            </el-radio-group>
                        </el-form-item> -->
            </el-form>

            <div class="pushImage">
                <div class="imginput">
                    <input type="file" name="" id="" @change="pushFile" ref="inputFile" multiple>
                    <img src="../../../../../assets/img/add.png" alt="" width="150">
                </div>
                <img class="imgList" :src="items" alt="" v-for="items in dialogImageUrl">
            </div>
            <div class="formBottom">
                <button @click="submitForm(ruleFormRef)">
                    <div class="content">
                        <i class="bi bi-check-lg"></i>
                        <span>发 布</span>
                    </div>
                </button>
                <button @click="resetForm(ruleFormRef)">
                    <div class="content">
                        <i class="bi bi-trash-fill"></i>
                        <span>取 消</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'
import api from '../../../../../axios/api';
import { useRouter, useRoute } from 'vue-router'
export default ({
    setup() {
        const User: any = sessionStorage;
        const router = useRouter()
        const formSize = ref('default')
        const ruleFormRef = ref<FormInstance>()
        const ruleForm = reactive({
            articleTitle: '',
            articleClass: '',
            articleContent: ''
        })

        const optionList = ['搞笑', '新鲜', '生活'];
        const rules = reactive<FormRules>({
            articleTitle: [
                {
                    required: true,
                    message: '请输入标题',
                    trigger: 'blur'
                },
            ],
            articleClass: [
                {
                    required: true,
                    message: '请选择类型',
                    trigger: 'change',
                },
            ],
            articleContent: [
                { required: true, message: '请输入内容', trigger: 'blur' },
            ],
        })

        onMounted(() => {
            if (sessionStorage.getItem('UserAccount') == undefined) {
                router.push({
                    name: 'Login'
                })
            }
        })



        const options = Array.from({ length: 10000 }).map((_, idx) => ({
            value: `${idx + 1}`,
            label: `${idx + 1}`,
        }))

        return {
            User,
            ruleFormRef,
            ruleForm,
            formSize,
            optionList,
            rules,
            options
        }
    },
    data() {
        return {
            dialogImageUrl: <string[]>[],
        }
    },
    methods: {
        formatDate() {
            const myTime = new Date();
            const date = new Date(myTime);
            const Y = date.getFullYear() + '-';
            const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            const D = date.getDate() + ' ';
            const h = date.getHours() + ':';
            const m = date.getMinutes() + ':';
            const s = date.getSeconds();
            const str = (Y + M + D + h + m + s)
            return str;
        },

        pushFile() {
            const that: any = this;
            let formData = new FormData();
            formData.append('uploadFile', that.$refs.inputFile.files[0], that.$refs.inputFile.files[0].name);
            const config = {
                headers: {
                    "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
                }
            };
            api.updateFile(formData).then(res => {
                const data: string = res.data;
                console.log(data);
                this.dialogImageUrl.push(data)
            }).catch(error => {
                console.log(error)
            })
        },

        resetForm(formEl: FormInstance | undefined) {
            if (!formEl) return
            formEl.resetFields();
            this.dialogImageUrl = [];
        },

        async submitForm(formEl: FormInstance | undefined) {
            if (!formEl) return
            await formEl.validate((valid, fields) => {
                if (valid) {
                    console.log('submit!')
                    if (this.User.UserAccount != null) {
                        console.log(1);
                        console.log(this.User.UserAccount, this.formatDate(), this.ruleForm.articleTitle, this.ruleForm.articleContent, this.ruleForm.articleClass, this.dialogImageUrl.join('*'));
                        // if (this.ArticalTitle != '' && this.textarea != '' && this.value != '' && this.dialogImageUrl != []) {
                        api.release({
                            UserAccount: this.User.UserAccount,
                            ArticleTime: this.formatDate(),
                            ArticleTitle: this.ruleForm.articleTitle,
                            ArticleContent: this.ruleForm.articleContent,
                            ArticleClass: this.ruleForm.articleClass,
                            ArticleImage: this.dialogImageUrl.join('*')
                        }).then(res => {
                            alert('上传成功')
                            this.ruleForm.articleTitle = '';
                            this.ruleForm.articleClass = '搞笑';
                            this.ruleForm.articleContent = '';
                            this.dialogImageUrl = [];
                        })
                    } else {
                        alert('请补全信息')
                    }
                } else {
                    console.log('error submit!', fields)
                }
            })
        },
    }
})











</script>

<style lang="scss" scoped>
@import '../../../../../assets/style.scss';

#CreationCenter {
    width: 64rem;
    padding: 2rem 4rem;
    background-color: #fff;
    border-radius: $borRadiusBig;

    .title {
        margin-bottom: 2rem;
        line-height: 4rem;
        text-align: center;
    }

    .demo-ruleForm {
        width: 50rem;

        .el-form-item {
            margin-bottom: 1.5rem;
        }
    }

    .el-upload {
        width: 50rem;
        padding-left: 15rem;
        margin-left: 15rem;
    }

    .pushImage {
        width: 46rem;
        margin: 0 4rem;
        padding: 1rem;
        border: 2px solid #dcdfe6;
        border-radius: 12px;

        .imginput {
            display: inline-block;
            width: 9.375rem;
            height: 9.375rem;
            overflow: hidden;
            border-radius: $borRadiusBig;
            border: 2px dotted #dcdfe6;

            input {
                position: absolute;
                width: 9.375rem;
                height: 9.375rem;
                opacity: 0;
            }
        }

        img {
            object-fit: contain;
            width: 9.375rem;
            height: 9.375rem;
        }

        .imgList {
            border-radius: $borRadiusBig;
            border: 2px solid #dcdfe6;
        }
    }

    .formBottom {
        margin-top: 2rem;
        padding: 0 15rem;
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
}

@media only screen and (max-width: 420px) {
    #CreationCenter {
        width: 28rem;
        padding: 2rem 1rem;

        .fromContainer {
            width: 28rem;
            margin-left: -4rem;

            .demo-ruleForm {
                width: 28rem;

                .el-form-item {
                    margin-bottom: 1.5rem;
                }
            }

            .el-upload {
                width: 28rem;
                padding-left: 0rem;
                margin-left: 0rem;
            }

            .pushImage {
                width: 26rem;
                margin-left: 4rem;
            }

            .formBottom {
                width: 26rem;
                margin: 2rem 0 2rem 4rem;
                padding: 0 0rem;
                @include disFlex(space-around, center);
            }
        }
    }
}
</style>