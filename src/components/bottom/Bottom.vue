<template>
  <div id="bottom">
    <span id="icp"> 冀ICP备19028957号-1 </span>
  </div>
</template>
<script>
export default {
name: "Bottom"
}
</script>
<style scoped>
  #bottom {
    height: 10vh;
    background-color: gray;
    width: 100vw;
  }
  #icp {
    position: absolute;
    color: antiquewhite;
    left: calc(50% - 4rem);
    top: 35%;
    font-size: 0.8rem;
  }
</style>