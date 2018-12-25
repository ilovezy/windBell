const User = require('./user.js');
// let token = User.getToken()
// let memberType = User.getMemberType()

const CONFIG = {
	apiUrl: 'http://192.168.0.155:9001', // 王延吉本地api
	testPhone: 13575785566,
	clientId: 'wechat_app',
	clientSecret: '123456',

	// memberType: memberType,
	// token: token,

	appVersion: 'V 0.0.1', // app版本号
	showOpenSlider: true, // 是否开启启动页轮播

	// 后台用的版本号
	clientName: 'app-android',
	clientSecret: 'app-android',
	AcceptVersion: '1.0',
	Authorization: '',
	Version: '1.0',
}

module.exports = CONFIG
