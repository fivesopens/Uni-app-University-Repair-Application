<template>
  <view>
   <view class="login_header">
     <uni-icons type="contact-filled" size="200" color="#007aff"></uni-icons>
   </view> 
   
   
   <view class="login_body">
     
     <uni-forms ref="valiForm" :modelValue="userForm" label-position="left" :border='true'>
         <uni-forms-item name="nickName">
             <uni-easyinput v-model="userForm.nickName" placeholder="请输入用户名" :inputBorder="false"></uni-easyinput>
         </uni-forms-item>
         <uni-forms-item name="pwd">
             <uni-easyinput v-model="userForm.pwd" placeholder="请输入密码" :inputBorder="false" type="password"></uni-easyinput>
         </uni-forms-item>
     </uni-forms>
    
     <view class="login_btn">
       <button type="primary" @click="login(valiForm)">登录</button> 
     </view>
   </view>
   
   <view class="login_footer">
     <view class="ctx_pwd" @click="findPwd">
       <span>忘记密码?</span>
     </view>
      
      <view class="ctx_req" @click="reqUser">
         <span>没有账号?</span><span>立即注册</span>
      </view>
   </view>
   
  </view>
</template>

<script>
  export default {
    options:{styleIsolation: 'shared'},
    data() {
      return {
        userForm:{
          nickName:'',
          pwd:''
        },
        rules:{
          //对用户名字段进行必填校验
          nickName:{
            rules:[
              {
                required:true,
                errorMessage: '请输入用户名',
              },
              {
                minLength: 4,
                maxLength: 16,
                errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符',
              },
            ]
          },
          pwd:{
            //对pwd字段进行校验
            rules:[
              {
                required:true,
                errorMessage: '请输入密码',
              },
              {
                minLength: 5,
                maxLength: 8,
                errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
              },
            ]
          }
        }
      };
    },
    onReady() {
        this.$refs.valiForm.setRules(this.rules)
    },
    
    methods:{
      
      //用户登录
      login(valiForm){
        
         this.$refs.valiForm.validate().then(async res=>{
          
          uni.setStorageSync('nickName',res.nickName)
          
           const reslut = await this.$https({
             url:'/userLogin',
             method:'POST',
             data:res
           })
           

            if(reslut.code ==200){
              
                uni.showLoading({
                  title:'登陆中',
                })
                
                setTimeout(function(){
                  uni.hideLoading()
                  uni.showToast({
                    icon:'success',
                    title:reslut.message
                  })       
                },1500)
                
                setTimeout(function(){ 
                   uni.switchTab({
                     url:'/pages/my/my'
                   })
                },2000)
               
               
                
            }else{
              
              uni.showLoading({
                title:'登陆中',
              })
              
              setTimeout(function(){
                uni.hideLoading()
                uni.showToast({
                  icon:'error',
                  title:reslut.message
                })
              },1500)
              
            }
            
         }).catch(err =>{
        
            console.log('表单错误信息：', err);
                
          })
      },
      
      //找回密码
      findPwd(){
        uni.reLaunch({
          url:'/pages/updatePwd/updatePwd'
        })
      },
      
      //注册用户
      reqUser(){
         uni.redirectTo({
           url:'/pages/regUser/regUser'
         })
      }
      
    }
  }
</script>

<style lang="scss">
  page{
    background-color: #fff;
  }
.login_header{
  text-align: center;
}
.login_body{
  width: 100%;
  margin-top: 25px;
  .uni-forms-item{
    padding: 0;
    border-top: 0;
    /deep/ .uni-forms-item__content {
      .uni-forms-item__error{
         
          top: -4px;
          left: 10px;
      }
    }
    .uni-easyinput{
      border-bottom: 1px solid  #dcdcdc;
      margin-bottom: 10px;
      height:50px;
     /deep/ input{
         margin-top: 11px;
      }
    }
    
  }
  
  .login_btn{
    width: 100%;
    margin-top: 60px;
    button{
      width: 90%;
      height: 50px;
      border-radius: 50px;
    }
  }
}

.login_footer{
  width: 100%;
  height: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .ctx_pwd{
    margin-top: 10%;
    color: #007aff;
    font-size: 13px;
    margin-bottom: 50px;
  }
  .ctx_req{
    margin-top: 15%;
    margin-bottom: 50px;
    span:nth-child(1){
      color: #333;
      font-size: 15px;
    }
    span:nth-child(2){
      color: #007aff;
      font-size: 13px;
    }
   
  }
}
 button[type=primary]{
       background-color:#007aff;
      font-size: 24px;
      line-height: 50px;
  } 
  
  
  
</style>
