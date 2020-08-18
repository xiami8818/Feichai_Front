<template>
    <div id="register">
        <button @click="register()">注册</button>
    </div>
</template>
<script>
    import crypto from 'crypto';
    import axios from 'axios';
    export default {
        name: "register",
        data() {
            return {
                name: '',
                phone:'',
                password:'',
                num :'',
                qq:'',
                message:'',
        }
        },
        methods: {
            register() {
                // eslint-disable-next-line no-unused-vars
                const that = this;
                const md5=crypto.createHash("md5");
                let md5Password=md5.digest();
                //let url = "http://localhost:80/login";
                axios.post('http://47.100.137.63:8080/login?phone=' + this.name + '&password='+md5Password
                ).then(function (res) {
                    console.log(res);
                    if (res.data == 'succeed') {
                        that.$parent.loginView = false;
                    }
                }).catch(function () {
                   this.register=false;
                   this.message="error";
                })
            }
        }
    }
</script>
<style scoped>
#register{
    height: 80%;
    width: 40%;

}
</style>