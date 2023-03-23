<template>
  <view>
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog mode="input" title="修改姓名" placeholder="请输入姓名" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
    </uni-popup>
    <view class="list">
      <ul class ='list_item'>
        <li class= 'item' @click='updateAvator'>
          <view class="left">
            <span>头像</span>
          </view>
           <view class="right">
             <view class="ctx">
               <image :src="url" mode=""></image>          
             </view>
             <uni-icons type="forward" size="20" color="#b6b6b6"></uni-icons>
           </view>       
        </li>
        <li class= 'item' @click='updateNickName'>
          <view class="left">
            <span>名字</span>
          </view>
           <view class="right">
             <view class="ctx">
               <span>{{nickName}}</span>        
             </view>
             <uni-icons type="forward" size="20"  color="#b6b6b6"></uni-icons>
           </view>      
        </li>
        <li class= 'item' @click='updateGender'>
          <view class="left">
            <span>性别</span>
          </view>
           <view class="right">
             <view class="ctx">
               <span>{{gender==0?'女':'男'}}</span>        
             </view>
             <uni-icons type="forward" size="20"  color="#b6b6b6"></uni-icons>
           </view>      
        </li>
        <li class= 'item' @click='updateCountry'>
          <view class="left">
            <span>城市</span>
          </view>
           <view class="right">
             <view class="ctx">
               <span>{{country}}</span>        
             </view>
             <uni-icons type="forward" size="20"  color="#b6b6b6"></uni-icons>
           </view>      
        </li>
      </ul>
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
      };
    },
    onLoad(option) {
      
      const eventChannel=this.getOpenerEventChannel();
      	eventChannel.on('func1',(obj)=>{
          this.nickName = obj.nickName,
          this.url = obj.avatorUrl,
          this.gender = obj.gender,
          this.country = obj.country
      	})
        
       
    },
    methods:{
      updateAvator(){
       uni.navigateTo({
         url:'/subpkg/updateAvotImg/updateAvotImg',
       })
      },
      
      updateNickName(){
          uni.navigateTo({
            url:'/subpkg/upUsername/upUsername',
          })
      },
      
      updateGender(){
       uni.navigateTo({
          url:'/subpkg/updateGender/updateGender',
       })
      },
      
      updateCountry(){
       uni.navigateTo({
         url:'/subpkg/updateCountry/updateCountry'
       })
      },
    }
  }
</script>

<style lang="scss">
  page{
   background-color: rgb(242, 242, 242)
  }
.list{
  .list_item{
    background-color: #fff;
    .item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        .right{
          margin-right: 25px;
          display: flex;
          align-items: center;
          .ctx{
            margin-right: 15px;
            font-size: 17px;
            color: #939393;
          }
        }
    }
    li{
      width: 100%;
      height: 10%;
      border-bottom: 1px solid rgb(242, 242, 242);
      margin-left: 20px;
      padding: 10px 0px;
      font-size: 13px;
      image{
        width: 60px;
        height: 60px;
        padding-left: 10px;
      }
    }
  }
}
</style>
