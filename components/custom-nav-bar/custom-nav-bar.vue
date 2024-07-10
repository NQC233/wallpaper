<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height: getStatusBarHeight() + 'px'}"></view>
			<view class="titleBar" :style="{height: getTitleBarHeight() + 'px'}">
				<view class="title">{{title}}</view>
				<view class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</view>
			</view>
		</view>
		
		<!-- 填充区，补充被导航栏盖住的横幅部分（因为固定元素会悬浮在普通元素上方的） --> 
		<view class="fill" :style="{height: navBarHeight() + 'px'}">
			
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight, getTitleBarHeight, navBarHeight} from "@/utils/system.js"

defineProps({
	title: {
		type: String,
		default: "壁纸"
		
	}
})
</script>

<style lang="scss" scoped>
.layout{
	.navbar{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		// transparent设置透明属性
		linear-gradient(to bottom, transparent, #fff 400rpx), 
		linear-gradient(to right, #beecd8 20%, #f4e2d8);
		
		.statusBar{

		}
		.titleBar{
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			.title{
				font-size: 45rpx;
				font-weight: 700;
				color: $text-font-color-1;
			}
			.search{
				width: 270rpx;
				height: 45rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				
				.icon{
					margin-left: 5rpx;
				}
				.text{
					padding-left: 10rpx;
					
				}
			}
		}
	}
	.fill{
		
	}
}
</style>