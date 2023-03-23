<template>
  <view class="body">
    <view class="form-body">
      <uni-forms ref="valiForm" :modelValue="formData" label-position="left" :border='true'> 
          <uni-forms-item label="用户名" label-width="70px" name="name">
            <uni-easyinput :inputBorder="false" @blur="isRepeat"  v-model="formData.name" placeholder="请输入用户名" />
          </uni-forms-item>
          <uni-forms-item label="密码" label-width="70px" name="pwd">
            <uni-easyinput :inputBorder="false" v-model="formData.pwd" placeholder="请输入密码" type="password" />
          </uni-forms-item>
          <uni-forms-item label="性别" label-width="70px" name="sex">
            <uni-data-select
                 placeholder="请选择性别"
                 :localdata="formData.sex"
                 @change="change"
               ></uni-data-select>
          </uni-forms-item>
          <uni-forms-item label="请选择城市" label-width="90px" name="country">
            <pickCity @change="cityChange"><i>{{cityTitle}}</i></pickCity>
          </uni-forms-item>
          <uni-forms-item  label-width="0px">
             <uni-file-picker 
             limit="1" 
             title="上传头像"  
             :imageStyles="imageStyles"
             file-mediatype="image"
             file-extname="jpg,jpeg"
             @select="select" 
             @progress="progress" 
             @success="success" 
             @fail="fail"
             :auto-upload="false"
              ref="files"></uni-file-picker>
          </uni-forms-item>
      </uni-forms>
    </view>
    <view class="bottom-submit">
    	<button class="submit" type="primary" @click="upload">提交</button>
    </view>
    <uni-popup ref="message" type="message">
    			<uni-popup-message :type="msgType" :message="messageText" :duration="1500" />
    </uni-popup>
  </view>
</template>

<script> 
  export default {
    name:"reg-form",
    data() {
        return {
          msgType: '',
          messageText: '',
          imageStyles: {
              width: 100,
              height: 100,
            },
          tempFilePaths:'',
          value: 0,
          cityTitle: '省、市、区',
          province:'',
          city:'',
          district:'',
          timer:'',//定时器,
          timerGetCode:'',
          userData:{
            nickName:'',
            pwd:'',
            country:'',
            gender:'',
            url:''
          },
         // 校验表单数据
          formData:{
            name:'',
            country:'',
            pwd:'',
            sex: [
              { value: 0, text: "女" },
              { value: 1, text: "男" },
            ],
          },
          rules:{
            //对name字段进行必填验证
           name:{
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
            },
              //对pwd字段进行必填验证
            pwd:{
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
            }
          }
        }; 
      },
      
    methods:{
            change(e) {
                console.log("e:", e);
                this.userData.gender = e
            },
            upload(valiForm){
              this.$refs.valiForm.validate().then(async res=>{
                this.$refs.files.upload()
                this.userData.nickName = res.name
                this.userData.country = res.country
                this.userData.pwd = res.pwd
                uni.showLoading({
                  title:'注册中',
                })
                setTimeout(function(){
                  uni.hideLoading()
                },1500)
                uni.uploadFile({
                	url: 'http://127.0.0.1/api/uploadAvatar', //仅为示例，非真实的接口地址
                	filePath: this.tempFilePaths,
                	name: 'file',
                	success: (uploadFileRes) => {
                    this.userData.url = uploadFileRes.data
                	}
                });
    
                this.timer = setTimeout(this.reqUser,1500)
              }).catch(err =>{
                console.log('表单错误信息：', err);
              })
            },
           async reqUser(){
                const result =await this.$https({
                    url:'/reqUser',
                    method:'POST',
                    data:{
                      nickName:this.userData.nickName,
                      userPwd:this.userData.pwd,
                      url:this.userData.url,
                      gender:this.userData.gender,
                      country:this.userData.country
                    },
                })
                  if(result.code ==200){
                    uni.showToast({
                      icon:'success',
                      title:result.message,
                    })
                   setTimeout(function(){
                     uni.redirectTo({
                       url:'/pages/login/login'
                     })
                   },1500)
                  }else{
                    uni.showToast({
                      icon:'error',
                      title:result.message
                    })
                  }  
            },
            //城市选择
            cityChange(data) { 
            				this.cityTitle = data.data.join('-')
            				this.province = this.cityTitle.split('-')[0] //省
            				this.city = this.cityTitle.split('-')[1] //市
            				this.district = this.cityTitle.split('-')[2] //区
            				this.formData.country = this.cityTitle //把获取到的值赋值给  this.cityForm.city
              },
              
              //判断用户名是否重复
              async isRepeat(){
                
                const res =  await this.$https({
                  url:'/checkRepeat',
                  method:'POST',
                  data:{
                    userName:this.formData.name
                  }
                })
                if(res.code ==500){
                  this.msgType = 'error'
                  this.messageText = res.message
                  this.$refs.message.open()
                }else{
                  console.log(res.message)
                }
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
        },
        onUnload() {
          clearTimeout(this.timer)
        },
    onReady() {
      this.$refs.valiForm.setRules(this.rules)
    },
  }
</script>

<style lang="scss">
.body{
  .form-body{
    background-color: #fff;
     padding-left: 15px;
    .form-item{
      margin-left: 10px;
    }
    i{
      line-height: 36px;
    }
  }
}
.bottom-submit{
        padding: 10px 5px;
        width: 100%;
        display: flex;
        background-color: #fff;
     		flex-direction: column;
     		position: fixed;
     		left: 0;
     		right: 0;
     		left: var(--window-left);
     		right: var(--window-right);
     		bottom: 0;
       .submit{
         width: 90%;
         height: 40px;
         border-radius: 50px;
         line-height: 40px;
       }
    }
  button[type=primary]{
      background-color:#007aff;
  } 
</style>