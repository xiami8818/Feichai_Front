<template>
  <div class="index">
    <p class="welcome" v-if="computer">WELCOME</p>
    <p class="welcome" v-if="phone">废柴工作室</p>
    <button class="hamburger" v-if="phone" @click="showMenu">
      <span></span>
    </button>
    <div v-if="phone" id="menu">
      <a>OJ 平台</a>
      <hr />
      <a>社团信息</a>
      <hr />
      <a href="http://feichai.xyz/analyse.html">视频解析</a>
      <hr />
      <a>关于我们</a>
      <img @click="closeMenu" src="../assets/up.png"/>
    </div>
    <vue-particles v-if="computer"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="triangle"
        :particleSize="4"
        linesColor="#7b68ee"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="repulse"
    ></vue-particles>
    <Bottom id="bottom"></Bottom>
  </div>
</template>
<script>
import axios from 'axios';
import Bottom from "@/components/bottom/Bottom";
export default {
  name: 'Index',
  components: {
    Bottom
  },
  computed: {
    phone(){
      return document.documentElement.clientWidth<document.documentElement.clientHeight;
    },
    computer() {
      return document.documentElement.clientWidth >= document.documentElement.clientHeight;
    }
  },
  methods: {
    showMenu(){
      this.menu = !this.menu;
    },
    closeMenu() {
      this.menu = false;
    },
    check(){
      const that = this;
      axios.get("http://47.100.137.63:8080/user/check").then(function (res){
        if(res.data=="true"){
          that.$parent.login = true;
          axios.get("http://47.100.137.63:8080/user/getInfo?phone="+that.phoneNum).then(function (res) {
            let temp = res.data.split('&');
            that.name = temp[0];
            that.img = temp[1];
          })
        }else{
          that.$parent.login = false;
        }
      }).catch(function (){
        this.login = false;
        this.message = 'error';
      })
    }
  },
  mounted() {
    this.check();
  },
  data(){
    return {
      loginView : false,
      registerView:false,
      menu:false,
      login:false,
      message:'',
      phoneNum: '',
      name:''
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: hjlzt;
  src:url("../assets/font/hjlzt.ttf");
}
@font-face {
  font-family: daimengti;
  src: url("../assets/font/daimengti.ttf");
}
a {
  text-decoration-line: none;
}
.welcome{
  font-family: hjlzt;
  position: absolute;
  font-size: 6vw;
  left: 34vw;
  top: calc(50vh - 10vw);
  z-index: 1;
}
#particles-js {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
.hamburger {
  background-color: rgba(0,0,0,0);
  display: block;
  position: absolute;
  font-size: 0;
  top: 5vh;
  left: 52vw;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  z-index: 2;
  border-radius: 100%;
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
#menu {
  background-color: rgba(0,0,0,0.6);
  position: absolute;
  top: 14vh;
  height: 38vh;
  width: 60%;
  left: 20%;
  z-index: 3;
}
  #menu a {
    color: bisque;
    margin-left: calc(50% - 16vw);
    font-size: 8vw;
  }
  #menu img {
    position: absolute;
    top: 39vh;
    background-image: url("../assets/up.png");
    left: calc(100% - 16vw);
    width: 10vw;
    background-color: rgba(0,0,0,0);
  }
  #bottom {
    position: absolute;
    top: 88vh;
  }
</style>
