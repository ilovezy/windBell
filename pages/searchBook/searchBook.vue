<template>
	<view>
        <van-search :value="value" placeholder="请输入搜索关键词" show-action @search="onSearch"  @cancel="onCancel"></van-search>  
           
        <view class="search-tag-wrap">
            <view class="title">
                大家都在搜
            </view>
            
            <view class="tag-wrap tag-all">
                <view v-for="(item, index) in tagList" :key="index" class="tag-item " :class="randomType">
                    {{item}}
                </view>
            </view>
        </view>
        <view class="place-bg"></view>

        <view class="search-tag-wrap ">
            <view class="title title-with-icon">
                <view>搜索历史</view>
                <view class="iconfont icon-yaoqingjiangli"></view>
            </view>
            
            <view class="tag-wrap tag-history">
            	<view v-for="(item, index) in tagHistoryList" :key="index" class="tag-item">
            		{{item}}
            	</view>
            </view>
        </view>
    
	</view>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            tagList: ['热死', 'toke', 'very hot', 'haha', '反倒是建安费', '黑哦'],
            tagHistoryList: ['方面的哦啊', '资产', '农夫', '没发过', '呵呵呵', 'fdaj']
        };
    },
    computed: {
        randomType() {
            return 'tag-type-' + Math.floor(Math.random() * 10 + 1);
        }
    },
    methods: {
        onSearch() {
            plus.nativeUI.alert('fuck');
        },
        onCancel() {
            plus.nativeUI.alert('cancel');
        }
    }
};
</script>

<style lang="less">
@import 'searchBook.less';
</style>
