<template>
	<view class="userCenter-page">
        <view class="top-container">
            <view class="left-wrap">
                <view class="avatar-wrap">
                    <image class="avatar-img" :src="avatar" v-if="avatar" mode="widthFix"></image>
                    <view class="iconfont icon-tubiao-" v-else></view>
                </view>
            </view>
            
            <view class="right-wrap">
                <view class="username">{{name || ''}}</view>
                <view class="money">账户余额：<view class="money-unit">￥{{money || 0}}</view></view>
            </view>       
        </view>
        
        <view class="list-item-wrap">
            <view class="list-item ripple">
                <view class="left-part">
                    <view class="iconfont icon-chongzhi"></view>
                    <view class="list-text">
                        充值
                    </view>
                </view>
                <view class="right-part">
                    <view class="iconfont icon-arrow-right_s"></view>
                </view>
            </view>
            
            <view class="list-item ripple">
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
            
            <view class="list-item ripple">
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
            <view class="list-item ripple">
            	<view class="left-part">
            		<view class="iconfont icon-bangzhuzhongxin"></view>
            		<view class="list-text">
            			帮助中心
            		</view>
            	</view>
            	<view class="right-part">
            		<view class="iconfont icon-arrow-right_s"></view>
            	</view>
            </view>
            
            <view class="list-item ripple">
            	<view class="left-part">
            		<view class="iconfont icon-yijianfankui"></view>
            		<view class="list-text">意见反馈</view>
            	</view>
            	<view class="right-part">
            		<view class="iconfont icon-arrow-right_s"></view>
            	</view>
            </view>
            
            <view class="list-item ripple" @click="updateMoney">
            	<view class="left-part">
            		<view class="iconfont icon-guanyuwomen"></view>
            		<view class="list-text">
            			关于我们
            		</view>
            	</view>
            	<view class="right-part">
            		<view class="iconfont icon-arrow-right_s"></view>
            	</view>
            </view>
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
                      <switch @change="toogleBright" style="transform: translateX(10%) scale(0.6);" />
                  </view>
        			</view>
        		</view>
        </view>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more.vue';
import uniIcon from '@/components/uni-icon.vue';
import _ from '../../common/underscore.js';

export default {
    components: { uniLoadMore, uniIcon },
    data() {
        return {
            // avatar: '../../static/app-logo.png',
            avatar: '',
            name: '放假哦爱的',
            money: 1000
        };
    },

    updated() {},

    created() {
        const self = this;
        uni.getSystemInfo({
            success: function(res) {
                self.text = JSON.stringify(res, '', 4);
                console.log(res.model);
                console.log(res.pixelRatio);
                console.log(res.windowWidth);
                console.log(res.windowHeight);
                console.log(res.language);
                console.log(res.version);
                console.log(res.platform);
            }
        });
    },

    methods: {
        toogleBright: function(e) {
            uni.setScreenBrightness({
                value: e.detail.value ? 0.5 : 1,
                success: function() {
                    console.log('success');
                }
            });
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
