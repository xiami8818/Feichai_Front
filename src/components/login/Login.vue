<template>
    <div id="login">
        <label class="layui-form-label login-form" id="nameIcon"><i class="iconfont">&#xe6b8;</i></label>
        <input type="text" v-model="phone" name="username" id="nameText" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input"><span></span>
        <label class="layui-form-label login-form" id="passwordIcon"><i class="iconfont">&#xe82b;</i></label>
        <input type="password" id="passwordText" v-model="password" name="username" lay-verify="required" placeholder="请输入您的密码" autocomplete="off" class="layui-input">
    <p @click="login" id="commit">登录</p>
    <p id="tip">{{msg}}</p>
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
            const md5 = crypto.createHash('md5');
            md5.update(this.password)
            let md5Password =md5.digest('hex');
            axios.post('http://47.100.137.63:8080/user/login?phone='+this.phone+'&password='+md5Password,
            ).then(function (res){
              if(res.data=='$succeed'){
                that.$parent.loginView = false;
                that.$parent.$parent.login = true;
                that.$parent.phoneNum = that.phone;
                axios.get("http://47.100.137.63:8080/user/getInfo?phone="+that.phone).then(function (res){
                    let temp = res.data.split("&");
                    that.$parent.name = temp[0];
                    that.$parent.header = temp[1];
                    that.$parent.login = true;
                })
              }else{
                that.msg = '用户名或密码错误';
                  that.$parent.$parent.login = false;
              }
            }).catch(function (){
              that.msg = '服务器发生未知错误,请稍后重试';
              that.$parent.$parent.login = false;
            })
          }
      }
    }
</script>
<style scoped>
#login {
  position: absolute;
  top: 25vh;
  width: 30vw;
  height: 50vh;
  left: 35vw;
  background-color: #bff7ff;
  margin: 0 auto;
  border-radius: 2rem;
  z-index: 4;
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
    margin-top: auto;
    font-family:"iconfont" !important;
    font-size:26px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
#nameIcon {
  position: absolute;
  top: 12%;
  left:  10%;
}
#nameText {
  position: absolute;
    border-radius: 0.2rem;
    border-style: none;
  height: 12%;
  width: 60%;
  left: 24%;
  top: 11%;
}
#passwordIcon {
  position: absolute;
  top: 40%;
  left: 10%;
}
#passwordText {
  position: absolute;
    border-radius: 0.2rem;
    border-style: none;
  top: 38%;
  height: 12%;
  width: 60%;
  left: 24%;
}
.loginInfo label {
    margin-top: 10rem;
    margin-left: 2.5rem;
    margin-right: 1rem;
}
#commit{
    position: absolute;
    width: 80%;
    left: 10%;
    top: 60%;
    height: 3rem;
    border-radius: 4rem;
    text-align: center;
    background-color: antiquewhite;
    box-shadow: 0 20px #ffda00, 0  20px rgba(0,0,0,0.3);
    font-size: 1.4rem;
    cursor: pointer;
    transition: 0.2s linear;
}
#commit:active {
  transform: translateY(20px);
  box-shadow: 0 5px 0 #ffda00, 0 15px 5px rgba(0,0,0,0.3);
}
#tip {
  color: red;
  position: absolute;
  width: 100%;
  top: 50%;
  font-size: 1rem;
  text-align: center;
}
</style>