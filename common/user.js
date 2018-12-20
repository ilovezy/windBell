const setToken = (value) => {
  uni.setStorageSync('windBell-app-token', value)
}

const getToken = () => {
  return uni.getStorageSync('windBell-app-token') || ''
}

const setObj = (obj) => {
    uni.setStorageSync('windBell-app-testObj', obj)
}

const getObj = () => {
    return uni.getStorageSync('windBell-app-testObj') || {}
}

// TODO 不知道是否需要拿这个token去掉一下后台
const isLogined = () => {
  return !!uni.getStorageSync('windBell-app-token')
}

module.exports = {
  getToken,
  setToken,
  isLogined,
}