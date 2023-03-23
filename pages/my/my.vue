<template>
  <view>
    <view class="header" v-if="nickName">
      <view class="header-image">
        <image :src="url" mode="" @click="showBigImg(url)"></image>
      </view>
      <view class="header-nickname">
        <h1>{{nickName}}</h1>
        <span>性别:{{gender==0?"女":"男"}}</span>
        <span>城市:{{country}}</span>
      </view>
    </view>
    
    <view class="header" v-else @click="gotoLogin">
      <view class="header-image">
       <image src="../../static/defual-img/defualImg.jpng.jpeg" mode=""></image>
      </view>
      <view class="header-nickname">
        <h1>请登录!</h1>
      </view>
    </view>
    
   <view class="body">
     <view class="list">
       <ul class="list-item">
         <li class="item" @click='gotoMyCenter'>
           <view class="item-right">
              <uni-icons type="gear" size="20"></uni-icons><span>个人中心</span>
           </view>
         <span><uni-icons type="forward" size="20"></uni-icons></span>
         </li>
         <li class="item" @click='gotoMyFaulte'>
           <view class="item-right">
             <uni-icons type="chat" size="20"></uni-icons><span>我的报修</span>
           </view>
             <span><uni-icons type="forward" size="20"></uni-icons></span>
          </li>
         <li class="item" @click="gotoFankui">
           <view class="item-right">
             <uni-icons type="notification-filled" size="20"></uni-icons><span>评价反馈</span>
           </view>
           <span><uni-icons type="forward" size="20"></uni-icons></span>
          </li>
          <li class='unlogin' @click='unlogin'>
            退出登录
          </li>
       </ul>
     </view>
   </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        nickName:'',
        url:'',
        gender:'',
        country:'',
        refreshIfNeeded: false
      };
    },
    onLoad() {
       this.getUser()
    },
  
    methods:{
      gotoMyCenter(){
           if(!uni.getStorageSync('nickName')){
              uni.showToast({
                icon:'error',
                title:'请先登录'
              })
           }else{
             
             //点击跳转
             uni.navigateTo({
               url:'/pages/PerCenter/PerCenter',
               success:(res)=> {
                 res.eventChannel.emit('func1',{
                   nickName:this.nickName,
                   avatorUrl:this.url,
                   gender:this.gender,
                   country:this.country
                 })
               }
             })
           }
      },
      
      gotoFankui(){
          if(!uni.getStorageSync('nickName')){
             uni.showToast({
               icon:'error',
               title:'请先登录'
             })
          }else{
            
            //点击跳转
            uni.navigateTo({
              url:'/pages/feedBack/feedBack'
            })
          }
      },
      
      gotoMyFaulte(){
         if(!uni.getStorageSync('nickName')){
            uni.showToast({
              icon:'error',
              title:'请先登录'
            })
         }else{
           
           //点击跳转
           uni.navigateTo({
             url:'/pages/myFault/myFault'
           })
           
         }
      },
      
      gotoLogin(){
        uni.reLaunch({
          url:'/pages/login/login'
        })
      },
      
      unlogin(){
         uni.removeStorageSync('nickName')
         var pages = getCurrentPages() //获取所有页面的数组对象
         var currPage = pages[pages.length-1] //当前页
         uni.reLaunch({
           url:currPage.$page.fullPath
         })
      },
    
     async getUser(){
        this.nickName = uni.getStorageSync('nickName')
          const res = await this.$https({
            url:'/userWxInfo',
            method:'POST',
            data:{nickName:this.nickName}
          })
          this.url = res.message.url
          this.gender = res.message.gender
          this.country = res.message.country
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
  .header{
    display: flex;
    align-items: center;
    width:420px;
    height: 200px;
    background: url('../../static/bgk-img/my_bg.jpg') no-repeat;
    background-size:contain;
    .header-image{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-left: 15px;
      border: 2px solid #fff;
      image{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .header-nickname{
      display: flex;
      flex-direction: column;
      margin-left: 15px;
      h1{
        font-size: 20px;
        color: #fff;
        margin-bottom: 20rpx;
      }
      span{
        margin-bottom: 20rpx;
        font-size: 13px;
        color: rgba(242, 250, 245,0.8);
        
      }
    }
  }
  .body{
    .list{
      .list-item{
        color: #333;
        font-weight: 600;
        .unlogin{
          margin-top: 10px;
          padding: 17px 11px;
          background-color: #fff;
          color: #ed5853;
          text-align: center;
        }
        .item{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 17px 11px;
          background-color: #fff;
          .item-right{
            display: flex;
            span{
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
</style>
