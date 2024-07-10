<template>
	<view class="preview">
		<swiper :circular="true">
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-show="maskState">
			<!-- 返回箭头通过引入设备安全区的高度防止返回箭头触顶 -->
			<view class="goBack" @click="goBack" :style="{top: getStatusBarHeight() + 'px'}">
				<uni-icons type="left" color="#fff" size="20"></uni-icons>
			</view>
			<!-- 图片预览数 -->
			<view class="count">
				3/9
			</view>
			<!-- 时间 -->
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<!-- 日期 -->
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<!-- 底部功能框 -->
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons  type="info" size="23"></uni-icons>
					<view class="text">信息</view>
				</view>
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="23"></uni-icons>
					<view class="text">5分</view>
				</view>
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<!-- 弹出框设置 -->
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<!-- 设置一个空盒子使得三个部分能够平均分布 -->
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="closePopup">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				 
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="lable">壁纸ID：</view>
							<text :selectable="true" class="value">21379144dfa</text>
						</view>
						
						<view class="row">
							<view class="lable">分类：</view>
							<text class="value">明星美女</text>
						</view>
						
						<view class="row">
							<view class="lable">发布者：</view>
							<view class="value class">美女</view>
						</view>
						
						<view class="row">
							<view class="lable">评分：</view>
							<view class="value rateBox">
								<uni-rate :readonly="true" :touchable="true" value="3" size="16"/>
								<text class="score">5分</text>
							</view>
						</view>
						
						<view class="row">
							<view class="lable">摘要：</view>
							<view class="value">
							摘要部分内容填充， 摘要部分内容填充
							摘要部分内容填充，摘要部分内容填充，摘要部分内容填充
							</view>
						</view>
						
						<view class="row">
							<view class="lable">标签：</view>
							<view class="value tabs">
								<view class="tab" v-for="item in 3"> 标签名</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<!-- 该属性作用是评分时点击空白部分不会关闭弹窗 -->
		<uni-popup ref="scorePopup" :is-mask-click="false">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="closeScore">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				<view class="content">
					<uni-rate v-model="userScore" :allow-half="true"/>
					<text class="text">{{userScore}}分</text>
				</view>
				
				<view class="footer">
					<!-- 保证用户没有选择评分时不能点击确认，保证最低分为半星 -->
					<button @click="submitScore" :disabled="!userScore" type="default" size="mini" :plain="true">确认评分</button>
				</view>
			</view>
		</uni-popup>
	</view>
	
</template>

<script setup>
import { ref } from 'vue';
import { getStatusBarHeight } from '../../utils/system';

const maskState = ref(true);
const infoPopup = ref(null);
const scorePopup = ref(null);
const userScore = ref(0);

// 点击改变遮罩状态
const maskChange = ()=>{
	maskState.value = !maskState.value;
}

// 点击遮罩出弹窗
const clickInfo = ()=>{
	infoPopup.value.open();
}
// 点击关闭， 点击空白部分默认关闭
const closePopup = ()=>{
	infoPopup.value.close();
}

// 评分弹窗
const clickScore = ()=>{
	scorePopup.value.open();
}
// 关闭评分弹窗
const closeScore = ()=>{
	scorePopup.value.close();
}

// 确认评分
const submitscore = ()=>{
	console.log("已经评分")
}

// 返回
const goback = ()=>{
	uni.navigateBack()
}
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
			// 使用该语法规定mask的子元素公共属性避免冗余，而孙子元素不具备该属性
			&>view{
				position: absolute;
				left: 0;
				right: 0;
				margin: auto;
				color: #fff;
				// 表示宽度自适应文本长度
				width: fit-content;
			}
			.goBack{
				width: 38px;
				height: 38px;
				background: rgba(0,0,0,0.5);
				left: 30rpx;
				margin-left: 0;
				border-radius: 100px;
				top: 0;
				backdrop-filter: blur(10rpx);
				border: 1rpx solid rgba(255, 255, 255, 0.3);
				
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.count{
				top: 10vh;
				background: rgba(0,0,0,0.3); 
				font-size: 28rpx;
				border-radius: 40rpx;
				padding: 8rpx 28rpx;
				backdrop-filter: blur(10rpx);
			}
			.time{
				font-size: 140rpx;
				// 使用calc进行运算高度 
				top: calc(10vh + 80rpx);
				font-size: 100;
				line-height: 1em;
				text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
			}
			.date{
				font-size: 34rpx;
				top: calc(10vh + 230rpx);
				text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
				
			}
			.footer{
				background: rgba(255, 255, 255, 0.8);
				bottom: 10vh;
				width: 65vw;
				height: 120rpx;
				border-radius: 120rpx;
				color: #000;
				display: flex;
				align-items: center;
				justify-content: space-around;
				box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
				backdrop-filter: blur(20rpx);
				
				.box{
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 2rpx 12rpx;
					
					
					.text{
						font-size: 26rpx;
						color: $text-font-color-2;
					}
				}
			}
		}
		
		// 该部分为详细信息、评分弹窗头部共有部分直接提出来
		.popHeader{
			display: flex;
			justify-content: space-between; 
			align-items: center;
			
			.tiele{
				color: $text-font-color-2;
				font-size: 26rpx;
			}
			
			.close{
				padding: 6rpx;
			}
		}
		
		.infoPopup{
			background: #fff;
			padding: 30rpx;
			border-radius: 30rpx 30rpx 0 0;
			overflow: hidden;
			
			
			
			scroll-view{
				max-height: 60vh;
				.content{
					.row{
						display: flex;
						padding: 16rpx 0;
						font-size: 32rpx;
						line-height: 1.7em;
						
						.lable{
							color: $text-font-color-3;
							width: 140rpx;
							text-align: right;
							font-size: 30rpx;
						}
						
						.value{
							flex: 1;
							width: 0;
						}
						
						.rateBox{
							display: flex;
							align-items: center;
							
							.score{
								font-size: 26rpx;
								padding: 10rpx;
								color: $text-font-color-3;
							}
						}
						
						.tabs{
							display: flex;
							flex-wrap: wrap;
							
							.tab{
								border: 1px solid $brand-theme-color;
								color: $brand-theme-color;
								font-size: 22rpx;
								padding: 10rpx 30rpx;
								border-radius: 40rpx;
								line-height: 1em;
								margin: 0 10rpx 10rpx 0;
							}
						}
						
						.class{
							color: $brand-theme-color;
						}
					}
				}
			}
		}
		
		.scorePopup{
			background: #fff;
			padding: 30rpx;
			width: 70vw;
			border-radius: 30rpx;
			.content{
				padding: 30rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
				
				.text{
					color: #ffca3e;
					padding-left: 10rpx;
					width: 80rpx;
					line-height: 1em;
					text-align: right;
				}
			}
			
			.footer{
				padding: 10rpx 0;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
