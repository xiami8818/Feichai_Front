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
    position: relative;
    width: 100%;
    height: 4rem;
    background-color: gray;
  }
  #icp {
    position: absolute;
    color: antiquewhite;
    left: 45vw;
    top: 35%;
    font-size: 0.8rem;
  }
</style>