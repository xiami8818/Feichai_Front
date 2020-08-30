<template>
    <div id="pi">
        <div id="personInfo">
              <img src="http://47.100.137.63:8080/boy.jpg">
              <h2>赵腾达</h2>
               <div id="word">
               <p id="word1">账号管理</p>
               </div>
            <ul id="list">
            <li id="list1"><span><i class="iconfont">&#xe6b8;</i>基本信息</span></li>
            <li id="list2"><span><i class="iconfont">&#xe6ae;</i>安全设置</span></li>
            </ul>
        </div>
      <div id="personInfo1">
       <p>基本信息</p>
          <label class="tip " id="nameTip">姓名：</label>
          <input type="text" class="text" id="nameText" name="username"  lay-verify="required" placeholder="请输入您的真实姓名" v-model="newName" />
        <label class="tip" id="qqTip"> QQ：</label>
          <input type="text" id="qqText" class="text" name="username"  lay-verify="required" placeholder="请输入您的QQ号" v-model="newQQ" />
          <label class="tip" id="numTip">学号：</label>
          <input type="text" class="text" id="numText" name="username"  lay-verify="required" placeholder="请输入您的学号" v-model="newNum" />
        <label class="sexTip" id="sexTip">性别：</label>
        <label id="man"><input name="sex" type="radio" @click="man">男</label>
        <label id="woman"><input type="radio" name="sex" @click="woman">女</label>
          <label class="tip" id="schoolTip">学校：</label>
          <input type="text" class="text" id="schoolText" lay-verify="required" placeholder="请输入您的学校" v-model="newSchool" /><span></span>
          <button id="save" :disabled="isChanged">保存</button>
          <button id="recovery">恢复</button>
      </div>
      <Bottom id="bottom"></Bottom>
    </div>
</template>

<script>
import Bottom from "@/components/bottom/Bottom";
import axios from "axios";
    export default {
        name: "PerInfo",
      components: {
          Bottom
      },
      methods: {
          man(){
            this.sex = '男';
          },
        woman(){
            this.sex = '女';
        },
        save() {

        },
        getUsre(){
            axios.post("http://localhost/user/getUser").then(function (res){
              let temp = res.data.split("$");
              this.name = temp[0];
              this.qq = temp[1];
              this.num = temp[2];
              this.sex = temp[3];
              this.school = temp[4];
              this.newName = this.name;
              this.newQQ = this.qq;
              this.newNum = this.num;
              this.newSex = this.sex;
              this.newSchool = this.school;
            })
        }
      },
      data(){
          return {
            sex:'',
            name:'',
            qq:'',
            num:'',
            school: '',
            newSex: '',
            newName:'',
            newQQ:'',
            newNum:'',
            newSchool:'',
            isChanged:'disabled'
          }
      },
      mounted() {

      },
      watch: {
          newName: function (){
            if(this.newName != this.name){
              this.isChanged = false;
            }else {
              this.isChanged = 'disabled';
            }
          }
        //   isChanged: function () {
        //     let sign = false;
        //     if(this.name != this.newName){
        //       console.log("no")
        //       sign = true;
        //   }else if(this.qq != this.newQQ){
        //       sign = true;
        //     }else if(this.num != this.newNum){
        //       sign =true;
        //     }else if(this.sex !=this.newSex){
        //       sign = true;
        //     }else if(this.school != this.newSchool){
        //       sign = true;
        //     }
        //     if(sign){
        //       return false;
        //     }else {
        //       return 'disabled';
        //     }
        // }
      }
    }
</script>

<style scoped>
@font-face {
    font-family: 'iconfont';
    src: url('../../assets/font/iconfont.eot');
    src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('../../assets/font/iconfont.woff') format('woff'),
    url('../../assets/font/iconfont.ttf') format('truetype'),
    url('../../assets/font/iconfont.svg#iconfont') format('svg');
}
.iconfont{
    color: darkgrey;
    margin-top: auto;
    font-family:"iconfont" !important;
    font-size:15px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
#pi{
  width: 100%;
    height: 100%;
}
#personInfo {
  position: absolute;
  margin-top: 7vh;
  margin-left: 5vw;
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
#word1{
    -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    margin-left: 1.5rem;
    font-size: 1.1rem;
    letter-spacing:0.1rem;
    padding-top: 0.5rem;
}
#bottom {
  position: absolute;
  top: 88vh;
}
#list{
 list-style: none;
    padding-left: 0;
}
#list1{
    border-left: 2px solid #4cacff;
    background: #e6f3ff;
    cursor: pointer;
    height: 6vh;
}
#list1 span{
    float: left;
    margin-left: 3rem;
    margin-top: 0.4rem;
}
#list1 i{
    margin-right: 0.5rem;
}
#list2{
    cursor: pointer;
    height: 6vh;
}
#list2 span{
    float: left;
    margin-left: 3rem;
    margin-top: 0.4rem;
}
#list2 i{
    margin-right: 0.5rem;
}
#personInfo1{
  position: absolute;
   left: 36vw;
  top: 18vh;
    width: 60vw;
    height: 63vh;
    background-color: #fff9fc;
}
#personInfo1 p{
    margin-left: 3vw;
    margin-top: 3vh;
    width: 60vw;
    font-family: 新宋体;
    float: left;
}
.tip{
    width: 10%;
  height: 5%;
}
.text {
    width: 46%;
    margin-bottom: 0.5rem;
    height: 5vh;
}
#nameTip {
  position: absolute;
  top: 16%;
  left: 14%;
}
#nameText {
  position: absolute;
  top: 15%;
  left: 22%;
}
#qqTip {
  position: absolute;
  top: 30%;
  left: 14%;
}
#qqText {
  position: absolute;
  top: 29%;
  left: 22%;
}
#numTip {
  position: absolute;
  top: 44%;
  left: 14%;
}
#numText {
  position: absolute;
  top: 43%;
  left: 22%;
}
#schoolTip {
  position: absolute;
  top: 72%;
  left: 14%;
}
#schoolText {
  position: absolute;
  top: 71%;
  left: 22%;
}
#sexTip {
  position: absolute;
  top: 58%;
  left: 14%;
}
#man {
  position: absolute;
  top: 57%;
  left: 22%;
  font-size: 1.4rem;
}
#man input {
  position: relative;
  width: 20px;
  height: 20px;
}
#woman {
  position: absolute;
  top: 57%;
  left: 30%;
  font-size: 1.4rem;
}
#woman input {
  position: relative;
  width: 20px;
  height: 20px;
}
#recovery {
  position: absolute;
  top: 6%;

  left: 80%;
  width: 8%;
  height: 6%;
  background-color: #e6f3ff;
  border: 0;
}
#save {
  position: absolute;
  top: 6%;
  left: 90%;
  width: 8%;
  height: 6%;
  background-color: #e6f3ff;
  border: 0;
}
</style>