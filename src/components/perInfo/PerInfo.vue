<template>
    <div id="pi">
        <div id="personInfo">
              <img src="http://47.100.137.63:8080/boy.jpg">
              <h2>赵腾达</h2>
               <div id="word">
               <p id="word1">账号管理</p>
               </div>
        </div>
      <Bottom id="bottom"></Bottom>
    </div>
</template>

<script>
import Bottom from "@/components/bottom/Bottom";
    export default {
        name: "PerInfo",
      components: {
          Bottom
      }
    }
</script>

<style scoped>
#pi{
  width: 100%;
    height: 100%;
}
#personInfo {
  position: absolute;
  top: 20vh;
  left: 6vw;
  width: 24vw;
  height: 60vh;
  border: 2px solid cadetblue;
}
#personInfo img{
  position: relative;
    width: 20%;
    border-radius: 100%;
    border: solid black 1px;
    left: 40%;
   top: 10px;
}
#personInfo h2 {
  position: relative;
  width: 100%;
  text-align: center;
}
#img
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
#bottom {
  position: absolute;
  top: 88vh;
}
</style>