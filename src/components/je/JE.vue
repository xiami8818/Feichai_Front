<template>
    <div id="JE">
       <div id="nav">
          <div id="k">
              <p style="text-align: center;font-size: 1.5rem;margin-top: 0.5rem;padding-top: 2rem">算法</p>
          </div>
           <div id="k1">
               <p style="text-align: center;font-size: 1.5rem;margin-top: 0.5rem;padding-top: 2rem">机器人</p>
           </div>
           <div id="k2">
               <p style="text-align: center;font-size: 1.5rem;margin-top: 0.5rem;padding-top: 2rem">网络安全</p>
           </div>
           <div id="k3">
               <p style="text-align: center;font-size: 1.5rem;margin-top: 0.5rem;padding-top: 2rem;">社团账目</p>
           </div>
       </div>
      <div class="Algorithm">
          <img src="../../../public/1.png" id="suanfa">
          <h3 id="title">算法(Algorithm)</h3>
          <p id="word">当你看到这张图片的时候，你也许真的认为算法会让人的头发掉光,但是事实并不是这样的。因为你没有见过马云和马化腾秃头，
              甚至作为科技巨头的华为公司的董事长任正非也依旧是发量饱满。而且需要我们知道的是，4G到5G的更新更是用算法实现的。欢迎小萌新们加入我们这支强大的科技队伍哦，让我们一起为科技贡献点力量吧！！！</p>
      </div>
      <div class="robot">
          <img src="../../../public/4.jpg" id="jiqi">
          <img src="../../../public/5.jpg" id="jiqiren">
          <h3 id="title1">机器人比赛(Robot)</h3>
          <img src="../../../public/2.jpg" id="bisai">
          <img src="../../../public/3.jpg" id="cg">
      </div>
        <div class="is">
           <img src="../../../public/3.png" id="is">
           <h3 id="title2">网络安全(Internet security)</h3>
            <p id="word1">网络安全于我们的生活息息相关，学习网络安全有利于保护我们的隐私不被窃取、保护我们的利益不被侵害。对于一些网络上的不法行为，我们
                可以也做出正确的回击。网络安全也需要我们大家的努力去维护，在这里你会了解不一样的网络安全，你也会懂得黑客们是如何盗走你的数据和信息的，这对于你
                以后维护自己的电脑也有很大的帮助。
            </p>
        </div>
    </div>
</template>
<script>
    export default {
        name: "JE",
    }
</script>
<style scoped>
#JE{
    width: 100%;
    height: 100%;
}
#nav{
    width: 20%;
    height: 100%;
    float: left;
    background: purple;
}
#k{
    height: 16.8vh;
    background-color: cornflowerblue;
}
#k1{
    height: 16.8vh;
    background-color: darkgrey;
}
#k2{
    height: 16.8vh;
    background-color: cornsilk;
}
#k3{
    height: 16.8vh;
    background-color: #ffda00;
    margin-bottom: 0.6rem;
}
#suanfa{
   height: 30vh;
    width: 80%;
   margin-left: 10%;
    margin-top: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#suanfa:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
#word{
    width: 90%;
    margin-left: 5%;
    font-family: 宋体;
    text-indent: 2rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
}
#word1{
    width: 90%;
    text-indent: 2rem;
    margin-left: 5%;
    font-family: 宋体;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
}
#title{
  text-align: center;
}
#title1{
    text-align: center;
    float: left;
   width: 100%;
}
#title2{
    text-align: center;
}
#jiqi{
    height: 30vh;
    width: 50%;
    float: left;
    margin-top: 0.5rem;
    margin-right:3%;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#jiqi:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
#jiqiren{
    height: 30vh;
    width: 47%;
    float: left;
    margin-top: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#jiqiren:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
#bisai{
    height: 30vh;
    width: 50%;
    float: left;
    margin-bottom: 0.5rem;
    margin-right:3%;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#bisai:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
#cg{
    height: 30vh;
    width: 47%;
    float: left;
    margin-bottom: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#cg:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
#is{
    height: 30vh;
    width: 90%;
    margin-left: 5%;
    margin-top: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: 2s;
}
#is:hover{
    transform: rotateY(360deg);
    background:linear-gradient(146deg,rgba(187,152,255,1),rgba(131,104,220,1));
    border-radius:10px;
}
.Algorithm{
   width: 26.6%;
    height: 100%;
    float: left;
    background-color: #bff7ff;
}
.robot{
    width: 26.6%;
    height: 100%;
    float: left;
    background-color: #bff7ff; 
}
.is{
    width: 26.6%;
    height: 100%;
    float: left;
    background-color: #bff7ff;
}
</style>