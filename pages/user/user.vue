<template>
	<view class="userLayout pageBg">
		<view class="userInfo">
			<view class="avatar">
				 <image src="../../static/images/user.jpeg"></image>
			</view>
			
			<view class="nickname">未登录</view>
			<view class="address">IP属地：未知</view>
		</view>
		
		<view class="section">
			<view class="list">
				
				<!-- 下载部分 -->
				<view @click="navigateTo('../classlist/classlist')" class="row">
					<view class="left">
						<uni-icons type="download-filled" size="20"></uni-icons>
						<view class="text">我的下载</view>
					</view>
					
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<!-- 评分部分 -->
				<view @click="navigateTo('../classlist/classlist')" class="row">
					<view class="left">
						<uni-icons type="star-filled" size="20"></uni-icons>
						<view class="text">我的评分</view>
					</view>
					
					<view class="right">
						<view class="text">33</view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<!-- 联系客服部分 -->
				<view class="row">
					<view class="left">
						<uni-icons type="chatboxes-filled" size="20"></uni-icons>
						<view class="text">联系客服</view>
					</view>
					
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
		
		<view class="section">
			<view class="list">
				
				<!-- 更新订阅 -->
				<view class="row">
					<view class="left">
						<uni-icons type="notification-filled" size="20"></uni-icons>
						<view class="text">更新订阅</view>
					</view>
					
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
				
				<!-- 设置 -->
				<view class="row">
					<view class="left">
						<uni-icons type="gear-filled" size="20"></uni-icons>
						<view class="text">设置</view>
					</view>
					
					<view class="right">
						<view class="text"></view>
						<uni-icons type="right" size="20" color="#aaa"></uni-icons>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
function navigateTo(url) {
	uni.navigateTo({
		url: url
	})
}
</script>

<style lang="scss">
	.userLayout{
		.userInfo{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			padding: 50rpx 0;
			
			.avatar{
				 width: 160rpx;
				 height: 160rpx;
				 border-radius: 50%;
				 overflow: hidden; 
				 
				 image{
					 width: 100%;
					 height: 100% ;
				 }
			}
			
			.nickname{
				font-size: 44rpx;
				color: #bbb;
				padding: 20rpx 0 5rpx;
			}
			
			.address{
				font-size: 28rpx;
				color: #aaa;
			}
		}
		
		.section{
			width: 690rpx;
			margin: 50rpx auto;
			border: 1px solid #eee;
			border-radius: 10rpx;
			box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);
			
			.list{
				.row{
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					border-bottom: 1px solid #eee;
					background: #fff;
					
					// 让最后一行元素没有重复的底部
					.row:last-child{
						border-bottom: 0 ;
					}
					
					.right{
						display: flex;
						align-items: center;
						
						.text{
							font-size:  20rpx;
							color: #aaa;
						}
					}
					
					.left{
						display: flex;
						align-items: center;
						
						:deep(){
							.uni-icons{
								color: $brand-theme-color !important;
							}
						}
						.text{
							color: #666;
							padding-left: 20rpx;
						}
					}
				}
			}
		}
	}
</style>
