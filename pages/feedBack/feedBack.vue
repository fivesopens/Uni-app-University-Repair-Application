<template>
  <view>
     <uni-card v-for="(item,i) in feelBackDate" :key="i" title="反馈内容" margin="5px">
       <uni-steps :options="list1" active-icon="map-pin-ellipse" :active="feelBackDate[i].process_status" />
       <view class="card_body">
         <span class="uni-body"> <text> 提交时间:</text>{{item.create_time}}</span>
         <span class="uni-body"> <text> 反馈类型:</text>{{item.feel_type}}</span>
         <span class="uni-body"><text>  反馈内容:</text>{{item.feel_ctx}}</span>
       </view>
     </uni-card>
       <uni-load-more :iconType="circle" :status="status"  :content-text="contentText"  :icon-size="24" />
  </view>
</template>

<script>
  export default {
    data() {
      return {
       active: 0,
        list1: [{
          title: '未处理'
        }, {
          title: '正在处理'
        }, {
          title: '处理完成'
        },],
        
        feelBackDate:[],
        
         page:1,
         pagesize:3, // 每页条数
         reload: false,
         status: 'more',
         iconType: 'auto',
         isLoadMore:false,
         contentText: {
             contentdown: '上拉加载更多~',
             contentrefresh: '正在加载更多~',
             contentnomore: '我是有底线的~'
          },
      };
    },
    onShow() {
      this.showInfo()
    },
    methods:{
    async showInfo(){
        let nickName = uni.getStorageSync('nickName')
         const res = await this.$https({
           url:'/WxfeelInfo',
           method:'post',
           data:{nickName,pageSize:this.pagesize,pageNum:this.page}
         })
         if(res.code ==200){
         
             if(res.message.length<this.pagesize){
               this.isLoadMore = true
               this.status = 'nomore'
             }else{
               this.isLoadMore = false
             }
              let resData =[] 
             for(var i=0;i<res.message.length;i++){
               res.message[i].create_time = this.$mUtils.formatTime(res.message[i].create_time, 'Y-M-D h:m:s')    
               if(res.message[i].process_status ==='未处理'){
                 
                  res.message[i].process_status =0
                  
               }else if(res.message[i].process_status ==='正在处理'){
                 
                  res.message[i].process_status =1
                 
               }else{
                  res.message[i].process_status =2
               }
               
               resData.push(res.message[i])
               
             }
              this.feelBackDate = this.feelBackDate.concat(resData)
           
         }else if(res.code ==501){
           
           uni.showToast({
             icon:'error',
             title:res.message
           })
           this.isLoadMore = false
           if(this.page>1){
             this.page-=1
           }
           
         }else{
           
           uni.showToast({
             icon:'error',
             title:res.message
           })
           
           this.isLoadMore = false
           if(this.page>1){
             this.page-=1
           }
           
         }
     },
     
     
     
    },
    
    onReachBottom() {
      
     setTimeout(()=>{
        
       if(!this.isLoadMore){
         this.status = 'loading'
         this.isLoadMore = true
         this.page +=1
         this.showInfo()
       }
     },2000)
      
    }
    
  }
</script>

<style lang="scss">
.card_body{
  display: flex;
  flex-direction: column;
  padding:20rpx 19rpx 0rpx 19rpx;
  .uni-body{
    padding-bottom: 17rpx;
    color: #333;
    text{
      padding-right:15rpx;
      color: #7d7d7d;
    }
  }
}
</style>
