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
    position: absolute;
    width: 100%;
    top: calc(100% - 4rem);
    height: 4rem;
    background-color: gray;
    left: 0px;
  }
  #icp {
    position: absolute;
    color: antiquewhite;
    left: calc(50% - 4rem);
    top: 35%;
    font-size: 0.8rem;
  }
</style>