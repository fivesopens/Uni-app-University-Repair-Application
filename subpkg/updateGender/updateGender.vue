<template>
  <view>
    <view class="select_sex">
      <uni-data-checkbox mode="button" v-model="value" :localdata="range" @change="change" wrap="true"></uni-data-checkbox>
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
          value: 0,
          gender:'',
          range: [{"value": 0,"text": "女"	},{"value": 1,"text": "男"}]
      };
    },
    methods:{
     change(e){
            this.gender = e.detail.value
     	},
      cancel(){
        uni.navigateBack()
      },
     async submit(){
          let nickName =  uni.getStorageSync('nickName')
          if(this.gender == ''){
            this.gender = this.value
            
          }else{
             console.log(this.gender)
             
          }
          
          const res = await this.$https({
            url:'/updateUser',
            method:'POST',
            data:{
              newGender:this.gender,
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
      }
    }
  }
</script>

<style lang="scss">
  page{
    background-color: #fff;
   
  }
 .select_sex{
   .uni-data-checklist{
     .checklist-group{
       /deep/ .checklist-box{
           width: 100%;
           height: 30px;
          .checklist-content .checklist-text{
            font-size: 15px;
            margin-left: 16px;
          }
         }
     }
   }
    /deep/ .uni-data-checklist .checklist-group .checklist-box.is--button{
       margin-right: 0;
       border: 0;
       
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
