<template>
    <div id="register">
        <h2 style="text-align: center">欢迎注册废柴工作室</h2>
            <input type="text" v-model="name" id="name" name="username" lay-verify="required" placeholder="请输入昵称" autocomplete="off" class="layui-input" >
            <input type="text" v-model="phone" id="phone" name="username" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input">
            <input type="password" v-model="password" id="password" name="username" lay-verify="required" placeholder="请设置您的密码" autocomplete="off" class="layui-input">
            <input type="password" v-model="confirmPwd" id="confirmPwd" name="username" lay-verify="required" placeholder="请确认您的密码" autocomplete="off" class="layui-input">
            <img src="/right.png" v-if="confirm&confirmPwd!=''" />
            <p id="message">{{message}}</p>
        <p @click="register" id="commit">注册</p>
    </div>
</template>
<script>
    import crypto from 'crypto';
    import axios from 'axios';
    export default {
        name: "register",
        data() {
            return {
                name: '',
                phone:'',
                password:'',
                num :'',
                qq:'',
                message:'',
                confirmPwd:'',
                img:''
        }
        },
        methods: {
            register() {
                if(!this.confirm){
                    this.message = '两次密码输入不一致';
                    return false;
                }else if(this.name.match(".*[$& #].*$")){
                    this.message = '请输入合法昵称（不能包含$&[空格]#）等';
                    return false;
                }else if(!this.phone.match("[1][0-9]{10}$")){
                    this.message = '请输入正确的手机号';
                    return false;
                }else if(this.password==''){
                    this.message = '请设置密码';
                    return false;
                }
                const that = this;
                const md5=crypto.createHash("md5");
                md5.update(this.password);
                let md5Password=md5.digest('hex');
                axios.post('http://47.100.137.63:8080/user/regist?phone='+this.phone + '&name='+this.name + '&password='+md5Password
                ).then(function (res) {
                    console.log(res);
                    if (res.data == '$succeed') {
                        that.$parent.registerView = false;
                        that.$parent.$parent.register = true;
                        that.$parent.phoneNum = that.phone;
                        that.$router.push('/perInfo');
                    }else if(res.data == '$existed'){
                        that.message = '该手机号已注册';
                        console.log(res.data);
                        return ;
                    }
                }).catch(function () {
                   this.message="服务器发生未知错误";
                })
            }
        },
        computed: {
          confirm: function(){
            if(this.password==this.confirmPwd){
              return true;
            }else{
              return false;
            }
          }
        }
    }
</script>
<style scoped>
    #register {
        position: absolute;
        top: 18vh;
        width: 36vw;
        height: 68vh;
        left: 32vw;
        background-color: #bff7ff;
        margin: 0 auto;
        border-radius: 2rem;
        z-index: 2;
    }
    #commit{
      position: absolute;
      width: 80%;
      left: 10%;
      top: 72%;
      height: 3rem;
      border-radius: 4rem;
      text-align: center;
      background-color: antiquewhite;
      box-shadow: 0 20px #ffda00,
      0  20px rgba(0,0,0,0.3);
      font-size: 1.4rem;
      cursor: pointer;
      transition: 0.2s linear;
    }
    #commit:active {
      transform: translateY(20px);
      box-shadow: 0 5px 0 #ffda00,
      0 15px 5px rgba(0,0,0,0.3);
    }
    #register img {
      position: absolute;
      width: 40px;
      left: 82%;
      top: 54%;
    }
    #name {
      position: absolute;
        border-radius: 0.2rem;
        border-style: none;
      width: 60%;
      height: 8%;
      left: 20%;
      top:  15%;
    }
    #phone {
      position: absolute;
        border-radius: 0.2rem;
        border-style: none;
      width: 60%;
      height: 8%;
      left: 20%;
      top: 28%;
    }
    #password {
      position: absolute;
        border-radius: 0.2rem;
        border-style: none;
      width: 60%;
      height: 8%;
      left: 20%;
      top: 41%;
    }
    #confirmPwd {
      position: absolute;
        border-radius: 0.2rem;
        border-style: none;
      width: 60%;
      height: 8%;
      left: 20%;
      top: 54%;
    }
    #message {
        position: absolute;
        top: 62%;
        color: red;
        font-size: 1rem;
        text-align: center;
        width: 100%;
    }
</style>
