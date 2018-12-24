<template>
	<view class="book-detail-page">
        <view class="main-detail-wrap">
            <view class="book-basic">
                <image class="mask-bg-img" src="../../static/lolis/c.png" mode="widthFix"></image>
                <view class="book-main-wrap">
                    <image class="avatar" src="../../static/lolis/c.png" mode="scaleToFill"></image>
                    <view class="detail">
                        <view class="detail-title">
                            晒帅，你媳妇吼了
                        </view>
                        <view class="detail-writer">
                            承蒙
                        </view>
                        
                        <view class="detail-tags">
                            现代言情 14万字 连载
                        </view>
                        
                        <view class="charge-tag">
                            免费
                        </view>
                    </view>
                </view>
            </view>
            
            <view class="notice-bar-wrap">
                <view class="notice-bar">
                    <view class="percent">78%</view>和您相同喜好的书友，正在看这本书
                </view>
            </view>
            
            
            <view class="desc">和您相同喜好的书友，正在看这本书和您相同喜好的书友，正在看这本书和您相同喜好的书友，正在看这本书和您相同喜好的书友，正在看这本书</view>
            <view class="place-bg"></view>

            <view class="directory-wrap">
                <view class="dir-title">
                   <view class="iconfont icon-mulu"></view> 目录
                </view>
                <view class="dir-list-wrap">
                    <view class="dir-list-item">
                        <view class="text">第一章</view>
                        <view class="iconfont icon-arrow-right_s"></view>
                    </view>
                    <view class="dir-list-item">
                    	<view class="text">第一章</view>
                    	<view class="iconfont icon-arrow-right_s"></view>
                    </view><view class="dir-list-item">
                        <view class="text">第一章</view>
                        <view class="iconfont icon-arrow-right_s"></view>
                    </view><view class="dir-list-item">
                        <view class="text">第一章</view>
                        <view class="iconfont icon-arrow-right_s"></view>
                    </view><view class="dir-list-item">
                        <view class="text">第一章</view>
                        <view class="iconfont icon-arrow-right_s"></view>
                    </view><view class="dir-list-item">
                        <view class="text">第一章</view>
                        <view class="iconfont icon-arrow-right_s"></view>
                    </view>
                </view>
            </view>
            <view class="place-bg"></view>

        </view>
        <view class="button-btns-wrap">
        	<view class="left-btn">
                加书架
            </view>
            
            <view class="read-btn" @click="goReadBook">
            	开始阅读
            </view>
        </view>
	</view>
</template>

<script>
export default {
    data() {
        return {};
    },
    
    methods:{
        goReadBook(){
            uni.navigateTo({
            	url: '/pages/readBook/readBook'
            })
        }
    }
};
</script>

<style lang="less">
@import 'bookDetail.less';
</style>
