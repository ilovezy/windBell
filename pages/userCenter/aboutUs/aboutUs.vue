<template>
	<view class="aboutUs-page">
        <image src="../../../static/app-logo.png" mode="scaleToFill" class="logo"></image>
        <view class="name">风铃阅读</view>
        <view class="version" v-if="version">{{version}}</view>
        
        <view class="bottom-info">
            <view class="bottom-item">
                <view>微博：@风铃阅读</view>
                <view>QQ群：438265554</view>
            </view>
           <view class="bottom-item">
           	<view>邮箱：1518265553@qq.com</view>
           	<view>微信：18768143329</view>
           </view>
           
        </view>
	</view>
</template>

<script>
import config from '@/common/config.js';
export default {
    data() {
        return {
            version: config.version
        };
    }
};
</script>

<style lang="less">
.aboutUs-page {
    text-align: center;
    padding-top: 100px;
    .logo {
        width: 80px;
        height: 80px;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .name {
        font-size: 16px;
        color: #666;
    }
    .version {
        font-size: 14px;
        color: #999;
    }
    
    .bottom-info {
        padding: 30px 15px;
        position: fixed;
        bottom: 0;
        width: 100%;
        box-sizing: border-box;
        // padding: 150px 30px 0;
        font-size: 12px;
        color: #999;
    }
    .bottom-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 10px;
    }
}
</style>
