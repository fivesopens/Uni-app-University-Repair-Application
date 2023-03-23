<template>
  <view class="body_sel_worker">
    <uni-card v-for="(item ,i) in workerInfo" :key="i" title="维修师傅简介" margin="10">
           <image slot='cover' style="width: 100%;margin-top: 10px;" :src="item.url"></image>
           <text>姓名:{{item.workerName}}</text></br>
           <text>擅长维修:{{item.type}}</text><br>
           <text> 简介：{{item.introduction}}</text>
            <view slot="actions" class="card-actions">
              <view class="card-actions-item">
                <uni-icons type="checkbox-filled" size="30" :color="index==i?color:''" ></uni-icons>
                <button type="primary" @click="actionsClick(item,i)">选择</button>
              </view>
            </view>
        </uni-card>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
        color:'',
        workerInfo:[],
        index:'',
        workerName:''
      };
    },
    onShow() {
      this.showWOrkerInfo()
    },
    methods:{
    
      actionsClick(item,i){
        
         this.index =i
         this.color = '#007aff'
         this.workerName = item.workerName
         uni.setStorageSync('workerName',this.workerName)
         
      },
     async showWOrkerInfo(){
          const res = await this.$https({
              url:'/showWxInfo',
          })
          
          if(res.code ==200){
              
            for(var i =0;i<res.message.length;i++){
                let data = {
                  workerName:res.message[i].worker_name,
                  type:res.message[i].type,
                  introduction:res.message[i].introduction,
                  url:res.url[i]
                }              
                this.workerInfo.push(data)
            }
  
          }else if(res.code ==501){
            uni.showToast({
              icon:'none',
              title:res.message
            })
          }else{
            uni.showToast({
              icon:'none',
              title:res.message
            })
          }
      }
     
    }
  }
</script>

<style lang="scss">
.body_sel_worker{
  
  .uni-card{
    text:nth-child(1){
      font-size: 20px;
      color: #333;
    }
    text:nth-child(3){
      font-size: 15px;
      color: #333;
      padding-bottom: 10px;
    }
    .card-actions .card-actions-item {
      display: flex;
      justify-content: space-between;
      button{
        width:65px;
        height: 30px;
        line-height: 30px;
        margin-right: 0px;
        margin-bottom: 8px;
      }
    }
  }
}

button[type=primary]{
      background-color:#007aff;
  } 
</style>
