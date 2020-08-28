<template>
    <div id="header">
        <img src="../../assets/logo.png" id="ico" />
        <span id="title" v-if="computer">废柴工作室</span>
          <router-link class="menu" to="/" v-if="computer">首页</router-link>
          <a class="menu" href="http://feichai.xyz/oj" v-if="computer">OJ平台</a>
          <router-link class="menu" to="/je" v-if="computer">社团信息</router-link>
          <a class="menu" href="http://feichai.xyz/analyse.html" v-if="computer">视频解析</a>
          <a class="menu" href="#" v-if="computer">关于我们</a>
      <div id="loginDivC" v-if="computer">
        <img :src=this.header id="head-img" />
        <span @click="showLogin()" v-if="login===false">登录</span>
        <span @click="showRegister()" v-if="login===false">注册</span>
        <router-link to="perInfo" id="nameLink"><span id="name" v-if="login">{{name}}</span></router-link>
        <span id="exit" v-if="login" @click="logout">注销</span>
      </div>
      <div id="loginDivP" v-if="phone">
        <span @click="showLogin()">登录</span>
        <span @click="showRegister()">注册</span>
      </div>
        <Login v-if="loginView"></Login>
        <Register v-if="registerView"></Register>
    </div>
</template>
<script>
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import axios from "axios";
    export default {
      name: "Header",
      components:{
        Login,
        Register
      },
      methods: {
        showRegister() {
          this.registerView = !this.registerView;
          this.loginView = false;
        },
        showLogin() {
          this.loginView = !this.loginView;
          this.registerView = false;
        },
          analyse() {
          window.location.href = 'http://feichai.xyz/analyse.html';
        },
        check(){
          const that = this;
          axios.get("http://47.100.137.63:8080/user/check").then(function (res){
            if(res.data=='$false'){
              return ;
            }else{
              axios.get("http://47.100.137.63:8080/user/getInfo?phone="+res.data).then(function (response){
                let temp = response.data.split("&");
                that.name = temp[0];
                that.header = temp[1];
                that.login = true;
              })
            }
          })
        },
        logout(){
          axios.post("http://localhost:8080/user/logout");
          this.login = false;
          this.header = '/unLogin.jpg';
          if(this.$route.path=="/perInfo"){
            this.$router.push('/index');
          }
        }
      },
      computed: {
        phone() {
          return document.documentElement.clientWidth < document.documentElement.clientHeight;
        },
        computer() {
          return document.documentElement.clientWidth >= document.documentElement.clientHeight;
        }
      },
      data() {
        return {
          loginView: false,
          registerView: false,
          login: false,
          header: '/unLogin.jpg',
          name: ''
        }
      },
      mounted() {
        this.check();
      }
    }
</script>
<style scoped>
    #header {
        position: relative;
        width: 100vw;
        height: 14vh;
        top: 0px;
        left: 0px;
        background-color: darkgray;
        z-index: 2;
    }
    #ico {
        position: relative;
        left: 10vw;
        top: 0.2vh;
        width: 20vh;
        height: 100%;
    }
    @font-face {
        font-family: hjlzt;
        src:url("../../assets/font/hjlzt.ttf");
    }
    @font-face {
      font-family: daimengti;
      src: url("../../assets/font/daimengti.ttf");
    }
    #title {
        position: relative;
        top: -6vh;
        left: 10vw;
        font-family: hjlzt;
        font-size: 2vw;
    }
    #head-img {
      border-radius: 100%;
    }
    .menu {
      position: relative;
      font-family: daimengti;
      font-size: 1.6vw;
      margin-left: 2vw;
      color: aliceblue;
      top: -6vh;
      left: 12vw;
      text-decoration-line: none;
    }
    .menu:hover {
      color: coral;
    }
    #loginDivC {
      position: absolute;
      height: 100%;
      top: 0;
      left: calc(100% - 25vw);
    }
    #loginDivC img {
      position: relative;
      height: 80%;
      top: 10%;
      left: 0vw;
    }
    #loginDivC span {
      position: relative;
      top: 0;
      left: 0vw;
      margin-left: 1rem;
      margin-bottom: 34rem;
      height: 100%;
      font-size: 1.4rem;
      font-family: daimengti;
    }
    #loginDivC span:hover {
        color: coral;
    }
    #loginDivC span {
        cursor: cell;
    }
    #loginDivP {
      position: absolute;
      top: 40%;
      height: auto;
      left: 66%;
      font-size: 5vw;
      font-family: daimengti;
    }
    #loginDivP span{
        margin-left: 2vw;
    }
    #name {
      color: lavenderblush;
    }
    #nameLink {
      text-decoration-line: none;
    }
    #exit {
      color: azure;
    }
</style>