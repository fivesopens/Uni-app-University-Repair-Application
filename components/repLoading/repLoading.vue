<template>
  <view>
      <uni-card :is-shadow="false" is-full v-for="(item,i) in data" :key='i'  :title="i==0?title+1:title"  :extra="extra+data[i].fault_date">
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
      </uni-card>
  </view>
  
</template>

<script>
  export default {
    name:"repLoading",
    options: {styleIsolation: 'shared'},
    data() {
      return {
         title:'报修记录:',
         extra:'报修时间：',
         isShowLoading:false, 
         isShowCtx:true,
         data:[],
      };
    },
    mounted() {
     this.shwoInfo()
    },
    methods:{
      log(){
        
      },
     async shwoInfo(){
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
               if(res.message[i].order_state=='正在处理'){
                 res.message[i].fault_date = this.$mUtils.formatTime(res.message[i].fault_date, 'Y-M-D h:m:s')
                 res.message[i].img_url1 = `http://127.0.0.1/imgs/${res.message[i].img_url1.substring(9)}`
                 res.message[i].img_url2 = `http://127.0.0.1/imgs/${res.message[i].img_url2.substring(9)}`
                 this.data.push(res.message[i])
               }
            }
            if(this.data.length ===0){
              
              this.isShowLoading = true,
              this.isShowCtx = false
              
            }else{
              
              this.isShowCtx = true
              this.isShowLoading = false
              
            }
            
            uni.$emit('getLoadingData',{
                isShowLoading:this.isShowLoading,
                isShowCtx:this.isShowCtx,
                length:this.data.length
            })
            
          }else if(res.code ===500 || res.code ===501){
            
              this.isShowLoading = true
              this.isShowCtx = false
              
              uni.$emit('getLoadingData',{
                  isShowLoading:this.isShowLoading,
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
      
    }
  }
</script>

<style lang="scss">
  .uni-card{
   margin-top: 25px !important;
   
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

</style>