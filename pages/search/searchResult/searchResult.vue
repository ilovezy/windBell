<template>
	<view class="search-result-page">
		<view v-for="(item, index) in list" :key="index" class="search-list-item">
            <image class="cover" :src="item.cover" mode="scaleToFill"></image>
            
            <view class="detail-container">
                <view class="top-container">
                    <view class="header">
                        <view class="header-left">
                            <view class="title">
                                {{item.title}}
                            </view>
                            <view class="writer">
                                <view class="iconfont icon-wode"></view>
                                <view class="writer-name">{{item.writer}}</view>
                            </view>
                        </view>
                        <view class="header-right">
                            <view class="add-book-shelf" @click="addToBookShelf">
                                加书架
                            </view>
                        </view>
                    </view>
                    
                    <view class="detail-desc">
                        {{item.desc}}
                    </view>
                </view>
                <view class="detail-footer">
                	<view class="detail-tag" v-for="(item2, index2) in item.tags" :key="index2">
                		{{item2}}
                	</view>
                </view>
            </view>
        </view>
	
				<uni-load-more :loadingType="loadingType" :contentText="contentText"></uni-load-more>

    </view>
</template>

<script>
import uniLoadMore from '@/components/uni-load-more.vue';

export default {
    components: {
        uniLoadMore
    },
    data() {
        return {
            title: 'uni-load-more',
            loadingType: 0,
            contentText: {
                contentdown: '上拉显示更多',
                contentrefresh: '正在加载...',
                contentnomore: '没有更多数据了'
            },

            list: [
                {
                    cover: '../../../static/lolis/a.png',
                    title: '心理罪城市之光',
                    writer: '小蜜蜂',
                    desc:
                        '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法发动机搜啊方法',
                    tags: ['完结', '27万字', '悬疑类', '现代27万字']
                },
                {
                    cover: '../../../static/lolis/b.png',
                    title:
                        '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    writer:
                        '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    desc:
                        '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    tags: [
                        '完结',
                        '27万字',
                        '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                        '现代'
                    ]
                },
                {
                    cover: '../../../static/lolis/c.png',
                    title: 'moifda发',
                    writer: '小蜜蜂fdas',
                    desc: '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    tags: ['完结', '27万字', '悬疑类', '现代']
                },
                {
                    cover: '../../../static/lolis/d.png',
                    title: '非机动啊',
                    writer: '小蜜蜂',
                    desc: '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    tags: ['完结', '悬疑类', '现代']
                },
                {
                    cover: '../../../static/lolis/dd.jpg',
                    title: '心理罪城之光',
                    writer: '小蜜蜂',
                    desc: '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    tags: ['完结', '27万字', '悬疑类', '现代']
                },
                {
                    cover: '../../../static/lolis/a.png',
                    title: '心理光',
                    writer: '小蜜蜂',
                    desc: '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
                    tags: ['完结']
                }
            ]
        };
    },
    onReachBottom() {
        if (this.loadingType !== 0) {
            return;
        }
        this.loadingType = 1;
        let length = this.list.length || 0;
        let list = [];
        list.push({
            cover: '../../../static/lolis/dd.jpg',
            title: '心理罪城之光',
            writer: '小蜜蜂',
            desc: '喝酒诶哦发货到你丰富的睡觉奥if发的撒娇发动机搜啊方法',
            tags: ['完结', '27万字', '悬疑类', '现代']
        });
        setTimeout(() => {
            console.log(length)
            if (length > 10) {
                this.loadingType = 2;
                return;
            }
            this.list = this.list.concat(list);
            this.loadingType = 0;
        }, 800);
    },
    methods: {
        goBookDetail() {
            plus.nativeUI.alert('前往书本详情');
        },

        addToBookShelf() {
            plus.nativeUI.alert('添加成功');
        }
    }
};
</script>

<style lang="less">
@import 'searchResult.less';
</style>
