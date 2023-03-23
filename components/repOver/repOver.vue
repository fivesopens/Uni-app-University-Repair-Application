<template>
  <view>
      <uni-card :is-shadow="false" is-full v-for="(item,i) in data"  :key='i' :title="i==0?title+1:title+i"  :extra="extra+data[i].fault_date">
        <text class="uni-body">姓名:{{item.user_name}}</text>
        <text class="uni-body">手机号:{{item.phone}}</text>
        <text class="uni-body">报修地址:{{item.home_area}} {{item.home_num}}</text>
        <text class="uni-body">故障类型:{{item.fault_type}}</text>
        <text class="uni-body">故障内容:{{item.fault_ctx}}</text>
        <text class="uni-body">维修师傅:{{item.worker_name}}</text>
        <text class="uni-body">订单状态:{{item.order_state}}</text>
        <text class="uni-body"> 故障图片: </text>
       <view class="show_img">
          <image :src="data[i].img_url1" mode="aspectFit" @click="showBigImg(item.img_url1)" style="width: 100px; height: 100px;"></image>
          <image :src="data[i].img_url2" mode="aspectFit" @click="showBigImg(item.img_url2)" style="width: 100px; height: 100px;"></image>
        </view>
        <button class="appraise_btn" :disabled="code==200 && index==i?true:false" @click="gotoAppra(i,item.fault_id,item.user_name,item.worker_name,item.phone)" type="primary">评价</button>
      </uni-card>
  </view>
</template>

<script>
  export default {
    name:"repOver",
     options: {styleIsolation: 'shared'},
     props:['code','index'],
    data() {
      return {
        title:'报修记录:',
        extra:'报修时间：',
        isShowOver:false,
        isShowCtx:true,
        data:[],
      };
    },
    mounted() {
       this.showInfo()
    },
   methods:{
     async showInfo(){
       let nickName =uni.getStorageSync('nickName')
        const  res = await this.$https({
           url:'/wxFaultInfo',
           method:'POST',
           data:{
             nickName:nickName
           }
        })
        
        if(res.code == 200){
          for(var i=0;i<res.message.length;i++){
             if(res.message[i].order_state=='完成订单'){
               res.message[i].fault_date = this.$mUtils.formatTime(res.message[i].fault_date, 'Y-M-D h:m:s')
               res.message[i].img_url1 = `http://127.0.0.1/imgs/${res.message[i].img_url1.substring(9)}`
               res.message[i].img_url2 = `http://127.0.0.1/imgs/${res.message[i].img_url2.substring(9)}`
               this.data.push(res.message[i])
             }
          }
          
          if(this.data.length ===0){
          
            this.isShowOver = true,
            this.isShowCtx = false
            
          }else{
           
            this.isShowOver = false
            this.isShowCtx = true
            
          } 
          
          uni.$emit('getOverData',{
              isShowOver:this.isShowOver,
              isShowCtx:this.isShowCtx,
              length:this.data.length
          })
          
        }else if(res.code ===500 || res.code ===501){
              this.isShowOver = true
              this.isShowCtx = false
              uni.$emit('getOverData',{
                  isShowOver:this.isShowOver,
                  isShowCtx:this.isShowCtx,
              })
        }
     },
     showBigImg(imgsArray){
       let arr=[];
       arr.push(imgsArray)
       uni.previewImage({
            current: 0,
            urls: arr //必须是网址路径，否则加载不出来，如：http：或https：
       });
     },
     
     gotoAppra(i,faultId,userName,workerName,phone){
       let data = {
         i,
         faultId,
         userName,
         workerName,
         phone
       }
       uni.navigateTo({
         url:`/pages/appra/appra?data=`+ encodeURIComponent(JSON.stringify(data))
       })
     }
   }
  }
</script>

<style lang="scss">
  .uni-card{
   margin-top: 25px !important;
   .appraise_btn{
     width: 100%;
     height: 30px;
     line-height: 30px;
   }
   .show_img image{
     margin-right: 25px;
   }
    ::v-deep .uni-ellipsis{
          margin-left: -60px;
      }
     ::v-deep .uni-card__content{
          display: flex;
          flex-direction: column;
          align-items: baseline;
     }
     .uni-body{
       padding: 5px 0px;
     }
  }

  button[type=primary]{
      background-color:#2196F3;
  } 
  .button-hover[type=primary]{
      background-color:#1F3A9F;
  } 
</style>