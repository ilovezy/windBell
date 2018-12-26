<template>
	<view class="userCenter-page">
		<view class="top-container">
			<view class="top-header-container">
        <view v-if="loading" class="loading-placeholder"></view>
        
        <view v-else>
				<view v-if="isLogin" class="is-login">
					<view class="left-wrap">
						<view class="avatar-wrap">
							<image class="avatar-img" :src="avatar" v-if="avatar" mode="widthFix"></image>
							<view class="iconfont icon-tubiao-" v-else></view>
						</view>
					</view>

					<view class="right-wrap">
						<view class="username">{{nickName || ''}}</view>
						<view class="vip-flag">vipFlag: {{vipFlag}}</view>

					</view>
				</view>

				<navigator url="/pages/login/login" v-else class="not-login">
					<view class="left-wrap">
						<view class="avatar-wrap">
							<view class="iconfont icon-tubiao-"></view>
						</view>
					</view>

					<view class="right-wrap">
						<view class="login-btn">登录/注册</view>
					</view>
				</navigator>
        </view>
			</view>
      
			<view class="top-money-bar">
				<view class="money with-right-border">账户余额：<view class="money-unit">￥{{availableCapital || 0}}</view>
				</view>
				<view class="money">风铃币：<view class="money-unit">{{availableCoin || 0}}</view>
				</view>
			</view>
		</view>

		<view class="list-item-wrap">
			<view class="list-item" v-if="isLogin" @click="doLogout">
				<view class="left-part">
					<view class="iconfont icon-chongzhi"></view>
					<view class="list-text">
						退出登录
					</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</view>
			<navigator url="../webView/webView" class="list-item">
				<view class="left-part">
					<view class="iconfont icon-chongzhi"></view>
					<view class="list-text">充值</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</navigator>

			<view class="list-item">
				<view class="left-part">
					<view class="iconfont icon-29"></view>
					<view class="list-text">
						提现
					</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</view>

			<view class="list-item">
				<view class="left-part">
					<view class="iconfont icon-yaoqingjiangli"></view>
					<view class="list-text">
						邀请
					</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</view>
		</view>

		<view class="list-item-wrap">
			<navigator url="help/help" class="list-item">
				<view class="left-part">
					<view class="iconfont icon-bangzhuzhongxin"></view>
					<view class="list-text">
						帮助中心
					</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</navigator>

			<navigator url="suggest/suggest" class="list-item">
				<view class="left-part">
					<view class="iconfont icon-yijianfankui"></view>
					<view class="list-text">意见反馈</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</navigator>

			<navigator url="aboutUs/aboutUs" class="list-item">
				<view class="left-part">
					<view class="iconfont icon-guanyuwomen"></view>
					<view class="list-text">
						关于我们
					</view>
				</view>
				<view class="right-part">
					<view class="iconfont icon-arrow-right_s"></view>
				</view>
			</navigator>
		</view>

		<view class="list-item-wrap">
			<view class="list-item">
				<view class="left-part">
					<view class="iconfont icon-tianqitubiao_qingtianzhou"></view>
					<view class="list-text">
						夜间模式
					</view>
				</view>
				<view class="right-part">
					<view class="body-view">
						<switch @change="toogleBright" color="#607D8B" style="transform: translateX(10%) scale(0.6);" />
					</view>
				</view>
			</view>
			<view class="list-item">
				<view class="left-part">
					<view class="iconfont icon-tianqitubiao_qingtianzhou"></view>
					<view class="list-text">
						夜间模式2
					</view>
				</view>
				<view class="right-part">
					<view class="body-view">
						<switch @change="toogleBright2" style="transform: translateX(10%) scale(0.6);" />
					</view>
				</view>
			</view>
			<view class="list-item" @click="makePhoneCall">
				<view class="left-part">
					<view class="iconfont icon-tianqitubiao_qingtianzhou"></view>
					<view class="list-text">
						uni dialog
					</view>
				</view>
				<view class="right-part">

				</view>
			</view>
			<view class="list-item" @click="openVanDialog">
				<view class="left-part">
					<view class="iconfont icon-tianqitubiao_qingtianzhou"></view>
					<view class="list-text">
						van dialog
					</view>
				</view>
				<view class="right-part">
				</view>
			</view>

			<slider min="0" max="1" :value="lightness" step="0.05" backgroundColor="#f5f5f5" activeColor="#769DAC" block-size="20"
			 @changing="changeLightNess" @change="changeLightNess" />
		</view>

		<van-dialog id="van-dialog" :show="showVanDialog" @close="closeVanDialog" title="test" message="hello wrodfjofasj 及大家搜覅到沙发解放东鞍山佛" />

	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	import uniIcon from '@/components/uni-icon.vue';
	import _ from '@/common/underscore.js';
	import user from '@/common/user.js';
