<template>
	<view class="preview">
		<swiper :circular="true">
			<swiper-item v-for="item in 5">
				<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>
	
	<view class="mask">
		<!-- 返回箭头 -->
		<view class="goBack">
			
		</view>
		<!-- 图片预览数 -->
		<view class="count">
			
		</view>
		<!-- 时间 -->
		<view class="time">
			
		</view>
		<!-- 日期 -->
		<view class="date">
			
		</view>
		<!-- 底部功能框 -->
		<view class="footer">
			<view class="box">
				<uni-icons type="info" size="28"></uni-icons>
				<view class="text">信息</view>
			</view>
			<view class="box">
				<uni-icons type="star" size="28"></uni-icons>
				<view class="text">5分</view>
			</view>
			<view class="box">
				<uni-icons type="download" size="28"></uni-icons>
				<view class="text">下载</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style lang="scss" scoped>
	.preview{
		width: 100%;
		height: 100vh;
		position: relative;
		swiper{
			width: 100%;
			height: 100%;
			image{
				width: 100%;
				height: 100%; 
			}
		}
		
		.mask{
			.goBack{
				
			}
			.count{
				position: absolute;
				top: 10vh;
				right: 0;
				light: 0;
				margin: auto;
				// 根据内容自适应宽度
				width: fit-content;
				left: 0;
				background: rgba(0,0,0,0.3);
				font-size: 28rpx;
				color: #fff;
				border-radius: 40rpx;
				padding: 8rpx, 28rpx;
			}
			.time{
				
			}
			.date{
				
			}
			.footer{
				
			}
		}
	}
</style>
