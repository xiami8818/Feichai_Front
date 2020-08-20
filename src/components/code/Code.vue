<template>
  <div id="code">
    <textarea v-model="data" id="input"></textarea>
    <div v-html="data" id="view"></div>
  </div>
</template>

<script>
export default {
name: "Code",
  data(){
    return {
      data:''
    }
  }
}
</script>

<style scoped>
#input {
  position: absolute;
  top: 15vh;
  left: 5px;
  height: 70vh;
  width: 50vw;
}
#view {
  position: absolute;
  top: 15vh;
  left: 50vw;
  height: 70vh;
  width: 50vw;
}
</style>