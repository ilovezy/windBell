const CONFIG = require('./config.js');
const User = require('./user.js');
const Util = require('./util.js')
const LoadingDuration = 300

function POST(apiPath, param, success, fail, complete) {
	request(apiPath, 'POST', param, success, fail, complete);
}

function GET(apiPath, success, fail, complete) {
	request(apiPath, 'GET', param, success, fail, complete);
}

function getPlatformAuth() {
	let platform = uni.getSystemInfoSync().platform

	let btoaObj = {
		android: 'YXBwLWFuZHJvaWQ6YXBwLWFuZHJvaWQ=', // btoa('app-android:app-android')
		ios: 'YXBwLWlvczphcHAtaW9z', // btoa('app-ios:app-ios')
		other: 'YXBwLWg1OmFwcC1oNQ==' // btoa('app-h5:app-h5')
	}

	return btoaObj[platform] || btoaObj.other
}

function request(apiPath, method, param, success, fail, complete) {
	const url = CONFIG.apiUrl + apiPath;
	const data = param;
	// uni.showNavigationBarLoading() // 

	let header = {
		'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', // 默认值
	}
	header.Version = CONFIG.Version
	header['Accept-Version'] = CONFIG.AcceptVersion

	let token = User.getToken() ? (User.getToken() + '') : ''
	if (token && (token.trim().length > 0)) {
        header.Authorization = 'Bearer ' + token
	} else {
        header.Authorization = 'Basic ' + getPlatformAuth()
	}
    
    if(data){
        delete data.noToken
    }

	uni.request({
		url,
		data,
		header,
		method,
		success: function(res) {
			console.log('response: ', res)
			const result = res.data;
			if (result.error) {
				processRequestError(result)
				if (fail) {
					fail()
				}
			} else {
				success(result);
			}
		},
		fail: function(res) {
			const result = res.data;
			Util.simpleToast('网络错误')

			if (typeof fail == "function") {
				fail();
			}
		},
		complete: function() {
			// uni.hideNavigationBarLoading()
			uni.stopPullDownRefresh()

			if (typeof complete == "function") {
				complete();
			}
		}
	});
}

function processRequestError(result) {
	if (result.error == "ERROR_ACCESS_NEED_AUTH") {
		uni.showModal({
			title: '提示',
			content: '请登录',
			showCancel: false,
			success: function(res) {
				if (res.confirm) {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			}
		})

	} else {
		Util.simpleToast(result.errorDescription || '')
	}
}

const UPLOAD = (filePath, path, callback, error, uploadCallback) => {
	let token = User.getToken() ? (User.getToken() + '') : ''
	let uploadTask = uni.uploadFile({
		url: CONFIG.apiUrl + path,
		filePath,
		name: 'file',
		header: {
			'content-type': 'multipart/form-data',
			'Authorization': 'Bearer ' + token
		},
		success: (res) => {
			if (callback) {
				callback(JSON.parse(res.data))
			}
		},
		fail: (res) => {
			if (error) {
				error(JSON.parse(res.data))
			}
		},
		complete(res) {}
	})

}

module.exports = {
	POST: POST,
	GET: GET,
	UPLOAD
}
