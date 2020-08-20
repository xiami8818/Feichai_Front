<template>
  <div id="code">
    <Header></Header>
    <input v-model="data"/>
    <div v-html="data"></div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import Bottom from "@/components/bottom/Bottom";
export default {
name: "Code",
  components: {Bottom, Header},
  data(){
    return {
      data:''
    }
  }
}
</script>

<style scoped>

</style>