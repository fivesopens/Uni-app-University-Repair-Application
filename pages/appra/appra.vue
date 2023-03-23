<template>
  <view>
    <uni-group top="0">
      <uni-section title="意见类型" type="line">
         <view class="tag-view">
           <uni-tag v-for="(item,i) in textGrou"  :key="i" 
           :text="textGrou[i].text" 
           :circle="true" 
           :inverted="textGrou[i].inverted"  
           type="primary" 
            @click="setInverted(textGrou[i].text,textGrou[i].inverted,i)" />
         </view>
      </uni-section>
    </uni-group>
  
    <uni-group>
        <uni-section title="维修评价"  type="line" >
           <uni-forms-item label="维修师傅" labelWidth="70">
             <uni-easyinput  type="text" v-model="workerName" placeholder="请输入维修师傅姓名" />
           </uni-forms-item>
            <uni-rate allow-half :value="3.5" @change="onChange" />
        </uni-section>
    </uni-group>

    
    <uni-group>
        <uni-section title="意见内容" type="line">
          <view class="uni-textarea">
            <textarea @input='bindTextAreaBlur' placeholder-style="color:#bebebe" placeholder="请填写您的意见或建议内容"/>
          </view>
        </uni-section>
    </uni-group>
    
    
    <uni-group>
      <uni-forms :modelValue="formData" ref="valiForm">
        <uni-forms-item label="用户姓名" name="userName" labelWidth="70">
          <uni-easyinput  type="text" v-model="formData.userName" placeholder="请留下您的姓名" />
        </uni-forms-item>
        <uni-forms-item label="联系电话" name="phone"  labelWidth="70">
          <uni-easyinput  type="text" v-model="formData.phone" placeholder="请留下您的联系方式" />
        </uni-forms-item>
        <uni-forms-item label="工单编号" name="faultId"  labelWidth="70">
          <uni-easyinput type="text" v-model="formData.faultId" placeholder="请输入反馈的编号" />
        </uni-forms-item>
      </uni-forms>
    </uni-group>
    
    <button class="submit" type="primary" @click="submit" >提交反馈</button>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        //标签组
        textGrou:[
          {
            text:'未解决问题',
            inverted:true
          },
          {
            text: '处理不及时',
            inverted:true
          },
          {
            text:'软件问题',
            inverted:true
          },
          {
            text:'报修问题',
            inverted:true
          },
          {
            text:'服务投诉',
            inverted:true
          },
          {
            text:'意见反馈',
            inverted:true
          },
        ],
        
        formData:{
          userName:'',
          phone:'',
          faultId:'',
          
        },
        rules:{
          userName:{
            rules:[
              {
                required:true,
                errorMessage: '请填写姓名',
              },
            ]
          },
          
          phone:{
            rules:[
              {
                 required: true,
                 errorMessage: '请填写手机号码',
               },
              {
                validateFunction:function(rule,value,data,callback){
                 let iphoneReg = (
                   /^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/
                 ); 
                  if (!iphoneReg.test(value)) {
                     callback('手机号码格式不正确，请重新填写')
                   }else{
                     return true
                   }
                }
              },
            ]
          },
        },
       
        type:'',
        appraCtx:'',
        workerName:'',
        rate:'3.5',
        rateType:'',
        i:''
      };
    },
    onReady() {
       this.$refs.valiForm.setRules(this.rules)
    },
    methods:{
      
      async submit(valiForm){
         this.$refs.valiForm.validate().then(async res => {             
                 if(this.type ===''){
                     uni.showToast({
                       icon:'none',
                       title:'请选择意见类型'
                     })
                 }else if(this.appraCtx===''){
                   uni.showToast({
                     icon:'none',
                     title:'请填写意见内容'
                   })
                 }else{
                  
                   let nick_name = uni.getStorageSync('nickName')
                   let date = Date.now()
                   let i = this.i
                     const data = {
                       faultId:res.faultId,
                       nickName:nick_name,
                       userName:res.userName,
                       phone:res.phone,
                       type:this.type,
                       ctx:this.appraCtx,
                       rateType:this.rateType,
                       workerName:this.workerName,
                       date:date
                     }
                   
                   const res1 = await this.$https({
                      url:'/addfeel',
                      method:'post',
                      data:data
                   })
                   
                   if(res1.code==200){
                     uni.showLoading({
                       title:'正在提交'
                     })
                     
                     setTimeout(function(){
                       uni.hideLoading()
                       uni.showToast({
                         icon:'success',
                         title:res1.message
                       })       
                     },1500)
                     
                    setTimeout(function(){
                      let data = {
                        i,
                        code:200
                      }
                      uni.navigateTo({
                        url:`/pages/myFault/myFault?data=` +encodeURIComponent(JSON.stringify(data))
                      })
                    },2000) 
                    
                     
                   }else{
                     uni.showLoading({
                       title:'正在提交',
                     })
                     
                     setTimeout(function(){
                       uni.hideLoading()
                       uni.showToast({
                         icon:'error',
                         title:res1.message
                       })
                     },1500)
                     
                     
                     
                   }
                 }
                
         				}).catch(err => {
         					console.log('err', err);
         				})
            
      },
      
      onChange(e) {
       
        this.rate = e.value
        if(this.rate>=0.5&&this.rate<=2){
             this.rateType = '差评'
        }else if(this.rate>2&&this.rate<=3.5){
             this.rateType = '中评'
        }else{
            this.rateType = '好评'
        }
      },
      
      setInverted(type,inverted,num) {
        
         for(var i=0;i<this.textGrou.length;i++){
           if(i!==num){
             this.textGrou[i].inverted = true
           }
           
           if(i===num){
              this.textGrou[i].inverted = !this.textGrou[i].inverted
           }
         }
         
         this.type = type
        
      },
      bindTextAreaBlur: function (e) {
  
          this.appraCtx = e.detail.value
          
      }
    },
    onLoad(option) {
      let data = JSON.parse(decodeURIComponent(option.data))
      this.formData.userName = data.userName
      this.formData.phone = data.phone
      this.formData.faultId = data.faultId
      this.workerName = data.workerName
      this.i = data.i
    }
  }
</script>

<style lang="scss">
.tag-view{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 150rpx;
  .uni-tag{
    margin-left: 35rpx;
  }
}

.uni-textarea{
  textarea{
    padding: 17px;
    border: 1px solid #bebebe52;
    width: 95%;
    height: 250rpx;
    padding: 45rpx 0 0 33rpx;
  }
}
.submit{
      width: 220rpx;
      height: 71rpx;
      margin-top: 78rpx;
      margin-bottom: 78rpx;
      line-height: 71rpx;
      font-size: 28rpx;
      border: 1px solid #2196F3;
}
  button[type=primary]{
    
      background-color:#fff;
      color: #2196F3;
  } 
  .button-hover[type=primary]{
      background-color:#2196F3;
      color: #fff;
  }

</style>
