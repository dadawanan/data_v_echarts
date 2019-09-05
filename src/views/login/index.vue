<template>
  <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 50rem);">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="ruleFormclass">
  <el-form-item label="账号" prop="account">
    <el-input type="text" v-model="ruleForm.account" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="passWord">
    <el-input type="password" v-model="ruleForm.passWord" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button style="width:100%;font-size:2.5rem;height:5rem" type="primary" @click="submitForm('ruleForm')">提交</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import { login } from '@/api'
import Cookies from 'js-cookie'
export default {
  data () {
    var accountPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        account: '',
        passWord: ''
      },
      rules: {
        account: [
          { validator: accountPass, trigger: 'blur' }
        ],
        passWord: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm.account, this.ruleForm.passWord).then(res => {
            Cookies.set('token', res.token, { expires: 365 })
            Cookies.set('randomKey', res.randomKey)
            this.$router.push({ name: 'index' })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
.ruleFormclass{
  width: 40rem;
  padding: 4rem 5rem 2rem;
  background-color: rgba(10,42,101,0.7);
  border-radius: 10px
}
.ruleFormclass .el-form-item__label{
  font-size: 2.5rem;
  color: #fff;
  width: 6rem !important;
  line-height: 5rem
}
.ruleFormclass .el-input__inner{
  height: 5rem;
  line-height: 5rem
}
.ruleFormclass .el-input{
  font-size: 2.5rem;
}
.ruleFormclass .el-form-item__error{
  font-size: 2rem
}
.ruleFormclass .el-form-item{
  margin-bottom: 3rem
}
.ruleFormclass .el-input__suffix{
  top: 1rem;
  right: 1rem;
  color: rgba(64,158,255,1)
}
</style>
