<template>
    <div id="login">
        <div class="loginInfo">
            <label class="layui-form-label login-form"><i class="iconfont">&#xe6b8;</i></label>
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input">
        </div>
        <div class="loginInfo">
            <label class="layui-form-label login-form"><i class="iconfont">&#xe82b;</i></label>
            <input type="password" v-model="password" name="username" lay-verify="required" placeholder="请输入您的密码" autocomplete="off" class="layui-input">
        </div>
        <button @click="login">登录</button>
        <p>{{msg}}</p>
    </div>
</template>
    <div>

    </div>
<script>
import axios from 'axios';
import crypto from 'crypto';
    export default {
        name: "Login",
      data(){
          return {
            phone:'',
            password:'',
            msg:''
          }
      },
      methods: {
          login() {
            const that = this;
            //let url = "http://localhost:80/login";
            const md5 = crypto.createHash('md5');
            md5.update(this.password)
            let md5Password =md5.digest();
            console.log(md5Password);
            axios.post('http://47.100.137.63:8080/login?phone='+this.phone+'&password='+md5Password,
            ).then(function (res){
              console.log(res);
              if(res.data=='succeed'){
                that.$parent.loginView = false;
              }
            })
          }
      }
    }
</script>

<style scoped>
#login {
  position: absolute;
  top: 25vh;
  width: 40vh;
  height: 50vh;
    left: calc(50vw - 20vh);
  background-color: cornsilk;
  margin: 0 auto;
  z-index: 2;
}
#login p {

}
@font-face {
    font-family: 'iconfont';
    src: url('../../assets/font/iconfont.eot');
    src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../assets/font/iconfont.woff') format('woff'),
    url('../../assets/font/iconfont.ttf') format('truetype'),
    url('../../assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    color: darkgrey;
    font-family:"iconfont" !important;
    font-size:26px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.loginInfo {
    margin-top: 3rem;
}
.loginInfo input {
    position: relative;
    width: 60%;
    height: 1.4rem;
}
.loginInfo label {
    margin-left: 1rem;
    margin-right: 1rem;
}
#login button{
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 3rem;
    height: 4rem;
}
</style>