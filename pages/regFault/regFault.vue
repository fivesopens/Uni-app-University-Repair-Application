<template>
<view class="body">
  <view class="form-body">
    <uni-forms ref="valiForm" :modelValue="formData" label-position="left" :border='true'> 
        <uni-forms-item label="姓名" label-width="70px" name="name">
          <uni-easyinput :inputBorder="false" v-model="formData.name" placeholder="请输入姓名" />
        </uni-forms-item>
        <uni-forms-item label="手机号码" label-width="70px" name="phone">
          <uni-easyinput :inputBorder="false" v-model="formData.phone" placeholder="请输入手机号" />
        </uni-forms-item>
        <uni-forms-item label="报修区域" label-width="70px" name="area">
          <uni-data-select
               placeholder="请选择报修区域"
               :localdata="formData.area"
               @change="change"
             ></uni-data-select>
        </uni-forms-item>
        <uni-forms-item label="详细地点" label-width="70px" name="num">
          <uni-easyinput :inputBorder="false" v-model="formData.num" placeholder="例:荷3-222" />
        </uni-forms-item>
        <uni-forms-item label="报修类型" label-width="70px" name="type">
          <uni-data-select
               placeholder="请选择故障类型"
               :localdata="formData.type"
               @change="changeType"
             ></uni-data-select>
        </uni-forms-item>
        <uni-forms-item label="维修师傅" label-width="70px" name="worker" >
           <uni-easyinput :inputBorder="false" v-model="formData.worker" placeholder="请选择维修师傅" @focus="selWorker" />
        </uni-forms-item>
        <uni-forms-item label="故障描述" label-width="70px" name="ctx">
          <uni-easyinput :inputBorder="false"  type="textarea" v-model="formData.ctx" placeholder="请输入详细故障描述" />
        </uni-forms-item>
       <uni-forms-item  label-width="0px">
         <uni-file-picker 
          limit="2" 
          title="上传故障图片"  
          file-mediatype="image"
          file-extname="png,jpg"
          :imageStyles="imageStyles"
          v-model="pictureList"
          @select="select" 
          @delete="deleteimg"
          @success="success" 
          @fail="fail"
          :auto-upload="false"
          ref="files"
          ></uni-file-picker>
          
          
       </uni-forms-item>
    </uni-forms>
  </view>
  
  <view class="bottom-submit">
  	<button class="submit" type="primary" @click="submit">提交</button>
  </view>

</view>
</template>

