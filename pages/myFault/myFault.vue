<template>
  <view>
    <view class="uni-padding-wrap uni-common-mt">
      <view class="head_badge">
        <uni-badge v-show="toNum"  class="uni-badge-todo" :text="toNum"  size="small" >
         </uni-badge>
         
        <uni-badge v-show="loadingNum" class="uni-badge-loading" :text="loadingNum"  size="small" type="warning">
         </uni-badge>
         
         <uni-badge v-show="overNum"  class="uni-badge-over" :text="overNum"  size="small" type="success">
          </uni-badge>
      </view>
      <uni-segmented-control :current="current" :values="items" :style-type="styleType"
        :active-color="activeColor" @clickItem="onClickItem" />
    </view>
      <view class="content">
        
        <view  v-if="current === 0">
           <o-empty v-if="isShow" imgSize="400" bg="#f5f5f5"/>
           <toRepair v-show="isShowCtx"></toRepair>
        </view>
        <view v-if="current === 1">
             <o-empty v-if="isShowLoading" imgSize="400" bg="#f5f5f5"/>
             <repLoading v-show="isShowCtx"></repLoading>
        </view>
        <view v-if="current === 2">
            <o-empty v-if="isShowOver" imgSize="400" bg="#f5f5f5"/>
            <repOver :code="code" :index="index" v-show="isShowCtx"></repOver>
        </view>
      </view>
  </view>
</template>

<script>
  export default {
    
    data() {
      return {
        	items: ['待维修', '正在维修', '已维修'],
          current: 0,
          colorIndex: 0,
          activeColor: '#007aff',
          styleType: 'text',
          isShow:'',
          isShowLoading:'',
          isShowOver:'',
          isShowCtx:'',
          toNum:'',//显示待维修角标
          loadingNum:'',//显示正在维修角标
          overNum:'',
          code:500,
          index:0
      };
    },
    onLoad(option) {
       let data = JSON.parse(decodeURIComponent(option.data))
       this.code = data.code
       this.index = data.i
    },
    onShow() {
      this.getData()
    },
    beforeDestroy() {
      uni.$off('getIsShow')
      uni.$off('getLoadingData')
    },
    methods:{
      getData(){
        uni.$on('getIsShow',(data)=>{
             this.isShow = data.isShow
             this.isShowCtx = data.isShowCtx
             this.toNum = data.length
        })
      },
      getLoadingData(){
        uni.$on('getLoadingData',(data)=>{
           this.isShowLoading = data.isShowLoading
           this.isShowCtx = data.isShowCtx
           this.loadingNum = data.length
           
        })
      },
      getOverData(){
        uni.$on('getOverData',(data)=>{
           this.isShowOver = data.isShowOver
           this.isShowCtx = data.isShowCtx
           this.overNum = data.length
         
        })
      },
      onClickItem(e) {
          if(e.currentIndex==0){
            
            this.getData() 
            
          }else if(e.currentIndex ==1){
            
            this.getLoadingData()
            
          }else{
            
            this.getOverData()
      
          }
          if (this.current !== e.currentIndex) {
            this.current = e.currentIndex
          }
        },
    }
  }
</script>

<style lang="scss">
page{
  background-color: #f5f5f5;
} 

 .head_badge{
       position: relative;
       top: 30px;
       width: 100%;
       height: 100%;
       background-color: aqua;
       .uni-badge-todo{
         position: absolute;
         left: 164rpx;
         top: -60rpx;
       }
        .uni-badge-loading{
          position: absolute;
          left: 427rpx;
          top: -60rpx;
        }
        
      .uni-badge-over{
          position: absolute;
          top: -60rpx;
          right: 46rpx;
        }
  }


  
.uni-padding-wrap {
    position: fixed;
    width: 100%;
    border-bottom: 1px solid #ccc;
    background-color: #fff;
  }
  
    
    .content{
      padding: 15px 20px;
      text-align: center;
      span{
        color: #cdcdcd;
      }
    }
</style>
