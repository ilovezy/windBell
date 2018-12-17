<template>
	<view class="content">
       <swiper :indicator-dots="indicatorDots" style="height: 400upx;" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
            <swiper-item v-for="item in itemList" :key="item" >
                <image style="width: 100%;" :src="item" mode="top left"></image>
            </swiper-item>
        </swiper>
        <view>
            <text class="title">{{title}}</text>
        </view>
        <button type="primary" class="btn" @click="goCenter">go center</button>
	</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello 风铃阅读',
            itemList: ['../../static/lolis/dd.jpg', '../../static/lolis/ee.jpg'],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        };
    },
    onLoad() {
        this.sayHello();
    },
    methods: {
        sayHello() {
            // plus.nativeUI.alert('HelloL');
        },

        goCenter() {
            uni.navigateTo({
                url: '/pages/searchBook/searchBook'
            });
        }
    }
};
</script>
<style>
.content {
    text-align: center;
    /* background: red; */
}

.logo {
    width: 120upx;
    height: 150upx;
    margin-top: 200upx;
}
.title {
    font-size: 36upx;
    color: #8f8f94;
}

.btn {
  width: 80%;
}
</style>
