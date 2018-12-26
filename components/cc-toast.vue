<template>
	<view class="cc-toast">
		<view class="uni-mask-black cc-toast" v-if="blackbg" v-show="show" :style="{top:offsetTop + 'px'}" @click="hide"></view>
    <view class="uni-mask cc-toast" v-else v-show="show" :style="{top:offsetTop + 'px'}" @click="hide"></view>
		<view :class="['uni-popup cc-toast','uni-popup-'+type]" v-show="show">
			{{msg}}
			<slot></slot>
		</view>
	</view>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            //top - 顶部， middle - 居中, bottom - 底部
            default: 'middle'
        },
        msg: {
            type: String,
            default: ''
        },
        blackbg: {
            type: Boolean,
            default: true
        }
    },
    data() {
        let offsetTop = 0;
        //#ifdef H5
        offsetTop = 44;
        //#endif
        return {
            offsetTop: offsetTop
        };
    },
    methods: {
        hide: function() {
            this.$emit('hidePopup');
        }
    }
};
</script>
<style>
.cc-toast {
    animation: toastFade 0.3s;
}

@keyframes toastFade {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.uni-mask {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
}
.uni-mask-black {
    position: fixed;
    z-index: 998;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
}

.uni-popup {
    position: absolute;
    z-index: 999;
    background-color: #ffffff;
    /* box-shadow: 0 0 30upx rgba(0, 0, 0, 0.1); */
    /* box-shadow: 0 0 30upx #fff; */
}

.uni-popup-middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 380upx; */
    /* height: 380upx; */
    max-width: 80%;
    font-size: 14px;
    padding: 15px 30px;
    /* background: #607d8b; */
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 10upx;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    justify-content: center;
    padding: 30upx;
}

.uni-popup-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 100upx;
    line-height: 100upx;
    text-align: center;
}

.uni-popup-bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100upx;
    line-height: 100upx;
    text-align: center;
}
</style>
