<template>
	<view class="register-page">
		<view class="title">
            注册
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
            	<input type="number" placeholder="输入验证码" maxlength="6" placeholder-style="font-size: 14px; color: #999;" class="simple-input">
                <view class="end-unit">
                    <!-- <view class="send-btn" @click="sendSmsCode">发送验证码</view> -->
                    
                    <view class="send-btn disabled"
                          v-if="mobile.length !== 11">获取验证码
                    </view>
                    <view class="send-btn" v-else>
                      <cc-sendcode  v-model="sendCodeStart"
                                  @click="sendCode"
                                  :second="second"
                                  type="warning"></cc-sendcode>
                    </view>
                </view>
            </view>
            
            <view class="confirm-btn">注册</view>
        </view>
        
        <cc-toast :show="toastVisible" type="middle" :msg="toastText"></cc-toast>
	</view>
</template>

<script>
import ccSendcode from '@/components/cc-sendcode.vue';
import ccToast from "@/components/cc-toast.vue"

export default {
    components: {
        ccSendcode,ccToast
    },
    data: {
        mobile: 18768143328,
        code: '', // 验证码code
        captcha: '', // 正式验证码
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
        sendCode() {
            //             if (!this.mobile) {
            //                 this.$dialog.toast({ mes: '请输入注册手机号' });
            //             } else if (!isValidPhone(this.mobile)) {
            //                 this.$dialog.toast({ mes: '请输入正确的手机号码' });
            //             } else {
            //                 this.sendSmsCode();
            //             }
            //             plus.nativeUI.alert('test');
            //
            this.sendSmsCode();
        },

        showToast(text){
           this.toastVisible = true
           this.toastText = text
        },
        sendSmsCode() {
            const self = this;
            this.showToast('验证码发送中...');
            // self.$dialog.loading.open('验证码发送中...');
            this.axios.POST(
                '/s/msg/mbr/reg',
                {
                    mobile: self.mobile,
                    noToken: true
                },
                res => {
                    uni.showToast({
                        icon: 'success',
                        title: '验证码发送成功'
                    });
                    // self.$dialog.toast({ mes: '验证码发送成功' });
                    self.sendCodeStart = true;
                    self.code = res;
                }
            );
        },
        // sendSmsCode() {
        //             this.axios.POST(
        //                 '/s/msg/mbr/reg',
        //                 {
        //                     mobile: this.mobile,
        //                     noToken: true
        //                 },
        //                 res => {
        //                     uni.showModal({
        //                         title: '提示',
        //                         content: JSON.stringify(res),
        //                         success: function(res) {}
        //                     });
        //                 }
        //             );
        //         },

        validForm() {
            if (!isValidPhone(this.mobile)) {
                this.$dialog.toast({ mes: '请输入正确的手机号码' });
                return false;
            }
            if (!this.code) {
                this.$dialog.toast({ mes: '请先获取验证码' });
                return false;
            }
            if (!isValidSmsCode(this.captcha)) {
                this.$dialog.toast({ mes: '验证码不正确' });
                return false;
            }
            return true;
        },

        doLogin() {
            const self = this;

            if (this.validForm()) {
                this.$dialog.loading.open('正在登录...');
                AXIOS.post('/security/token', {
                    mobile: this.mobile,
                    code: this.code,
                    captcha: this.captcha
                }).then(res => {
                    if (res.token) {
                        USER.setToken(res.token);
                        this.$dialog.toast({ mes: '登录成功' });
                        setTimeout(() => {
                            self.$router.replace({ path: '/' });
                        }, 1000);
                    }
                });
            }
        }
    }
};
</script>

<style lang="less">
@import './register.less';
</style>
