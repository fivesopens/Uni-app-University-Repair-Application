<template>
	<view>
		<view class="box">
			<view class="head">
				<view class="title">
					{{title}}
				</view>
			</view>
			<view class="content">
				<view class="item">
					<view class="vo" v-for="(item,index) of list" :key="index">
						<view class="del">
							<image :src="item">
								<text class="iconfont icon-shanchu index_bj" @click="del(index)"></text>
							</image>
						</view>
					</view>
					<view class="img" @click="add()">
						<text class="iconfont icon-shangchuan"></text>
					</view>
				</view>
			</view>
			<view class="bottom">
				<view><text class="iconfont icon-guanyu"></text>最多可添加{{maxNum}}张</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['title','list','maxNum'],
		data() {
			return {
			}
		},
		methods: {
			/**
			 * 传递删除下标到父页面
			 */
			del(index){
					this.$emit("del",{
						index:index
					});
			},
			/**
			 * 添加图片
			 */
			add() {
				if((this.list.length+1)>this.maxNum){
					uni.showToast({
						title:'上传数已达到限制',
						icon:'none'
					})
					return true;
				}
				uni.chooseImage({
					count: this.maxNum,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						this.$emit("files",tempFilePaths);
					}
				});
			},
		}
	}
</script>

<style lang="scss">
	.box {
		width: 90%;
		margin: auto;
		background-color: #ffffff;
		.head {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.title {
				font-size: 25rpx;
				color: #666666;
			}
		}
		.content {
			border-bottom: 1rpx solid #f4f4f4;
			padding: 35rpx 0;
			.item {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				margin-right: 10rpx;
				.vo{
					flex: 1 25%;
					
				}
				.img {
					display: flex;
					align-items: center;
					width: 160rpx;
					height: 160rpx;
				
					.iconfont {
						color: #ebebeb;
						font-size: 165rpx;
					
					}
				}
			}
			.del{
				display: flex;
				position: relative;
				width: 160rpx;
				height: 160rpx;
				margin-bottom: 10px;
				.index_bj {
					position: absolute;
					top:-20rpx;
					right: -10rpx;
					color: #ffffff;
					width: 40rpx;
					height: 40rpx;
					line-height: 40rpx;
					text-align: center;
					border-radius: 50%;
					font-size: 20rpx;
					background-color: #020307;
				}
			}
			image {
				width: 160rpx;
				height: 160rpx;
				border: 2rpx solid #f4f4f4;
			
			}
		}
		.bottom {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10rpx;
			font-size: 25rpx;
			.iconfont{
				font-size: 25rpx;
				margin-right: 5rpx;
			}
		}
	}

	
</style>
