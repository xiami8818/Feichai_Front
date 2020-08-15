<template>
    <div id="login">
        <div class="loginInfo">
            <label class="layui-form-label login-form"><i class="iconfont">&#xe6b8;</i></label>
            <input type="text" name="username" lay-verify="required" placeholder="请输入您的手机号" autocomplete="off" class="layui-input">
        </div>
        <div class="loginInfo">
            <label class="layui-form-label login-form"><i class="iconfont">&#xe82b;</i></label>
            <input type="text" name="username" lay-verify="required" placeholder="请输入您的密码" autocomplete="off" class="layui-input">
        </div>
        <button>登录</button>
    </div>
</template>
    <div>

    </div>
<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
#login {
  position: absolute;
  top: 25vh;
  width: 40vh;
  height: 50vh;
    left: calc(50vw - 20vh);
  background-color: cornsilk;
  margin: 0 auto;
  z-index: 2;
}
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
    font-family:"iconfont" !important;
    font-size:26px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.loginInfo {
    margin-top: 3rem;
}
.loginInfo input {
    position: relative;
    width: 60%;
    height: 1.4rem;
}
.loginInfo label {
    margin-left: 1rem;
    margin-right: 1rem;
}
#login button{
    position: relative;
    width: 80%;
    left: 10%;
    margin-top: 2rem;
    height: 4rem;
}
</style>