<script>
  export default {
    name:"my-form",
    data() {
      return {
        value: 0,
        cnt:1,
        tmpList:'',
        imgUrl:[],
        faultInfo:{
          nickName:'',
          userName:'',
          workerName:'',
          phone:'',
          faultArea:'',
          address:'',
          faultType:'',
          ctx:'',
          imgUrl1:'',
          imgUrl2:'',
          orderState:'未接单',
          date:'',
        },
        pictureList:[],
        imageStyles: {
            width: 100,
            height: 100,
          },
        
       // 校验表单数据
        formData:{
          name:'',
          phone:'',
          num:'',
          ctx:'',
          worker:'',
          area: [
            { value: "河东", text: "河东" },
            { value: "河西", text: "河西" },
          ],
          type:[
            { value:"水力故障" , text: "水力故障" },
            { value:"电力故障", text: "电力故障" },
            { value:"网络故障", text: "网络故障" },
            { value:"其他故障", text: "其他故障" },
          ]
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
                 minLength: 2,
                 maxLength: 5,
                 errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
               }
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
         num:{
           rules:[
             {
               required: true,
               errorMessage: '请填写报修地址',
             },
          ]
         },
         ctx:{
           rules:[
            {
              required:true,
              errorMessage: '请输入故障描述',
            },
            {
               validateFunction:function(rule,value,data,callback){
                 if(value.length<5){
                   callback('故障描述太短，请输入5个字以上的描述')
                 }else if(value.length>50){
                   callback('请输入简短的故障描述')
                 }else{
                   return true
                 }
               }
            }
           ]
         },
         worker:{
           rules:[
             {
               required:true,
               errorMessage: '请选择维修师傅',
             },
           ]
         }
        }
      }; 
    },
    onReady() {
      this.$refs.valiForm.setRules(this.rules)
    },
    onShow() {
      this.formData.worker = uni.getStorageSync('workerName')
    },
    methods:{
        change(e) {
            this.faultInfo.faultArea = e
        },
        changeType(e){
          this.faultInfo.faultType = e
        },
       async submit(valiForm){
          
          this.$refs.valiForm.validate().then(async res=>{
             
             if(this.pictureList.length !=0){
                  
                  let a=0
                  this.$refs.files.upload()
                  for(var i = 0;i<this.pictureList.length;i++){
                   await uni.uploadFile({
                      url: 'http://127.0.0.1/api/uploadfault',
                      filePath:this.pictureList[i].url,
                      name:'file',
                      success: (uploadFileRes) => {
                         this.imgUrl.push(uploadFileRes.data)
                         if(a==0){
                          
                           this.faultInfo.imgUrl1 = this.imgUrl[0]
                           a++
                         }
                         if(a==1){
              
                           this.faultInfo.imgUrl2 = this.imgUrl[1]
                         }
                         
                      },
                      fail(res) {
                        uni.showToast({
                          icon:'error',
                          title:'上报失败'
                        })
                        console.log(res)
                      }
                    })
                            
                  }
                  
             }else{
               uni.showToast({
                 icon:'none',
                 title:'请选择要上传的图片'
               })
             }
            this.faultInfo.nickName = uni.getStorageSync('nickName') 
            this.faultInfo.userName = res.name
            this.faultInfo.workerName = res.worker
            this.faultInfo.phone =res.phone
            this.faultInfo.address = res.num
            this.faultInfo.ctx = res.ctx
            this.faultInfo.imgUrl1 = this.imgUrl[0]
            this.faultInfo.imgUrl2 = this.imgUrl[1]
            this.faultInfo.date = Date.now()

           setTimeout(this.reqFault,1000)
            
          }).catch(err =>{
            console.log('表单错误信息：', err);
          })

        },
       
       async reqFault(){
          const res = await this.$https({
              url:'/insfault',
              method:'POST',
              data:this.faultInfo
          })
          
          if(res.code ==200){
              uni.showLoading({
                title:'正在上传'
              })
              
              setTimeout(function(){
                uni.hideLoading()
                uni.showToast({
                  icon:'success',
                  title:res.message
                })
              },1500)
              
              uni.removeStorageSync('workerName')
              
              setTimeout(function(){
                uni.redirectTo({
                  url:'/pages/myFault/myFault'
                })
              },2000)
              
          }else{
              uni.showLoading({
                title:'正在上传'
              })
              
              setTimeout(function(){
                uni.hideLoading()
                uni.showToast({
                  icon:'none',
                  title:res.message
                })
              },1500)
              
              setTimeout(this.reload,2000)
          }     
     
       },
       
       select(e){
            this.tmpList = []
            if(this.cnt ===1){
              this.pictureList = e.tempFiles
            }else{
              this.pictureList = this.pictureList.concat(e.tempFiles)
             
            }
          
            for(var i = 0;i<this.pictureList.length;i++){
              var obj = new Object()
              obj.name = 'file'
              obj.url = this.pictureList[i].path
              this.tmpList.push(obj)
            }
          
            this.cnt++
       },
       
       
       selWorker(){
         uni.navigateTo({
           url: '/pages/select-worker/select-worker',
         });
       },
       // 删除图片
       deleteimg(e){
         
         var index = this.pictureList.findIndex(item =>{
            
           if(item ==e.tempFile){
              return true
           }
         })
         
         this.pictureList.splice(index,1)
         this.tmpList = []
         for(var i = 0;i<this.pictureList.length;i++){
           var obj = new Object()
           obj.name = 'file'
           obj.url = this.pictureList[i].path
           this.tmpList.push(obj)
         }
       
       },
       
       // 上传成功
       success(e){
       },
       
       // 上传失败
       fail(e){
         console.log('上传失败：',e)
       },
        
        //刷新页面
       reload(){
         var pages = getCurrentPages() //获取所有页面的数组对象
         var currPage = pages[pages.length-1] //当前页
         uni.reLaunch({
           url:currPage.$page.fullPath
         })
       } 
    }
  }
</script>

<style lang="scss" scoped>
  .body{
    .form-body{
      height: 1350rpx;
      background-color: #fff;
      padding-left: 15px;
     .form-item{
       margin-left: 10px;
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
    
  }
  button[type=primary]{
      background-color:#007aff;
  } 
</style>