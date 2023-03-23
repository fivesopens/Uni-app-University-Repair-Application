<template>
  <view>
    <view class="header_pwd">
      <span>若您忘记了密码，可在此重新设置新密。</span>
    </view>
    <view class="body_pwd">
      <uni-forms ref="valiForm" :modelValue="updateForm" label-position="left" :border='true'>
          <uni-forms-item name="newPwd">
            <uni-easyinput v-model="updateForm.newPwd" placeholder="请输入新密码" :inputBorder="false" type="password"  prefixIcon="locked">   </uni-easyinput>
          </uni-forms-item>
          <uni-forms-item name="checkPwd">
            <uni-easyinput v-model="updateForm.checkPwd" placeholder="请再次输入密码" :inputBorder="false" type="password" prefixIcon="locked-filled"></uni-easyinput>
          </uni-forms-item>
          <uni-forms-item name="phone">
              <uni-easyinput  v-model="updateForm.phone" placeholder="请输入手机号" :inputBorder="false" @input='isPhone'  prefixIcon="phone"></uni-easyinput>
              <button class="code" type="default" :disabled="disabled" @click="getCode">{{!codeTime?'获取验证码':codeTime+'s'}}</button>
          </uni-forms-item>
          <uni-forms-item name="code">
              <uni-easyinput  v-model="updateForm.code" placeholder="请输入验证码" :inputBorder="false"></uni-easyinput>
          </uni-forms-item>
      </uni-forms>
    </view>
    
    <view class="button_pwd">
      <button type="primary" @click="updatePwd(valiForm)">确定</button>
    </view>
  </view>
</template>

<script>

  export default {
    data() {
      return {
        codeTime:0, //验证码倒计时
        disabled:true, //按钮禁用
        nickName:'',
        updateForm:{
          newPwd:'',
          checkPwd:'',
          phone:'',
          code:''
        },
        rules:{
          //对新密码字段进行必填校验
          newPwd:{
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
              {
                  validateFunction:function(rule,value,data,callback){
                   let iPwdReg = (
                    /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{5,8}$/
                   ); 
                    if (!iPwdReg.test(value)) {
                       callback('密码应为字母，数字组合，5-8位字符串，如：xyl37')
                     }else{
                       return true
                     }
                   }
              },
            ]
          },
          checkPwd:{
            //对pwd字段进行校验
            rules:[
              {
                required:true,
                errorMessage: '请再次输入密码',
              },
              {
                minLength: 5,
                maxLength: 8,
                errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符',
              },
              {
                 validateFunction:function(rule,value,data,callback){
                    if(value !== data.newPwd){
                      return  callback('两次密码输入不一致')
                    }else{
                      return true
                    } 
                },
              
              },
            ]
          },
          phone:{
            rules:[
              {
                required:true,
                errorMessage: '请输入手机号',
              },
              {
                validateFunction:function(rule,value,data,callback){
                   let iPhone = (/^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/); 
                    if (!iPhone.test(value)) {
                       callback('手机号不正确')
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
      this.nickName = uni.getStorageSync('nickName')
    },
    onReady() {
        this.$refs.valiForm.setRules(this.rules)
    },
    methods:{
      updatePwd(){
       
        this.$refs.valiForm.validate().then(async res=>{
       
         //发起请求
           const res2  =  await this.$https({
               url:'/updateUser',
               method:'POST',
               data:{
                  nickName:this.nickName,
                  newPwd:res.newPwd,
                  phone:res.phone
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
              },1500)
              
              setTimeout(function(){ 
                 uni.redirectTo({
                   url:'/pages/login/login'
                 })
              },2000)
              
          }else if(res2.code == 501){
            
              console.log(res2.message)
              
          }else{
              uni.showLoading({
                title:'修改中',
              })
              
              setTimeout(function(){
                uni.hideLoading()
                 uni.showToast({
                   icon:'error',
                   title:res2.message
                 })
                },1500)
          }
        }).catch(err =>{
                
           console.log('表单错误信息：', err);
               
         })
      },
      isPhone(){
        if(this.updateForm.phone){
          this.disabled = false
        }else{
          this.disabled = true
        }
      },
    async  getCode(){
        if(this.codeTime >0){
          
          return  uni.showToast({
            icon:'none',
            title:'不能重复获取验证码'
          })
          
        }else{
          //todo:发起获取验证码请求
          const res = await this.$https({
            url:'/notechecks',
            method:'POST',
            data:this.updateForm.phone
          })
          
          if(res.code==200){
            setTimeout(()=>{
                this.updateForm.code = res.message
            },1500)
          }
         
          
          
          this.codeTime = 10
          let timer = setInterval(()=>{
             this.codeTime--
             if(this.codeTime<1){
               clearInterval(timer);
               this.codeTime = 0
             }
          },1000)
        }
      },
    
    },
    
    
  }
</script>

<style lang="scss">
  page{
    background-color: #fff;
  }
.header_pwd{
  width: 100%;
  padding: 3%;
  padding-left: 13%;
  color: #a5a5a5;
  font-size: 12px;
  
}
.body_pwd{
  width: 100%;
  margin-top: 10px;
  .uni-forms-item{
    padding: 0;
    border-top: 0;
    position: relative;
  
    .code{
      position: absolute;
      width: 80px;
      height: 35px;
      right: 40px;
      top:3px;
      line-height: 35px;
      font-size: 10px;
      z-index:99999;
    }
   
    /deep/ .uni-forms-item__content {
      .uni-forms-item__error{
          top: -4px;
          left: 41px;
      }
    }
  }
  
  .uni-easyinput{
       border-bottom: 1px solid  #dcdcdc;
       margin-bottom: 10px;
       height:50px;
       width: 80%;
       margin-left: 10%;
      /deep/ input{
          margin-top: 11px;
       }
     }
}

.button_pwd{
  width: 80%;
  margin-left: 10%;
 margin-top: 10%;
  button{
     border-radius: 30px;
  }
}
button[type=primary]{
      background-color:#007aff;
  } 
</style>
