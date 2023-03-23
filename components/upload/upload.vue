<template>
   <view >
    
  </view>
</template>

<script>
  export default {
    name:"upload",
    data() {
      return {
        imageStyles: {
            width: 70,
            height: 70,
          },
        fileLists: [{
            url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/b7c7f970-517d-11eb-97b7-0dc4655d6e68.jpg',
            extname: 'png',
            name: 'shuijiao.png'
        }]
      };
    },
    methods:{
      select(e){
        console.log('选择文件：',e)
      },
      // 获取上传进度
      progress(e){
        console.log('上传进度：',e)
      },
      
      // 上传成功
      success(e){
        console.log('上传成功')
      },
      
      // 上传失败
      fail(e){
        console.log('上传失败：',e)
      }
    }
  }
</script>

<style lang="scss">
 
</style>