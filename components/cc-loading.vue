<template name="cc-loading">
    <view class="cc-loading-wrap">

        <view class="cc-loading-img">
            <view class="load1">
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
            </view>
            <view class="load2">
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
            </view>
            <view class="load3">
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
                <view :style="{background:color}"></view>
            </view>
        </view>
        <text class="cc-loading-text" v-if="showText" :style="{color:color}">正在加载...</text>
    </view>
</template>

<script>
    export default {
        name: "cc-loading",
        props: {
            name: {
                type: String,
                default: ""
            },
            showText: {
                type: Boolean,
                default: false
            }
        },
        data: {
            color: '#999',
        },
        methods: {
            // 			submit() {
            // 				uni.showModal({
            // 					content:"hello uni-app开源地址为https://github.com/dcloudio/uni-app/tree/master/examples，请在这个开源项目上贡献你的代码",
            // 					showCancel:false
            // 				})
            // 			}
        }
    }
</script>
<style>
    .cc-loading-wrap {
        width: 100%;
        text-align: center;
        padding: 150px 0;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
    }

    .cc-loading-img {
        height: 24px;
        display: inline-block;
        width: 24px;
    }

    .cc-loading-text {
        font-size: 28upx;
        color: #999;
        padding-left: 15px;
    }

    .cc-loading-img>view {
        position: absolute;
    }

    .load1,
    .load2,
    .load3 {
        height: 24px;
        width: 24px;
    }

    .load2 {
        transform: rotate(30deg);
    }

    .load3 {
        transform: rotate(60deg);
    }

    .cc-loading-img>view view {
        width: 6px;
        height: 2px;
        border-top-left-radius: 1px;
        border-bottom-left-radius: 1px;
        background: #777;
        position: absolute;
        opacity: 0.2;
        transform-origin: 50%;
        -webkit-animation: load 1.56s ease infinite;
    }

    .cc-loading-img>view view:nth-child(1) {
        transform: rotate(90deg);
        top: 2px;
        left: 9px;
    }

    .cc-loading-img>view view:nth-child(2) {
        -webkit-transform: rotate(180deg);
        top: 11px;
        right: 0px;
    }

    .cc-loading-img>view view:nth-child(3) {
        transform: rotate(270deg);
        bottom: 2px;
        left: 9px;
    }

    .cc-loading-img>view view:nth-child(4) {
        top: 11px;
        left: 0px;
    }

    .load1 view:nth-child(1) {
        animation-delay: 0s;
    }

    .load2 view:nth-child(1) {
        animation-delay: 0.13s;
    }

    .load3 view:nth-child(1) {
        animation-delay: 0.26s;
    }

    .load1 view:nth-child(2) {
        animation-delay: 0.39s;
    }

    .load2 view:nth-child(2) {
        animation-delay: 0.52s;
    }

    .load3 view:nth-child(2) {
        animation-delay: 0.65s;
    }

    .load1 view:nth-child(3) {
        animation-delay: 0.78s;
    }

    .load2 view:nth-child(3) {
        animation-delay: 0.91s;
    }

    .load3 view:nth-child(3) {
        animation-delay: 1.04s;
    }

    .load1 view:nth-child(4) {
        animation-delay: 1.17s;
    }

    .load2 view:nth-child(4) {
        animation-delay: 1.30s;
    }

    .load3 view:nth-child(4) {
        animation-delay: 1.43s;
    }

    @-webkit-keyframes load {
        0% {
            opacity: 1;
        }

        100% {
            opacity: 0.2;
        }
    }
</style>
