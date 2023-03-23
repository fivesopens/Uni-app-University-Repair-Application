<template>
  <view>
    <view class="select-img">
      <uni-file-picker
      limit="1" 
      title="上传新头像"  
      :imageStyles="imageStyles"
      file-mediatype="image"
      file-extname="png,jpg"
      @select="select" 
      @progress="progress" 
      @success="success" 
      @fail="fail"
      :auto-upload="false"
       ref="files"></uni-file-picker>
    </view>
    <view class="submit">
      <button type="default" @click="cancel">取消</button>
      <button type="primary" @click="submit">确定</button>
    </view>
       
  </view>
</template>

<script>
  export default {
    data() {
      return {
        imageStyles: {
            width: 100,
            height: 100,
          },
        tempFilePaths:'',
        url:''
      };
    },
    methods:{
      cancel(){
        uni.navigateBack()
      },
      submit(){
           let nickName =  uni.getStorageSync('nickName')
           uni.uploadFile({
              url: 'http://127.0.0.1/api/uploadAvatar', //仅为示例，非真实的接口地址
              filePath: this.tempFilePaths,
              name: 'file',
              success: async (uploadFileRes) => {
                   const res = await this.$https({
                     url:'/updateUser',
                     method:'POST',
                     data:{
                       newUrl: uploadFileRes.data,
                       nickName:nickName
                     }
                   })
                 console.log(res)
                 
                  if(res.code==200){
                   
                        uni.showLoading({
                          title:'修改中',
                        })
                    
                         setTimeout(function(){
                           uni.hideLoading()
                           uni.showToast({
                             icon:'success',
                             title:res.message
                           })  
                         
                          setTimeout(()=>{
                             uni.reLaunch({
                               url:'/pages/my/my'
                             })
                            },1800)
                            
                       },1500)
                       
                  } else if(res.code==501){
                  
                      uni.showLoading({
                          title:'修改中',
                        })
                      
                       setTimeout(()=>{
                         uni.hideLoading()
                         uni.showToast({
                           icon:'success',
                           title:'修改失败'
                         }) 
                       },1500)
                       
                  }else{
                      uni.showLoading({
                        title:'修改中',
                      })
                      
                       setTimeout(()=>{
                         uni.hideLoading()
                         uni.showToast({
                           icon:'success',
                           title:res.message
                         }) 
                       },1500)
                  }
              },
          });
      },
      select(e){
        this.tempFilePaths = e.tempFilePaths[0]
      },
      // 获取上传进度
      progress(e){
        console.log('上传进度：',e)
      },
      
      // 上传成功
      success(e){
      },
      
      // 上传失败
      fail(e){
        console.log('上传失败：',e)
      }
    }
  }
</script>

<style lang="scss">
  page{
    background-color: #fff;
   
  }
 .select-img{
   padding: 20px 25px;
   .uni-file-picker .uni-file-picker__header {
     .file-title{
        margin-bottom: 10px;
     }
     .file-count{
       display: none;
     }
   }
  
 }
  .submit{
     display: flex;
     margin-top: 20px;
    button{
      width: 40%;
      border-radius: 50px;
    }
  }
  button[type=primary]{
      background-color:#007aff;
  } 
</style>