import ccLoading from '@/components/cc-loading.vue';
	export default {
		components: {
			uniLoadMore,
			uniIcon,
      ccLoading
		},
		data() {
			return {
				// userInfo
				nickName: '',
				vipFlag: false,
				availableCapital: 0,
				availableCoin: 0,
				avatar: '',
				isLogin: false,
				lightness: 0, // 亮度
				showVanDialog: false,
        loading: true,
			};
		},

		computed: {

		},

		onShow: function() {
			this.setIsLogin()
		},

		methods: {
			setIsLogin() {
				this.isLogin = this.USER.isLogined()
				if (this.USER.isLogined()) {
					this.getDetail();
				} else {
          this.loading = false
        }
			},
			doLogout() {
				const self = this;
				uni.showModal({
					title: '提示',
					content: '确定要退出登录吗',
					success: function(res) {
						if (res.confirm) {
							self.USER.doLogout()
							self.setIsLogin()
						}
					}
				});
			},
			getDetail() {
				const self = this;
				this.AXIOS.POST('/a/mbr/center', {}, res => {
					const data = res.result || {};
					self.nickName = 'fddaf' || data.nickName || '';
					self.vipFlag = data.vipFlag || false;
					self.availableCapital = data.availableCapital || 0;
					self.availableCoin = data.availableCoin || 0;
					self.avatar = data.avatar || '';
					console.log(self.$data)
          self.loading = false
				});
			},
			// 改变亮度
			changeLightNess(e) {
				const {
					value
				} = e.target;
				let temp = 0 + value.toFixed(2);
				if (typeof value === 'number') {
					this.lightness = value;
					plus.screen.setBrightness(value);
					//
					//                 uni.setScreenBrightness({ value, success: function() {
					//                         plus.nativeUI.alert(value)
					//                     } });
				}
			},
			openVanDialog() {
				this.showVanDialog = true;
			},
			closeVanDialog() {
				this.showVanDialog = false;
			},
			makePhoneCall() {
				uni.showModal({
					title: '提示',
					content: '这是一个模态弹窗',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			toogleBright: function(e) {
				try {
					//                 uni.setScreenBrightness({
					//                     value: 0.5,
					//                     success: function() {
					//                         console.log('success');
					//                     }
					//                 });
					//
					uni.getScreenBrightness({
						success: function(res) {
							uni.showModal({
								title: '提示',
								content: '屏幕亮度值：' + res.value,
								success: function(res) {
									if (res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
							console.log('屏幕亮度值：' + res.value);
						}
					});
				} catch (e) {
					uni.showModal({
						title: '提示',
						content: JSON.stringify(e),
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			toogleBright2: function(e) {
				try {
					uni.setScreenBrightness({
						value: e.detail.value ? 0.5 : 1,
						success: function() {
							console.log('success');
						}
					});
				} catch (e) {
					uni.showModal({
						title: '提示',
						content: JSON.stringify(e),
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			updateMoney: _.debounce(
				function() {
					this.money++;
				},
				1000,
				true
			),
			testImg() {
				uni.chooseImage({
					count: 6,
					sizeType: ['original', 'compressed'],
					sourceType: ['album'],
					success: function(res) {
						// 预览图片
						uni.previewImage({
							urls: res.tempFilePaths
						});
					}
				});
			}
		}
	};
</script>

<style lang="less">
	@import './userCenter.less';
</style>
