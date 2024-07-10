// 获取显示设备的信息
const SYSTEM_INFO = uni.getSystemInfoSync();
// 获取设备导航高度
export const getStatusBarHeight = ()=> SYSTEM_INFO.statusBarHeight || 15;

export const getTitleBarHeight = ()=>{
	//判断是否有胶囊按钮部分（小程序有h5没有），若不存在则返回固定的40
	if(uni.getMenuButtonBoundingClientRect){
		let {top, height} = uni.getMenuButtonBoundingClientRect()
		return height + (top - getStatusBarHeight()) * 2
	}else{
		return 40
	}
}

export const navBarHeight = ()=> getStatusBarHeight() + getTitleBarHeight()