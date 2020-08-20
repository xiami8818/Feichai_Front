<template>
    <div id="header">
        <img src="../../assets/logo.png" id="ico" />
        <span id="title" v-if="computer">废柴工作室</span>
          <router-link class="menu" to="/" v-if="computer">首页</router-link>
          <a class="menu" href="#" v-if="computer">OJ平台</a>
          <a class="menu" href="#" v-if="computer">社团信息</a>
          <a class="menu" href="http://feichai.xyz/analyse.html" v-if="computer">视频解析</a>
          <a class="menu" href="#" v-if="computer">关于我们</a>
      <div id="loginDivC" v-if="computer">
        <img v-bind:src=this.$parent.img />
        <span @click="showLogin()" v-if="this.$parent.login===false">登录</span>
        <span @click="showRegister()" v-if="this.$parent.login===false">注册</span>
      </div>
      <div id="loginDivP" v-if="phone">
        <span @click="showLogin()">登录</span>
        <span @click="showRegister()">注册</span>
      </div>
    </div>
</template>
<script>
    export default {
        name: "Header",
        methods: {
            showRegister(){
                this.$parent.registerView = !this.$parent.registerView;
                this.$parent.loginView = false;
            },
            showLogin(){
                this.$parent.loginView = !this.$parent.loginView;
                this.$parent.registerView = false;
            },
            analyse(){
              window.location.href='http://feichai.xyz/analyse.html';
            }
        },
        computed: {
            phone(){
              return document.documentElement.clientWidth<document.documentElement.clientHeight;
            },
            computer() {
              return document.documentElement.clientWidth >= document.documentElement.clientHeight;
            }
        },
        data(){
            return {

            }
        },
        mounted() {
            console.log(this.$parent.img)
        }
    }
</script>
<style scoped>
    #header {
        position: relative;
        width: 100%;
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
</style>