<template>
    <div id="header">
        <img src="../../assets/logo.png" id="ico" />
        <span id="title">废柴工作室</span>
        <button class="hamburger" v-if="phone">
            <span></span>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {

        },
        computed: {
            phone(){
                if(document.documentElement.clientWidth>document.documentElement.clientHeight){
                    return false;
                }else{
                    return true;
                }
            }
        }
    }
</script>

<style scoped>
    div {
        position: relative;
        width: 100%;
        height: 14vh;
        top: 0px;
        left: 0px;
        background-color: antiquewhite;
    }
    #ico {
        position: relative;
        left: 10vw;
        top: 0.2vh;
        width: 20vh;
        height: 100%;
    }
    @font-face {
        font-family: hjlzt;
        src:url("../../assets/font/hjlzt.ttf");
    }
    #title {
        position: relative;
        top: -6vh;
        left: 10vw;
        font-family: hjlzt;
        font-size: 2vw;
    }
    .hamburger {
        background-color: rgba(0,0,0,0);
        display: block;
        position: absolute;
        font-size: 0;
        top: 4vh;
        left: 78vw;
        width: 48px;
        height: 48px;
        border: none;
        cursor: pointer;
    }
    .hamburger:focus {
        outline: none;
    }
    .hamburger span {
        display: block;
        position: absolute;
        height: 4px;
        top: 22px;
        left: 8px;
        right: 8px;
        background-color: #fff;
    }
    .hamburger span:before,
    .hamburger span:after {/*before和after与span重合，需要进行上移和下移*/
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 4px;
        background-color: #fff;
    }
    .hamburger span:before {
        top: -10px;/*相对于中间的span上移10px*/
    }
    .hamburger span:after {
        bottom: -10px;/*相对于中间的span下移10px*/
    }
</style>