<template>
  <div id="app">
    <Index id="index"></Index>
  </div>
</template>

<script>
  import Index from "@/components/Index";
  export default {
  name: 'App',
    components: {
      Index
    }
  }

</script>

<style>
#app {
  background: transparent !important;
}
</style>
