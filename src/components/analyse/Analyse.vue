<template>
  <div id="analyse">
    <iframe id="player" :src="video">
    </iframe>
    <span v-if="video == ''" id="tip">废柴工作室</span>
    <span v-if="video == ''" id="tip1">本站仅供学习交流使用</span>
    <input type="text" id="videoName" v-model="videoName" placeholder="请输入影片地址或电影名：" />
    <button id="play" @click="play">点击播放</button>
    <Bottom id="bottom"></Bottom>
  </div>
</template>

<script>
import Bottom from "@/components/bottom/Bottom";
export default {
name: "Analyse",
  components: {
  Bottom
  },
  data() {
    return {
      videoName: '',
      video: ''
    }
  },
  methods: {
    play(){
      this.video = "http://z1.m1907.cn/?jx="+this.videoName;
    }
  }
}
</script>

<style scoped>
#player {
  position: absolute;
  left: 25vw;
  top: 20vh;
  width: 50vw;
  height: 56vh;
  background-color: black;
}
#bottom {
  position: absolute;
top: 100vh;
}
#tip {
  position: absolute;
  text-align: center;
  width: 30vw;
  font-size: 3rem;
  top: 40vh;
  left: 35vw;
  letter-spacing: 1.2rem;
  font-family: hjlzt;
  color: aliceblue;
}
#tip1 {
  position: absolute;
  color: indianred;
  font-size: 1rem;
  letter-spacing: 0.5rem;
  top: 56vh;
  left: 30vw;
  width: 40vw;
  text-align: center;
}
@font-face {
  font-family: hjlzt;
  src: url("../../assets/font/hjlzt.ttf");
}
#videoName {
  position: absolute;
  left: 25vw;
  top: 80vh;
  height: 6vh;
  width: 50vw;
  font-size: 1.5rem;
}
#play {
  position: absolute;
  left: 25vw;
  top: 90vh;
  width: 50vw;
  height: 6vh;
  font-size: 1.5rem;
}
</style>