<template>
	<view class="homeLayout pageBg">
		
		<!-- 自定义头部导航组件 -->
		<custom-nav-bar title="推荐"></custom-nav-bar>
		
		<!-- 横幅部分 -->
		<view class="banner">
			<!-- ragb最后一个参数代表透明度 -->
			<swiper :indicator-dots="true" indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff" :autoplay="true" :circular="true">
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode=""></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		
		<!-- 公告部分 -->
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper :vertical="true" :autoplay="true" interval="1500" duration="300" :circular="true">
					<swiper-item v-for="item in 3">欢迎访问</swiper-item>
				</swiper>
			</view>
			<view class="right"> 
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
			
		</view>
		
		<!-- 预览壁纸与选择部分 -->
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<view class="content">
				<scroll-view :scroll-x="true">
					<view class="box" @click="goPreview" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>
		</view>
		
		<!-- 专题壁纸部分 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="" class="more">More</navigator>
				</template>
			</common-title>
			
			<view class="content">
				<theme-item v-for="item in 8"></theme-item>
				<theme-item :isMore="true"></theme-item>
			</view>
		</view>
		
		
	</view>
</template>

<script setup>

const goPreview = ()=>{
	uni.navigateTo({
		url:"/pages/preview/preview"
	})
}
</script>

<style lang="scss" scoped>
	.homeLayout{
		.banner{
			width: 750rpx;
			padding: 30rpx 0;
			
			swiper{
				width: 750rpx;
				height: 340rpx;
				
				swiper-item{
					width: 100%;
					height: 100%;
					padding: 0 30rpx;
					
					image{
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}
		
		.notice{
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;
			
			.left{
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				
				.text{
					color: $brand-theme-color;
					font-weight: 600;
					font-size: 28rpx;
				}
			}
			
			.center{
				// 自动占满中间剩余部分
				flex: 1;
				
				swiper{
					height: 100%;
					
					swiper-item{
						height: 100;
						font-size: 30rpx;
						color: #666;
						// 当文字超出滚动条区域时就显示省略号
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
			
			.right{
				width: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		
		.select{
			padding-top: 50rpx;
			
			.date{
				color: $brand-theme-color;
				display: flex;
				align-items: center;
				:deep(){
					.uni-icons{
						color: $brand-theme-color !important;
					}
				}
				
				.text{
					margin-left: 5rpx;
				}
			}
			.content{
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;
				scroll-view{
					// 不进行换行
					white-space: nowrap;
					.box{
						width: 200rpx;
						height: 430rpx;
						display: inline-block;
						margin-right: 15rpx;
						
						image{
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}
					// 使用伪类选择器定位到最后一个块
					.box:last-child{
						margin-right: 30rpx;
					}
				}
			}
			
		}
		
		.theme{
			padding: 50rpx 0;
			.more{
				font-size: 32rpx;
				color: #888;
			}
			
			.content{
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid;
				gap: 15rpx;
				grid-template-columns: repeat(3, 1fr);
			}
		}
	}
</style>
