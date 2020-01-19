<template>
  <div class="container-login">
    <el-card class="box-card">
      <img src="../../assets/logo_index.png" alt="">
      <!-- 手机号输入框 -->
     <el-form :model="LoginForm">
  <el-form-item>
    <el-input style="margin-top:20px" v-model="LoginForm.mobile" placeholder="请输入手机号"></el-input>
  </el-form-item>
   <!-- 验证码输入框 -->
  <el-form-item>
    <el-input v-model="LoginForm.code" placeholder="请输入验证码" style="width:238px;margin-right:10px"></el-input>
    <el-button>发送验证码</el-button>
  </el-form-item>
    <el-checkbox v-model="checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
     </el-form>
     <el-button type="primary" style="width:100%;margin-top:20px">登录</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      LoginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      checked: true
    }
  }
}
</script>

<style lang="less" scoped>
.container-login{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left:0;
  background: url(../../assets/login_bg.jpg) no-repeat center;
  .box-card{
    width: 400px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-60%);
    background-color: #fff;
    img{
      display: block;
      width: 200px;
      margin: 0 auto;
    }
  }
}
</style>
