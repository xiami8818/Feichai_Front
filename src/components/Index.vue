<template>
  <div class="index">
    <Header></Header>
    <vue-particles
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
 position: relative;
  width: 100%;
  height: 30rem;
  background: transparent !important;
}

</style>
