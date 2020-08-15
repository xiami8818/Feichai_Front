<template>
    <div id="header">
        <img src="../../assets/logo.png" id="ico" />
        <span id="title" v-if="computer">废柴工作室</span>
          <a class="menu" href="#" v-if="computer">首页</a>
          <a class="menu" href="#" v-if="computer">OJ平台</a>
          <a class="menu" href="#" v-if="computer">社团信息</a>
          <a class="menu" href="#" v-if="computer">视频解析</a>
          <a class="menu" href="#" v-if="computer">关于我们</a>
        <button class="hamburger" v-if="phone">
            <span></span>
        </button>
      <div id="loginDiv">
        <img src="../../assets/unLogin.jpg" v-if="computer">
        <span id="loginButton" @click="showLogin()">未登录</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            showLogin(){
                this.$parent.loginView = !this.$parent.loginView;
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
    .hamburger {
        background-color: rgba(0,0,0,0);
        display: block;
        position: absolute;
        font-size: 0;
        top: 4vh;
        left: 64vw;
        width: 48px;
        height: 48px;
        border: none;
        cursor: pointer;
    }
    .hamburger:focus {
        outline: none;
    }
    .hamburger span {
        display: block;
        position: absolute;
        height: 4px;
        top: 22px;
        left: 8px;
        right: 8px;
        background-color: #fff;
    }
    .hamburger span:before,
    .hamburger span:after {/*before和after与span重合，需要进行上移和下移*/
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #fff;
    }
    .hamburger span:before {
        top: -10px;/*相对于中间的span上移10px*/
    }
    .hamburger span:after {
        bottom: -10px;/*相对于中间的span下移10px*/
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
      left: 80vw;
      height: 14vh;
      width: 20vw;
    }
    #loginDiv img {
      position: relative;
      height: 80%;
      top: 10%;
      left: -6vw;
    }
    #loginDiv span {
      position: absolute;
      top: 6vh;
      left: 0vw;
    }
    #loginDiv span:hover {
        color: coral;
    }
    #loginDiv span {
        cursor: cell;
    }
</style>