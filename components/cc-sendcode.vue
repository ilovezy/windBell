<template>
  <view style="text-align: center;" :disabled="start" @click="click" :class="start ? '-disabled' : ''">
    {{tmpStr}}
  </view>
</template>
<script type="text/babel">
export default {
    name: 'sendcode',
    data() {
        return {
            tmpStr: '获取验证码',
            timer: null,
            start: false
        };
    },
    props: {
        initStr: String,
        second: {
            default: 60,
            validator(val) {
                return /^\d*$/.test(val);
            }
        },
        runStr: {
            type: String,
            default: '{%s}s'
        },
        resetStr: {
            type: String,
            default: '重新获取'
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        click() {
            this.$emit('click');
        },
        run() {
            let second = this.second;
            this.tmpStr = this.getStr(this.second);
            this.timer = setInterval(() => {
                second--;
                this.tmpStr = this.getStr(second);
                second <= 0 && this.stop();
            }, 1000);
        },
        stop() {
            this.tmpStr = this.resetStr;
            this.$emit('input', false);
            clearInterval(this.timer);
        },
        getStr(second) {
            return this.runStr.replace(/\{([^{]*?)%s(.*?)\}/g, second);
        }
    },
    watch: {
        value(val) {
            this.start = val;
            val && this.run();
        }
    },
    mounted() {
        if (this.initStr) this.tmpStr = this.initStr;
    },
    destroyed() {
        this.stop();
    }
};
</script>
