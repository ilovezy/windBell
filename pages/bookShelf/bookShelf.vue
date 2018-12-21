<template>
	<view class="book-shelf-page">
        <view class="book-basic">
        	<image class="mask-bg-img" :src="recentItem.cover" mode="widthFix"></image>
        	<view class="book-main-wrap">
        		<image class="avatar" :src="recentItem.cover" mode="scaleToFill"></image>
        		<view class="detail">
              <view class="detail-top">
                <view class="detail-title">
                  {{recentItem.title}}
                </view>
                <view class="detail-writer">
                  {{recentItem.writer}}
                </view>
              </view>
              <view class="detail-btn-wrap">
                <view class="btn-keep-read" @click="goBookDetail(recentItem)"> 继续阅读</view>
              </view>
        		</view>
        	</view>
        </view>
        
        <view>
            <view v-if="showLoading">
                <cc-loading></cc-loading>
            </view>
            <view v-else class="list-wrap">
                <view class="list-item " @click="goBookDetail(item)" v-for="(item,index) in itemList" :key="index">
                    <image :src="item.cover" class="cover" mode="scaleToFill"></image>
                    <view class="basic-info">
                    <view class="title">
                        {{item.title}}
                    </view>
                    <view class="writer">
                        {{item.writer}}
                    </view>
                    </view>
                </view>
                
                <view class="list-item list-item-plus " @click="pushItem">
                    +
                </view>
                <view class="list-item-placeholder" v-if="itemList.length % 3 == 1">
                </view>
            </view>
        </view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            showLoading: true,
            title: 'Hello 风铃阅读',
            recentItem: {
                title: 'hello',
                cover: '../../static/lolis/a.png',
                writer: 'test'
            },
            itemList: [],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        };
    },

    mounted() {
        this.getData();
    },

    onPullDownRefresh() {
        this.getData();
    },

    methods: {
        setCurrentBook(item) {
            this.recentItem = item;
        },
        goBookDetail(item) {
            uni.navigateTo({
                url: '/pages/bookDetail/bookDetail'
            });
        },
        getData() {
            this.showLoading = true;
            setTimeout(() => {
                this.showLoading = false;
            }, 2000);
            this.itemList = [
                {
                    title: 'hello',
                    cover: '../../static/lolis/a.png',
                    writer: 'test'
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/d.png',
                    writer: '33放大法'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/dd.jpg',
                    writer: ''
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/d.png',
                    writer: '33放大法'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/dd.jpg',
                    writer: ''
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                }
            ];
            uni.stopPullDownRefresh();
        },
        previewImg(item) {
            // plus.nativeUI.alert(JSON.stringify(item));
            uni.previewImage({
                urls: [item.cover, '../../static/lolis/ee.jpg', '../../static/lolis/dd.jpg']
            });
            // 从相册选择6张图
            //             uni.chooseImage({
            //                 count: 6,
            //                 sizeType: ['original', 'compressed'],
            //                 sourceType: ['album'],
            //                 success: function(res) {
            //                     // 预览图片
            //                     uni.previewImage({
            //                         urls: res.tempFilePaths
            //                     });
            //                 }
            //             });
        },
        pushItem() {
            const self = this;
            setTimeout(() => {
                self.itemList.push({
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                });
            }, 300);
        }
    }
};
</script>

<style lang="less">
@import 'bookShelf.less';
</style>
