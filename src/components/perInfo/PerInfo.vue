<template>
    <div id="PI">
        <div id="left">
           <div id="img">
              <img src="../../../public/boy.jpg" id="style">
              <p style="font-size: 1.5rem;text-align: center;margin-top: 0.5rem">赵腾达</p>
           </div>
               <div id="word">
               <p id="word1">账号管理</p>
               </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "PerInfo"
    }
</script>

<style scoped>
#PI{
  width: 100%;
    height: 100%;
}
#left{
    width: 30%;
    height: 80vh;
    margin: 1rem;
    border: solid darkgrey 0.1rem;
}
#img{
   margin-top: 2rem;
}
#style{
    width: 8rem;
    height: 8rem;
    border-radius: 60rem;
    border: solid black 0.1rem;
    margin-left: 8rem;
}
#word{
   height: 7vh;
    background: #bff7ff;
    margin-top: 2rem;
}
#word1{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    margin-left: 2rem;
    font-size: 1rem;
    letter-spacing:0.3rem;
    padding-top: 0.5rem;
}
</style>