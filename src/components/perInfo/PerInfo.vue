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
          <label class="layui-form-label " >姓名：</label>
          <input type="text"  name="username"  lay-verify="required" placeholder="请输入您的真实姓名" ><span></span>
          <label class="layui-form-label " > QQ：</label>
          <input type="text"  name="username"  lay-verify="required" placeholder="请输入您的QQ号" ><span></span>
          <label class="layui-form-label " >学号：</label>
          <input type="text"  name="username"  lay-verify="required" placeholder="请输入您的学号" ><span></span>
          <label class="layui-form-label">性别：</label><input type="radio">
          <label class="layui-form-label" id="school">学校：</label>
          <input type="text"  name="username"  lay-verify="required" placeholder="请输入您的学校" ><span></span>
          <button>保存</button>
          <button>恢复</button>
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
  margin-top: 7vh;
  margin-left: 5vw;
  width: 24vw;
  height: 60vh;
  border: 2px solid cadetblue;
    float: left;
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
   margin-left: 3vw;
    margin-top: 6vh;
    width: 60vw;
    height: 63vh;
    background-color: #fff9fc;
    float: left;
}
#personInfo1 p{
    margin-left: 3vw;
    margin-top: 3vh;
    width: 60vw;
    font-family: 新宋体;
    float: left;
}
#personInfo1 label{
    margin-left: 5vw;
    margin-top: 0.3rem;
    width: 5vw;
    float: left;
}
#personInfo1 input{
    width: 40vw;
    margin-bottom: 0.5rem;
    height: 5vh;
    float: left;
}
#personInfo1 button{
    margin-left: 10vw;
    margin-top: 3vh;
    height: 5vh;
    width: 5vw;
    float: right;
}
</style>