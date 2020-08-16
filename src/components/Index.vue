<template>
  <div class="index">
    <p id="welcome" @click="showView()">WELCOME</p>
    <Header id="header"></Header>
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
        @click="showView()"
    ></vue-particles>
    <Login v-if="loginView"></Login>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Bottom from "@/components/bottom/Bottom";
import Login from "./login/Login";
export default {
  name: 'Index',
  components: {
    Header,
    Bottom,
    Login
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
    showView(){
      this.loginView = !this.loginView;
    }
  },
  data(){
    return {
      loginView : false
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome{
  position: absolute;
  font-size: 6vw;
  left: 34vw;
  top: calc(50vh - 10vw);
}
#particles-js {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100vh;
  z-index: 1;
}
  #header {
    z-index: 2;
  }

</style>
