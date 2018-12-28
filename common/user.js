const stoPrefix = 'windBell-'
const setToken = (value) => {
	uni.setStorageSync(stoPrefix + 'token', value)
}

const getToken = () => {
	return uni.getStorageSync(stoPrefix + 'token') || ''
}

const setReadSlider = () => {
  uni.setStorageSync(stoPrefix + 'read-slider', 'yes')
}
const hasReadSlider = () => {
	return uni.getStorageSync(stoPrefix + 'read-slider') == 'yes'
}
const clearReadSlider = () => {
  uni.removeStorageSync(stoPrefix + 'read-slider');
}

const setObj = (obj) => {
	uni.setStorageSync(stoPrefix + 'testObj', obj)
}

const getObj = () => {
	return uni.getStorageSync(stoPrefix + 'testObj') || {}
}

// TODO 不知道是否需要拿这个token去掉一下后台
const isLogined = () => {
	return !!uni.getStorageSync(stoPrefix + 'token')
}

const doLogout = () => {
  uni.removeStorageSync(stoPrefix + 'token')
}

// 设置阅读的基本配置
const setFontSize = (str) => {
    uni.setStorageSync(stoPrefix + 'read-font-size', str)
}

const getFontSize = () => {
	return uni.getStorageSync(stoPrefix + 'read-font-size') || '14'
}
const setTheme = (str) => {
    uni.setStorageSync(stoPrefix + 'read-theme', str)
}

const getTheme = () => {
	return uni.getStorageSync(stoPrefix + 'read-theme') || '14'
}
module.exports = {
	getToken,
	setToken,
	isLogined,
  setReadSlider,
  hasReadSlider,
  clearReadSlider,
  doLogout,setFontSize,getFontSize,setTheme,getTheme
}
