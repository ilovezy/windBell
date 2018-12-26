<template>
	<view class="login-page">
      <view class="title">
          登陆
      </view>
      
      <view class="form-wrap">
          <view class="simple-form-item">
              <view class="label">
                手机号
              </view>
              <input type="number" v-model="mobile" placeholder="输入手机号" placeholder-style="font-size: 14px; color: #999;" maxlength="11" focus class="simple-input">
          </view>
          
          <view class="simple-form-item">
            <view class="label">
              验证码
            </view>
            <input type="number" v-model="captchaContent" placeholder="输入验证码" maxlength="6" placeholder-style="font-size: 14px; color: #999;" class="simple-input">
              <view class="end-unit">
                  <view class="send-btn disabled"
                        v-if="mobile.length !== 11 && !sendCodeStart">获取验证码
                  </view>
                  <view class="send-btn" v-else>
                      <cc-sendcode  v-model="sendCodeStart"
                                @click="sendCode"
                                :second="second"
                                type="warning"></cc-sendcode>
                  </view>
              </view>
          </view>
          
          <view class="confirm-btn" @click="doConfirm">登陆</view>
          
          <view class="note-text">
              <navigator class="note-link" url="/pages/register/register">
                  前往注册
              </navigator>
          </view>
      </view>
      
      <cc-toast :show="toastVisible" type="middle" :msg="toastText"></cc-toast>
	</view>
</template>

<script>
import ccSendcode from '@/components/cc-sendcode.vue';
import ccToast from '@/components/cc-toast.vue';

export default {
    components: {
        ccSendcode,
        ccToast
    },
    data: {
        mobile: 18768143328,
        captchaCode: '', // 验证码code
        captchaContent: '', // 正式验证码
        inviteCode: '',

        sendCodeStart: false,
        second: 60,
        toastVisible: false,
        toastText: ''
    },
    computed: {
        btnDisabled() {
            return isNaN(this.mobile) || this.mobile.length !== 11;
        }
    },
    methods: {
        /**
         * 获取验证码 & 验证
         */
        simpleAlert(str) {
          // plus.nativeUI.toast(str);
            // plus.nativeUI.alert(str);
            this.toastText = str;
            this.toastVisible = true;
            setTimeout(() => {
                this.toastText = '';
                this.toastVisible = false;
            }, 1500);
        },

        sendCode() {
            if (!this.sendCodeStart) {
                if (!this.mobile) {
                    this.simpleAlert('请输入手机号');
                } else if (!this.UTIL.isValidPhone(this.mobile)) {
                    this.simpleAlert('请输入正确的手机号');
                } else {
                    this.sendSmsCode();
                }
            }
        },

        showToast(text) {
            this.toastVisible = true;
            this.toastText = text;
        },
        sendSmsCode() {
            const self = this;
            this.AXIOS.POST(
                '/s/msg/mbr/login',
                {
                    mobile: self.mobile,
                    noToken: true
                },
                res => {
                    uni.showToast({
                        icon: 'success',
                        title: '发送成功'
                    });
                    self.sendCodeStart = true;
                    self.captchaCode = res.result || '';
                }
            );
        },

        validForm() {
            if (!this.UTIL.isValidPhone(this.mobile)) {
                this.simpleAlert('请输入正确的手机号码');
                return false;
            }
            if (!this.captchaCode) {
                this.simpleAlert('请先获取验证码');
                return false;
            }
            if (!this.UTIL.isValidSmsCode(this.captchaContent)) {
                this.simpleAlert('验证码不正确');
                return false;
            }
            return true;
        },

        doConfirm() {
            const self = this;

            if (this.validForm()) {
                this.AXIOS.POST(
                    '/s/mbr/login',
                    {
                        noToken: true,
                        mobile: this.mobile,
                        captchaCode: this.captchaCode,
                        captchaContent: this.captchaContent
                        // inviteCode: this.inviteCode,
                        // traceNo: '',
                        // traceSource: '',
                    },
                    res => {
                        if (res.result) {
                            self.USER.setToken(res.result);
                            uni.showToast({
                                icon: 'none',
                                title: '登陆成功'
                            });
                            setTimeout(() => {
                                uni.switchTab({
                                	url: '/pages/userCenter/userCenter'
                                })
                            }, 1000);
                        }
                    }
                );
            }
        }
    }
};
</script>

<style lang="less">
@import './login.less';
</style>
