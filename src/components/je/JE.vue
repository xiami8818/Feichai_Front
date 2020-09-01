<template>
    <div id="je">
       <div id="nav">
          <div id="algorithm-index" :class="selected0">
              <p @mouseenter="select0">算法</p>
          </div>
           <div id="robot-index" :class="selected1">
               <p @mouseenter="select1">机器人</p>
           </div>
           <div id="safe-index" :class="selected2">
               <p @mouseenter="select2">网络安全</p>
           </div>
           <div id="account-index" :class="selected3">
               <p @mouseenter="select3">社团账目</p>
           </div>
       </div>
      <div id="content">
        <div class="algorithm" v-if="selected0=='selected'">
          <img src="/algorithm1.png">
          <h2>算法组(Algorithm)</h2>
          <p>当你看到这张图片的时候，你也许真的认为算法会让人的头发掉光,但是事实并不是这样的。因为你没有见过马云和马化腾秃头，
            甚至作为科技巨头的华为公司的董事长任正非也依旧是发量饱满。而且需要我们知道的是，4G到5G的更新更是用算法实现的。欢迎小萌新们加入我们这支强大的科技队伍哦，让我们一起为科技贡献点力量吧！！！</p>
          <button>报名算法组</button>
        </div>
        <div class="robot" v-if="selected1=='selected'">
          <img src="/robot1.jpg" id="robot-img1">
          <img src="/robot2.jpg" id="robot-img2">
          <img src="/robot3.jpg" id="robot-img3">
          <img src="/robot4.jpg" id="robot-img4">
          <h2 id="title1">机器人组(Robot)</h2>
          <p>机器人组，致力于开发各种机器人开发。教授内容有电路基础知识、各模块使用、线路焊接以及单片机软件系统开发，
          常用单片机型号有：AT89C51、STM32、ARDRUINO等，每年都会有河北农业大学本部机器人大赛、河北省机器人大赛等多种比赛
          我社团在比赛中也会多次拿到奖项，去年我社团两组拿到特等奖，充分说明了JE发明创造协会机器人组的实力。欢迎喜欢电子科技的你加入我们！</p>
          <button>报名机器人组</button>
        </div>
        <div class="safe" v-if="selected2=='selected'">
          <img src="../../../public/safe1.png" />
          <h2>网络安全(Internet security)</h2>
          <p>网络安全于我们的生活息息相关，学习网络安全有利于保护我们的隐私不被窃取、保护我们的利益不被侵害。对于一些网络上的不法行为，我们
            可以也做出正确的回击。我们会教授常见漏洞攻击原理及防护（ARP欺骗，SQL注入，XSS跨站脚本，外挂原理等），欢迎喜欢网络安全的朋友们加入我们！
          </p>
          <button>报名网络安全组</button>
        </div>
        <div class="account" v-if="selected3=='selected'">
          <h2>社团账目(Corporate accounts)</h2>
          <span>{{money}} 元</span>
          <div>
            <p id="tip">账本明细：</p>
            <textarea id="details" disabled="disabled" v-model="account"></textarea>
          </div>
        </div>
      </div>
      <Bottom id="bottom"></Bottom>
    </div>
</template>
<script>
import Bottom from "@/components/bottom/Bottom";
import axios from "axios";
    export default {
      name: "JE",
      components: {
        Bottom
      },
      methods: {
        select0(){
          this.selected0 = 'selected';
          this.selected1 = 'unselected';
          this.selected2 = 'unselected';
          this.selected3 = 'unselected';
        },
        select1(){
          this.selected1 = 'selected';
          this.selected0 = 'unselected';
          this.selected2 = 'unselected';
          this.selected3 = 'unselected';
        },
        select2(){
          this.selected2 = 'selected';
          this.selected1 = 'unselected';
          this.selected0 = 'unselected';
          this.selected3 = 'unselected';
        },
        select3(){
          this.selected3 = 'selected';
          this.selected1 = 'unselected';
          this.selected2 = 'unselected';
          this.selected0 = 'unselected';
        },
        getMoney() {
          const that = this;
          axios.get("http://47.100.137.63:8080/user/account").then(function (res){
            let temp1 = res.data.split("$");
            that.money = temp1[0];
            let temp2 = temp1[1].split("#");
            temp2.forEach(function (account){
              that.account += account+"\n";
            });
          })
        }
      },
      data(){
        return {
          selected0:'selected',
          selected1: 'unselected',
          selected2: 'unselected',
          selected3: 'unselected',
          money: '0',
          account: ''
        }
      },
      mounted() {
        this.getMoney();
      }
    }
