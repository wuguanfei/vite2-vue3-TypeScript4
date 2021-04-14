<template>
  <section class="login">
    <div class="login-form">
      <el-form ref="formInline" :model="loginForm" label-width="80px" :rules="ruleForm">
        <el-form-item label="账号：" prop="account">
          <el-input v-model="loginForm.account" size="large" placeholder="admin" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input v-model="loginForm.password" size="large" placeholder="admin" type="password" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="large" type="primary" class="btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { loginSvr } from '@/api/loginSvr'

export default {
  setup() {
    const LoginSvr = new loginSvr()
    const formInline = ref(null)
    const loginForm = reactive({
      account: 'admin',
      password: 'admin'
    })
    const ruleForm = reactive({
      account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    })
    const router = useRouter()
    const login = () => {
      formInline.value.validate().then(() => {
        /* 
				// 该注释为登录请求
				LoginSvr.login(loginForm.account, loginForm.password).then((res) => {
          console.log(res)
        }) 
				*/
        if (loginForm.account === 'admin' && loginForm.password === 'admin') {
          let userInfo = {
            metaData: { username: 'admin' },
            token: 'this is token'
          }
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
          router.replace('/index')
        } else {
          ElMessage.error('账号或密码输入不正确！')
        }
      })
    }
    return {
      loginForm,
      login,
      formInline,
      ruleForm
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: #2d3a4b;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  color: #fff;

  .login-form {
    width: 400px;
    margin: 0 auto;
    padding-top: 250px;
    h2 {
      text-align: center;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
<style lang="scss">
.el-form-item__label {
  color: #fff !important;
  font-size: 16px;
}
</style>
