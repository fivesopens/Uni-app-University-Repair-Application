<template>
  <view>
    <view class="select_country">
      <pickCity @change="cityChange"><uni-icons type="location-filled" size="20"></uni-icons><i>{{cityTitle}}</i></pickCity>
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
         cityTitle: '省、市、区',
         province:'',
         city:'',
         district:'',
         newCountry:'',
      };
    },
    methods:{
      cityChange(data) {
          this.cityTitle = data.data.join('-')
          this.province = this.cityTitle.split('-')[0] //省
          this.city = this.cityTitle.split('-')[1] //市
          this.district = this.cityTitle.split('-')[2] //区
          this.newCountry = this.cityTitle //把获取到的值赋值给  this.cityForm.cit
        },
        
        cancel(){
           uni.navigateBack()
        },
       async submit(){
          let nickName =  uni.getStorageSync('nickName')
          const res = await this.$https({
            url:'/updateUser',
            method:'POST',
            data:{
              newCountry:this.newCountry,
              nickName:nickName
            }
          })
          
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
                 }  else if(res.code==501){
                          
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
                  } else{
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
        }
    }
  }
</script>

<style lang="scss">
  page{
    background-color: #f5f5f5;
  }
  .select_country{
    position: relative;
   .uni-icons{
     position: absolute;
      left: 4px;
      top: 20px;
   }
    width: 100%;
    height:10%;
    padding: 20px 30px;
    background-color: #FFF;
  }
  .submit{
     display: flex;
     margin-top: 10px;
    button{
      width: 40%;
      border-radius: 50px;
    }
  }
  button[type=primary]{
      background-color:#007aff;
  } 
  button[type=default]{
      background-color:#fff;
  } 
</style>
