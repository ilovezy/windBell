const setToken = (value) => {
	uni.setStorageSync('windBell-token', value)
}

const getToken = () => {
	return uni.getStorageSync('windBell-token') || ''
}

const setReadSlider = () => {
  uni.setStorageSync('windBell-read-slider', 'yes')
}
const hasReadSlider = () => {
	return uni.getStorageSync('windBell-read-slider') == 'yes'
}
const clearReadSlider = () => {
  uni.removeStorageSync('windBell-read-slider');
}

const setObj = (obj) => {
	uni.setStorageSync('windBell-testObj', obj)
}

const getObj = () => {
	return uni.getStorageSync('windBell-testObj') || {}
}

// TODO 不知道是否需要拿这个token去掉一下后台
const isLogined = () => {
	return !!uni.getStorageSync('windBell-token')
}

module.exports = {
	getToken,
	setToken,
	isLogined,
  setReadSlider,
  hasReadSlider,
  clearReadSlider,
}
