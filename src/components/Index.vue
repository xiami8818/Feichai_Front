<template>
  <div class="index">
    <Header></Header>
    <p id="welcome">WELCOME</p>
    <vue-particles v-if="computer"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#fff"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    ></vue-particles>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Bottom from "@/components/bottom/Bottom";
export default {
  name: 'Index',
  components: {
    Header,
    Bottom
  },
  computed: {
    phone(){
      return document.documentElement.clientWidth<document.documentElement.clientHeight;
    },
    computer() {
      return document.documentElement.clientWidth >= document.documentElement.clientHeight;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#welcome{
  position: absolute;
  font-size: 6vw;
  top: calc(50% - 8vw);
  left: 33vw;
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
}

</style>
