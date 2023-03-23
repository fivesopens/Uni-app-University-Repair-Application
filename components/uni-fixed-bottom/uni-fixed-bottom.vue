<template>
  <view>
    <view :style="{paddingTop: paddingTop + 'rpx'}"></view>
    		<view class="uni-fixed-bottom">
    		<slot name="fixed_bottom"></slot>
     </view>
  </view>
</template>

<script>
  export default {
    name:"uni-fixed-bottom",
    props: {
    			paddingTop: {
    				type: String,
    				default: '0'
    			}
    },
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss" scoped>
.uni-fixed-bottom {
		width: 100%;
		bottom: 0upx;
		padding: 20upx;
		position: fixed;
		background: #FFFFFF;
		transform: translateZ(0);
		bottom: env(safe-area-inset-bottom);
		box-shadow: 0rpx -5rpx 14rpx #e3e6e6;
		bottom: constant(safe-area-inset-bottom);
	}
</style>