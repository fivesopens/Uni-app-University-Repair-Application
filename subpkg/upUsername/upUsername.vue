<template>
  <view>
      <uni-forms ref="valiForm" :modelValue="updateForm" label-position="left" :border='true'>
        <uni-forms-item name="newUserName">
          <uni-easyinput v-model="updateForm.newUserName" placeholder="请输入新的用户名" :inputBorder="false"  prefixIcon="person-filled">   </uni-easyinput>
        </uni-forms-item>
      </uni-forms>
      <view class="submit">
        <button type="default" @click="cancel">取消</button>
        <button type="primary" @click="submit">确定</button>
      </view>
     
  </view>
</template>

<script>
  export default {
    options:{styleIsolation: 'shared'},
    data() {
      return {
        updateForm:{
          newUserName:'',
          oldUserName:''
        },
        rules:{
          newUserName:{
            rules:[
              {
                required:true,
                errorMessage: '请输入姓名',
              },
              {
                minLength: 4,
                maxLength: 16,
                errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
              },
              {
                  validateFunction:function(rule,value,data,callback){
                   let inameReg = (
                     /^[a-zA-Z0-9_-]/
                   ); 
                    if (!inameReg.test(value)) {
                       callback('应该是字母，数字，下划线，减号')
                     }else{
                       return true
                     }
                   }
               },
            ]
          }
        }
      };
    },
    onLoad() {
     this.oldUserName =  uni.getStorageSync('nickName')
    },
    onReady() {
      this.$refs.valiForm.setRules(this.rules)
    },
    methods:{
      cancel(){
        uni.navigateBack()
      },
      submit(valiForm){
        this.$refs.valiForm.validate().then(async res=>{
          
            const res2 = await this.$https({
              url:'/updateUser',
              method:'POST',
              data:{
                newNickName:res.newUserName,
                oldNickName:this.oldUserName
              }
            })
          
            
            if(res2.code==200){
             
              uni.showLoading({
                title:'修改中',
              })
            
                 setTimeout(function(){
                   uni.hideLoading()
                   uni.showToast({
                     icon:'success',
                     title:res2.message
                   })  
                   
                  setTimeout(()=>{
                   
                     uni.reLaunch({
                       url:'/pages/my/my'
                     })
                    },1800)
                  
                 },1500)
                 
                  uni.setStorageSync('nickName',res.newUserName)
            }else if(res.code==501){
            
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
                   title:res2.message
                 }) 
               },1500)
            }
        }).catch(err =>{
          console.log('表单错误信息：', err);
        })
      }
    }
  }
</script>

<style lang="scss">
  page{
    background-color: #fff;
   
  }
 /deep/ .uni-forms{
    .uni-forms-item {
       .uni-forms-item__content {
        .uni-forms-item__error{
            top: 13px;
            left: 9px;
        }
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