</script>
<style scoped>
@font-face {
  font-family: hjlzt;
  src: url("../../assets/font/hjlzt.ttf");
}
#je{
  position: absolute;
  top: 14vh;
  width: 100%;
  height: 80vh;
}
#nav{
  position: absolute;
  left: 0;
  width: 20%;
  height: 80vh;
  background: blanchedalmond;
}
.selected {
  background-color: coral;
  border-left: red solid 6px;
}
.unselected {
  background-color: ghostwhite;
}
#algorithm-index{
  height: 16%;
  text-align: center;
  line-height: 14vh;
  font-size: 2rem;
}
#robot-index {
    height: 16%;
  line-height: 14vh;
  font-size: 2rem;
  text-align: center;
}
#safe-index {
    height: 16%;
  text-align: center;
  font-size: 2rem;
  line-height: 14vh;
}
#account-index {
    height: 16%;
    line-height: 14vh;
  font-size: 2rem;
  text-align: center;
}
#content {
  position: absolute;
  left: 20vw;
  height: 80vh;
  width: 80%;
  background-color: ghostwhite;
}
.algorithm button {
  position: absolute;
  width: 40%;
  height: 40px;
  top: 80%;
  left: 20%;
  border-radius: 20px;
}
.algorithm{
   width: 80vw;
    height: 100%;
}
.algorithm img {
  position: absolute;
  width: 20%;
  top: 15%;
  left: 6%;
}
.algorithm h2 {
  position: absolute;
  top: 5%;
  width: 100%;
  text-align: center;
}
.algorithm p {
  position: absolute;
  width: 60%;
  top: 14%;
  left: 30%;
  font-size: 18px;
}
.robot {
  position: absolute;
  width: 80vw;
  height: 100%;
}
#robot-img1 {
  position: absolute;
  top: 20%;
  left: 4%;
  width: 20%;
  height: 20%;
  transition: 1s;
}
#robot-img1:hover {
  width: 40%;
  height: 40%;
  z-index: 2;
}
#robot-img2 {
  position: absolute;
  width: 20%;
  height: 20%;
  top: 20%;
  left: 24%;
  transition: 1s;
}
#robot-img2:hover {
  height: 40%;
  width: 40%;
  left: 4%;
  z-index: 2;
}
#robot-img3 {
  position: absolute;
  width: 20%;
  height: 20%;
  top: 40%;
  left: 4%;
  transition: 1s;
}
#robot-img3:hover {
  width: 40%;
  height: 40%;
  top: 20%;
  z-index: 2;
}
#robot-img4 {
  position: absolute;
  width: 20%;
  height: 20%;
  left: 24%;
  top: 40%;
  transition: 1s;
}
#robot-img4:hover {
  height: 40%;
  width: 40%;
  top: 20%;
  left: 4%;
  z-index: 2;
}
.robot h2 {
  position: absolute;
  width: 100%;
  top: 5%;
  text-align: center;
}
.robot p {
  position: absolute;
  width: 40%;
  top: 18%;
  left: 50%;
}
.robot button {
  position: absolute;
  top: 50%;
  left: 54%;
  width: 30%;
  border-radius: 20px;
  height: 40px;
}
.safe{
    width: 80vw;
    height: 100%;
    background-color: ghostwhite;
}
.safe img {
  position: absolute;
  height: 40%;
  top: 16%;
  left: 12%;
}
.safe h2 {
  position: absolute;
  width: 100%;
  top: 5%;
  text-align: center;
}
.safe p {
  position: absolute;
  width: 42%;
  top: 16%;
  left: 40%;
}
.safe button {
  position: absolute;
  top: 50%;
  left: 46%;
  width: 30%;
  border-radius: 20px;
  height: 40px;
}
.account {
  position: absolute;
  height: 100%;
  width: 80vw;
}
.account h2 {
  position: absolute;
  text-align: center;
  width: 100%;
  top: 5%;
}
.account span {
  position: absolute;
  font-size: 3rem;
  font-family: hjlzt;
  top: 20%;
  left: 10%;
}
.account div {
  position: absolute;
  top: 18%;
  left: 40%;
  height: 60%;
  width: 40%;
  border: 2px solid #ffda00;
}
#tip {
  position: relative;
  width: 100%;
  height: 16%;
  text-align: center;
  margin: 0 0 0 0;
  font-size: 1.6rem;
  background-color: cadetblue;
}
#details {
  resize: none;
  position: relative;
  height: 83%;
  width: 99%;
  text-line-through-style: center;
  font-size: 1.4rem;
}
#bottom {
  position: absolute;
  top: 74vh;
  left: 0vw;
}
</style>