<template>
    <div>
        <el-row class="head-info">
            <el-col>
            <img v-bind:src="headInfo.src" @click.stop="uploadHeadImg" style="width:50px;height:50px;overflow:hidden;border-radius:50%;">
            <input type="file" accept="image/*" @change="handleHeadChange" class="headInputFile" style="display:none">
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import {XtVue, Component, Watch, XtRouter,Prop} from "../../../common/common";
    import {AxiosResponse} from 'axios';

    @Component
    export default class UploadHeadComp extends XtVue{
        //头像信息
        public headInfo:any = {
            src:require('../../../assets/images/icon/user_default.png')
        }
        //头像文件
        public file:any = null

        //挂载
        mounted() {
            console.log('头像上传');
        }
        /**
         * 触发input[type='file']点击
         * */
        public uploadHeadImg(){
            this.$el.querySelector('.headInputFile').click();
        }
        /**
         * 头像图片改变
         * */
        public handleHeadChange(e){
            //两个的区别是：ie下支持e.srcElement，ff支持e.target
            let $target:any = e.target || e.srcElement;
            let file:any = $target.files[0];
            this.file = file;
            //判断上传文件是否是图片类型：\w 的释义都是指包含大 小写字母数字和下划线 相当于([0-9a-zA-Z])
            if(!/image\/\w+/.test(file.type)){
                this.$notify.error({title: '错误',message: '请上传图片文件'});
                return;
            }
            //获取图片大小，做图片大小限制
            let imgSize:any = file.size;
            //图片大小限制为5M,这里获取的单位大小为b
            if(imgSize > 5*1024*1024){
                this.$notify.error({title: '错误',message: '图片大小限制为5M'});
                return;
            }
            /**
             * 开始渲染选择的图片的两种方式：1、本地路径方法，2、base64方法
             * 两种方法区别：
             * 1、通过FileReader.readAsDataURL(file)可以获取一段data:base64的字符串；通过URL.createObjectURL(blob)可以获取当前文件的一个内存URL。
             * 2、执行时机：createObjectURL是同步执行（立即的）；FileReader.readAsDataURL是异步执行（过一段时间）。
             * 3、内存使用：createObjectURL返回一段带hash的url，并且一直存储在内存中，直到document触发了unload事件（例如：document close）或者执行revokeObjectURL来释放；
             *   FileReader.readAsDataURL则返回包含很多字符的base64，并会比blob url消耗更多内存，但是在不用的时候会自动从内存中清除（通过垃圾回收机制）。
             * 4、优劣对比：使用createObjectURL可以节省性能并更快速，只不过需要在不使用的情况下手动释放内存；
             *   如果不太在意设备性能问题，并想获取图片的base64，则推荐使用FileReader.readAsDataURL。
             * */
                // 本地路径方法 1
                // this.headInfo.src = window.URL.createObjectURL(e.target.files[0]);
                // base64方法 2
                //FileReader 对象允许Web应用程序异步读取存储在用户计算机上的文件（或原始数据缓冲区）的内容，使用 File 或 Blob 对象指定要读取的文件或数据
            let reader:any = new FileReader();
            //onload 事件会在页面或图像加载完成后立即发生
            reader.onload = (data) => {
                let res = data.target || data.srcElement;
                this.headInfo.src = res.result
            },
                //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL
                reader.readAsDataURL(file);
            //将上传的头像图片提交给后台
            this.handleUploadHead();
        }
        /**
         * 头像上传给后台
         * */
        public handleUploadHead(){
            let file:any = this.file;
            let picData:any = new FormData();
            picData.append('file',file,file.name);
            //接口请求，根据自身项目做调整，这里只是简单介绍
            axios.post({
                url:"接口url",
                method:'post',
                data:picData,
            }).then(res=>{
                if(res.data.success == true){
                    //这里是借用elelment UI的消息提示
                    this.$notify.success({title: 'success',message: '头像图片上传成功'});
                    return;
                }
                this.$notify.error({title: '错误',message: res.data.msg});
            }).catch(err=>{
                console.log(err);
            })
        }
    }
</script>
<style scoped>
</style>