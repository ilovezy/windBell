<template>
	<view>
        <van-search :value="value" placeholder="请输入搜索关键词" focus show-action @search="onSearch"  @cancel="onCancel"></van-search>  
           
        <view class="search-tag-wrap">
            <view class="title title-with-icon">
                <view>大家都在搜 </view>
                <view>换一换<view class="iconfont icon-iosrefreshempty" style="position: relative;top: 1px;" @click="doShuffle"></view></view>
            </view>
            
            <view class="tag-wrap tag-all">
                <view v-for="(item, index) in tagList" :key="index" class="tag-item " :class="randomType[index]">
                    {{item}}
                </view>
            </view>
        </view>
        <view class="place-bg"></view>

        <view class="search-tag-wrap ">
            <view class="title title-with-icon">
                <view>搜索历史</view>
                <view class="iconfont icon-empty"></view>
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
  import _ from '@/common/underscore'
export default {
    data() {
        return {
            value: '',
            tagList: ['热死', 'toke', 'very hot', 'haha', '反倒是建安费', '黑哦', 'haha反倒', 'fdah检查vfoivv'],
            tagHistoryList: ['方面的哦啊', '资产', '农夫', '没发过', '呵呵呵', 'fdaj'],
            randomType:  _.shuffle(['tag-1','tag-2','tag-3','tag-4','tag-5','tag-6','tag-7','tag-8','tag-9','tag-10'])
        };
    },

    methods: {
      doShuffle(){
        this.tagList = _.shuffle(this.tagList)
        this.randomType = _.shuffle(this.randomType)
      },
        onSearch() {
            // plus.nativeUI.alert('fuck');
            uni.navigateTo({
            	url: '../searchResult/searchResult'
            })
        },
        onCancel() {
            // plus.nativeUI.alert('cancel');
        }
    }
};
</script>

<style lang="less">
@import 'searchBook.less';
</style>
