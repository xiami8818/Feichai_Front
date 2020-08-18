<template>
    <div id="register">
        <h2 style="text-align: center">欢迎注册废柴工作室</h2>
        <div class="resInfo">
            <input type="text" v-model="name" name="username" lay-verify="required" placeholder="请输入您的姓名" autocomplete="off" class="layui-input" >
        </div>
        <div class="resInfo">
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input">
        </div>
        <div class="resInfo">
            <input type="text" v-model="password" name="username" lay-verify="required" placeholder="请设置您的密码" autocomplete="off" class="layui-input">
        </div>
        <div class="resInfo">
            <input type="text" v-model="confirmPwd" name="username" lay-verify="required" placeholder="请确认您的密码" autocomplete="off" class="layui-input">
          <img src="../../assets/right.jpg" v-if="confirm&confirmPwd!=''" />
        </div>
        <button>注册</button>
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
        width: 50vw;
        height: 68vh;
        left: 25vw;
        background-color: #bff7ff;
        margin: 0 auto;
        border-radius: 2rem;
        z-index: 2;
    }
    .resInfo {
        margin-top: 2rem;
    }
    .resInfo input {
        position: relative;
        width: 68%;
        height: 2.5rem;
        border-radius: 0.2rem;
        border-style: none;
        margin-left: 4.5rem;
    }
    #register button{
        position: relative;
        width: 80%;
        left: 10%;
        margin-top: 2rem;
        height: 3rem;
        border-radius: 4rem;
        outline-style: none;
        border-style: none;
    }
    .resInfo img {
      position: relative;
      top: 4vh;
    }
</style>
