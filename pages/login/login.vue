<template>
	<view class="login-page">
		<view class="title">
            欢迎回来
        </view>
        
        <view class="form-wrap">
            <view class="simple-form-item">
                <view class="label">
                	手机号
                </view>
                <input type="number" placeholder="输入手机号" placeholder-style="font-size: 14px; color: #999;" maxlength="11" focus class="simple-input">
            </view>
            
            <view class="simple-form-item">
            	<view class="label">
            		验证码
            	</view>
            	<input type="number" placeholder="输入验证码" maxlength="6" placeholder-style="font-size: 14px; color: #999;" class="simple-input">
                <view class="end-unit">
                    <view class="send-btn">发送验证码</view>
                </view>
            </view>
            
            <view class="confirm-btn">登录</view>
            
            <view class="note-text" @click="goRegister">前往注册</view>
        </view>
	</view>
</template>

<script>
export default {
    data: {
        focus: false,
        inputValue: ''
    },
    methods: {
        buttonTap: function() {
            this.focus = true;
        },
        KeyInput: function(e) {
            this.inputValue = e.detail.value;
        },
        replaceInput: function(e) {
            var value = e.detail.value;
            var pos = e.detail.cursor;
            if (pos != -1) {
                var left = e.detail.value.slice(0, pos);
                pos = left.replace(/11/g, '2').length;
            }

            return {
                value: value.replace(/11/g, '2'),
                cursor: pos
            };
        },
        goRegister(){
            uni.navigateTo({
            		url: '/pages/register/register'
            });
        }
    }
};
</script>

<style lang="less">
@import './login.less';
</style>
