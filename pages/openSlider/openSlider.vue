<template>
	<view class="openSlider-container" style="height: 100%">
        <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" class="swiper-wrap" :interval="interval" :duration="duration">
            <swiper-item class="open-slider-item">
                <image class="open-slider-img" src="../../static/openSlider/timg.jpg" mode="scaleToFill"></image>
            </swiper-item>
            <swiper-item class="open-slider-item">
            	<image class="open-slider-img" src="../../static/openSlider/timg1.jpg" mode="scaleToFill"></image>
            </swiper-item>
            <swiper-item class="open-slider-item">
            	<image class="open-slider-img" src="../../static/openSlider/timg2.jpg" mode="scaleToFill"></image>               
                <button type="primary" class="open-btn" @click="goIndex">开启</button>
            </swiper-item>
        </swiper>
	</view>
</template>

<script>
    import user from '@/common/user'
export default {
    data() {
        return {
            imgList: [
                '../../static/openSlider/timg.jpg',
                '../../static/openSlider/timg1.jpg',
                '../../static/openSlider/timg2.jpg'
            ],
            indicatorDots: true,
            autoplay: false,
            interval: 5000,
            duration: 400
        };
    },
    methods: {
        changeIndicatorDots: function(e) {
            this.indicatorDots = !this.indicatorDots;
        },
        changeAutoplay: function(e) {
            this.autoplay = !this.autoplay;
        },
        intervalChange: function(e) {
            this.interval = e.detail.value;
        },
        durationChange: function(e) {
            this.duration = e.detail.value;
        },

        goIndex() {
            uni.switchTab({
                url: '/pages/index/index'
            });
            user.setReadSlider()
        }
    }
};
</script>

<style lang="less">
.openSlider-container {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .swiper-wrap {
        height: 100%;
        .open-slider-item {
            .open-slider-img {
                height: 100%;
                width: 100%;
            }

            .open-btn {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 100px;
                display: inline-block;
                margin: 0 auto;
                z-index: 10;
            }
        }
    }
}
</style>
