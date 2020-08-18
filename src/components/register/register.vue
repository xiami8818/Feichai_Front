<template>
    <div id="register">
        <h2 style="text-align: center">欢迎注册废柴工作室</h2>
            <input type="text" v-model="name" id="name" name="username" lay-verify="required" placeholder="请输入您的姓名" autocomplete="off" class="layui-input" >
            <input type="text" v-model="phone" id="phone" name="username" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input">
            <input type="text" v-model="password" id="password" name="username" lay-verify="required" placeholder="请设置您的密码" autocomplete="off" class="layui-input">
            <input type="text" v-model="confirmPwd" id="confirmPwd" name="username" lay-verify="required" placeholder="请确认您的密码" autocomplete="off" class="layui-input">
          <img src="../../assets/right.png" v-if="confirm&confirmPwd!=''" />
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
                confirmPwd:''
        }
        },
        methods: {
            register() {
                // eslint-disable-next-line no-unused-vars
                const that = this;
                const md5=crypto.createHash("md5");
                let md5Password=md5.digest();
                //let url = "http://localhost:80/login";
                axios.post('http://localhost:80/user/login?phone=phone' + this.name + '&password='+md5Password
                ).then(function (res) {
                    console.log(res);
                    if (res.data == 'succeed') {
                        that.$parent.loginView = false;
                        axios.get("http://localhost:80")
                    }
                }).catch(function () {
                   this.register=false;
                   this.message="error";
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
      top: 70%;
      height: 3rem;
      border-radius: 4rem;
      text-align: center;
      background-color: antiquewhite;
      box-shadow: 0 25px #ffda00,
      0  35px rgba(0,0,0,0.3);
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
      top: 60%;
    }
    #name {
      position: absolute;
      width: 60%;
      height: 7%;
      left: 20%;
      top:  15%;
    }
    #phone {
      position: absolute;
      width: 60%;
      height: 7%;
      left: 20%;
      top: 30%;
    }
    #password {
      position: absolute;
      width: 60%;
      height: 7%;
      left: 20%;
      top: 45%;
    }
    #confirmPwd {
      position: absolute;
      width: 60%;
      height: 7%;
      left: 20%;
      top: 60%;
    }
</style>
