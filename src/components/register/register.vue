<template>
    <div id="register">
        <h3>欢迎注册废柴工作室</h3>
        <div class="resInfo">
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="请输入你的姓名" autocomplete="off" class="layui-input">
        </div>
        <div class="resInfo">
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="请输入你的手机号" autocomplete="off" class="layui-input">
        </div>
        <div class="resInfo">
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="请设置你的密码" autocomplete="off" class="layui-input">
        </div>
        <div class="resInfo">
            <input type="text" v-model="phone" name="username" lay-verify="required" placeholder="再次确人你的密码" autocomplete="off" class="layui-input">
        </div>
        <button @click="register()">注册</button>
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
        }
        },
        methods: {
            register() {
                // eslint-disable-next-line no-unused-vars
                const that = this;
                const md5=crypto.createHash("md5");
                let md5Password=md5.digest();
                //let url = "http://localhost:80/login";
                axios.post('http://47.100.137.63:8080/user/getInfo?phone=phone' + this.name + '&password='+this.md5Password
                ).then(function (res) {
                    console.log(res);
                    if (res.data == 'succeed') {
                        that.$parent.loginView = false;
                    }
                }).catch(function () {
                   this.register=false;
                   this.message="error";
                })
            }
        }
    }
</script>
<style scoped>
    #register {
        position: absolute;
        top: 25vh;
        width: 60vh;
        height: 80vh;
        left: calc(42.5vw - 20vh);
        background-color: #bff7ff;
        margin: 0 auto;
        border-radius: 2rem;
        z-index: 2;
    }
    .resInfo {
        margin-top: 3rem;
    }
    .resInfo input {
        position: relative;
        width: 68%;
        height: 2.5rem;
        border-radius: 0.2rem;
        border-style: none;
    }
    .resInfo label {
        margin-top: 10rem;
        margin-left: 2.5rem;
        margin-right: 1rem;
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
</style>