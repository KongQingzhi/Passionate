<template>
    <div id="CreationCenter">
        <h1 class="title">发布中心</h1>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="标题" prop="articleTitle">
                <el-input v-model="ruleForm.articleTitle" placeholder="Hello Wolrd！" />
            </el-form-item>
            <el-form-item label="内容" prop="articleContent">
                <el-input v-model="ruleForm.articleContent" type="textarea" />
            </el-form-item>
            <el-form-item label="类型" prop="articleClass">
                <el-select v-model="ruleForm.articleClass" placeholder="搞笑">
                    <el-option :label="items" :value="items" v-for="items in optionList" />
                </el-select>
            </el-form-item>
            <el-form-item label="隐私" prop="articlePrivacy">
                <el-radio-group v-model="ruleForm.articlePrivacy">
                    <el-radio label="公开" />
                    <el-radio label="私有" />
                </el-radio-group>
            </el-form-item>
        </el-form>

        <div class="pushImage">
            <div class="imginput">
                <input type="file" name="" id="" @change="pushFile" ref="inputFile" multiple>
                <img src="../img/add.png" alt="" width="150">
            </div>
            <!-- <img :src="items" alt="" v-for="items in dialogImageUrl" height="150" width="150"> -->
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
</template>

<script lang="ts" setup >
import { defineComponent, reactive, ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    articleTitle: '',
    articleClass: '',
    articlePrivacy: '',
    articleContent: '',
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
    articlePrivacy: [
        {
            required: true,
            message: '请选择是否公开',
            trigger: 'change',
        },
    ],
    articleContent: [
        { required: true, message: '请输入内容', trigger: 'blur' },
    ],
})




const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))


function pushFile() {
    let formData = new FormData();
    // formData.append('uploadFile', this.$refs.inputFile.files[0], this.$refs.inputFile.files[0].name);
    // const config = {
    //     headers: {
    //         "Content-Type": "multipart/form-data;boundary=" + new Date().getTime()
    //     }
    // };
    // release.updateFile(formData, config).then(value => {
    //     this.dialogImageUrl.push(value.data)
    // }).catch(error => {
    //     console.log(error)
    // })
}
// function sendData() {
//     function formatDate(myTime) {
//         // 比如需要这样的格式 yyyy-MM-dd hh:mm:ss
//         let date = new Date(myTime);
//         let Y = date.getFullYear() + '-';
//         let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
//         let D = date.getDate() + ' ';
//         let h = date.getHours() + ':';
//         let m = date.getMinutes() + ':';
//         let s = date.getSeconds();
//         var str = (Y + M + D + h + m + s)
//         return str;
//     };
//     if (sessionStorage.getItem('U_account') != null) {
//         if (this.ArticalTitle != '' && this.textarea != '' && this.value != '' && this.dialogImageUrl != []) {
//             release.release({
//                 account: sessionStorage.getItem('U_account'),
//                 time: formatDate(new Date),
//                 title: this.ArticalTitle,
//                 container: this.textarea,
//                 clazz: this.value,
//                 img: this.dialogImageUrl.join('*')
//             }).then(res => {
//                 alert('上传成功')
//                 this.ArticalTitle = '';
//                 this.textarea = '';
//                 this.value = '';
//                 this.dialogImageUrl = [];
//             })
//         } else {
//             alert('请补全信息')
//         }
//     }
// }












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
            width: 150px;
            height: 150px;
            overflow: hidden;
            border-radius: $borRadiusBig;
            border: 2px dotted #dcdfe6;

            input {
                position: absolute;
                width: 150px;
                height: 150px;
                opacity: 0;
            }
        }

        img {
            object-fit: contain
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
</style>