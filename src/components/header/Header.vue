<template>
    <div id="header">
        <img src="../../assets/logo.png" id="ico" />
        <span id="title" v-if="computer">废柴工作室</span>
          <a class="menu" href="#" v-if="computer">首页</a>
          <a class="menu" href="#" v-if="computer">OJ平台</a>
          <a class="menu" href="#" v-if="computer">社团信息</a>
          <a class="menu" @click="analyse" v-if="computer">视频解析</a>
          <a class="menu" href="#" v-if="computer">关于我们</a>
      <div id="loginDiv">
        <img src="../../assets/unLogin.jpg">
        <span id="loginButton" @click="showLogin()">登录</span>
        <span id="registButton">注册</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            showLogin(){
                this.$parent.loginView = !this.$parent.loginView;
            },
            analyse(){
              window.location.href='baidu.com';
              window.open();
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
        inject:['showView']
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
      font-size: 1.8vw;
      color: coral;
    }
    #loginDiv {
      position: absolute;
      top: 0vh;
      height: 100%;
      width: 20vw;
      left: calc(100% - 24vw);
    }
    #loginDiv img {
      position: relative;
      height: 80%;
      top: 10%;
      left: 0vw;
    }
    #loginDiv span {
      position: relative;
      top: 0;
      left: 0vw;
      margin-left: 1rem;
      height: 100%;
      font-size: 1.6rem;
      font-family: daimengti;
    }
    #loginDiv span:hover {
        color: coral;
    }
    #loginDiv span {
        cursor: cell;
    }
</style>