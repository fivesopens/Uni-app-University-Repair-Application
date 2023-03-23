<template>
  <view>
    <view class="uni-margin-wrap">
    			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
    				<swiper-item v-for="(item,i) in swiperList" :key="i">
               <view class="swiper-item">
                 <image :src="item"></image>
               </view>
    				</swiper-item>
    			</swiper>
    		</view>
        
    <view class="container">
      <view class="left" @click="gotoMyFault">
        <h1>我的报修</h1>
        <h2>报修记录 快速查询</h2>
        <uni-icons class='left-icon' type="calendar-filled" size="60" color="rgb(223,246,237)"></uni-icons>
      </view>
      <view class="right" @click="gotoFault">
        <uni-icons class='right-icon' type="gear-filled" color="rgb(223,246,237)" size="100"></uni-icons>
        <h1>开始报修</h1>
      </view>
    </view>
    
    <view class="new-state" @click="showIntroduce">
      <view class="top">
        <h1>最新动态</h1>
      </view>
      
      <view class="state-container">
        <view class="left-img">
        <image src="../../static/product-img/veer-377753533.jpg" mode="scaleToFill"></image>
        </view>
        <view class="right-text">
          <h1>小程序介绍</h1>
          <span>通知公告 点击查看</span>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        swiperList:[],
			}
		},
    onLoad() {
      this.showBanner()
    },
		methods: {
      //点击跳转到我的报修界面
      gotoMyFault(){
        if(!uni.getStorageSync('nickName')){
           uni.showToast({
             icon:'error',
             title:'请先登录'
           })
           
          setTimeout(()=>{
            uni.navigateTo({
               url:'/pages/login/login'
             })
          },2000) 
          
        }else{
          
          //点击跳转
          uni.navigateTo({
            url:'/pages/myFault/myFault'
          })
        }
        
      },
      //点击跳转到报修界面
      gotoFault(){
        
        if(!uni.getStorageSync('nickName')){
           uni.showToast({
             icon:'error',
             title:'请先登录'
           })
           
          setTimeout(()=>{
            uni.navigateTo({
               url:'/pages/login/login'
             })
          },2000) 
           
        }else{
          //点击跳转
          uni.navigateTo({
            url:'/pages/regFault/regFault'
          })
        }
        
      },
      //点击查看产品介绍
      showIntroduce(){
        //点击查看
        uni.navigateTo({
          url:'../../subpkg/introdiction/introdiction',
        })
      },
      
      //请求轮播图
      async showBanner(){
        const res = await this.$https({
          url:'/wxShow',
        })
         this.swiperList = res.url
      }
		}
	}
</script>

<style lang="scss">
  .uni-margin-wrap {
  		width: 690rpx;
  		width: 100%;
      .swiper {
      	height: 300rpx;
        .swiper-item {
        	display: block;
        	height: 300rpx;
        	line-height: 300rpx;
        	text-align: center;
          image{
           width: 100%;
           height: 100%;
          }
        }
      }
  }
 .container{
    background-color: #fff;
    display:flex;
    .left{
      position: relative;
      width: 200px;
      height: 150px;
      background-color:rgb(123,216,168);
      border-radius: 5px;
      margin: 20px 4px 20px 10px;
      h1{
        color: #fff;
        font-size: 20px;
        margin-left: 15px;
        margin-top: 20px;
      }
      h2{
        color: #fff;
        font-size: 15px;
        margin-left: 15px;
        margin-top: 10px;
      }
      .left-icon{
        position: absolute;
        bottom: 5px;
        right:5px;
      }
    }
    .right{
      width: 200px;
      height: 150px;
      background-color:rgb(101,195,243);
      border-radius: 5px;
      margin: 20px 10px 20px 4px;
      text-align: center;
      h1{
        color: #fff;
        font-size: 25px;
      }
    }
 }
 .new-state{
   margin-top: 10px;
   padding-bottom: 15px;
   padding-top: 5px;
   background-color: #fff;
   .top{
     margin-top: 10px;
     h1{
       font-size: 25px;
       margin-left: 10px;
     }
   }
   .state-container{
     display: flex;
     .left-img{
       width: 150px;
       height: 100px;
       margin-left: 10px;
       margin-top: 10px;
       
       image{
         width: 100%;
         height: 100%;
         border-radius: 5px;
       }
     }
     .right-text{
       margin-left: 20px;
       margin-top: 10px;
       h1{
         font-size: 20px;
       }
       span{
         display: inline-block;
         margin-top: 15px;
         color: #ccc;
       }
     }
   }
 }
</style>
