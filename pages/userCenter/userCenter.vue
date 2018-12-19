<template>
	<view class="test-less">
    <uni-load-more :loadingType="0" color="red" :contentText="contentText"></uni-load-more>
    <uni-load-more :loadingType="1" color="green" :contentText="contentText"></uni-load-more>
    <uni-load-more :loadingType="2" color="blue" :contentText="contentText"></uni-load-more>
    
    <text class="iconfont icon-laba" style="font-size:50px;color:red"></text>
    <text class="iconfont icon-wode" style="font-size:50px;color:red"></text>
	</view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more.vue';

export default {
    components: { uniLoadMore },
    data() {
        return {
            text: '',
            contentText: {
                contentdown: '上拉显示更多fuck1',
                contentrefresh: '正在加载...fuck2',
                contentnomore: '没有更多数据了fuck3'
            }
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
@import '../../style/variable.less';

.test-less {
    color: @theme-color;
}
</style>
