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
                        <view class="btn-keep-read" @click="goRecentDetail(recentItem)"> 继续阅读</view>
                    </view>
                </view>
            </view>
        </view>

        <view>
            <view class="loading-wrap" v-if="showLoading">
                <cc-loading></cc-loading>
            </view>
            <view v-else class="list-wrap">
                <view class="list-item cc-fade" @longpress="showSelectButton" @click="goBookDetail(item)" v-for="(item,index) in itemList"
                    :key="index">

                    <view class="book-wrap">
                        <image :src="item.cover" class="cover" mode="scaleToFill"></image>
                        <view class="basic-info">
                            <view class="title">
                                {{item.title}}
                            </view>
                            <view class="writer">
                                {{item.writer}}
                            </view>
                        </view>

                        <view v-if="showSelect" class="select-mask">
                            <view class="iconfont icon-star1 book-selected" v-if="item.selected"></view>
                            <view class="iconfont icon-star1" v-else></view>
                        </view>
                    </view>
                </view>

                <view class="list-item list-item-plus" @click="goIndex">
                    +
                </view>
                <view class="list-item-placeholder" v-if="itemList.length % 3 == 1">
                </view>
                
                <button @click="removeChapter">
                    删除书架
                </button>
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
                showSelect: false,
                selectedIds: []
            };
        },

        onShow() {
            this.getData()
            this.getBookShelfList()
        },

        onPullDownRefresh() {
            this.getData()
        },

        methods: {
            getBookShelfList(){
                this.AXIOS.POST('/s/mbr/bk/collection', {}, res=> {
                })
            },
            
            removeChapter(){
                 this.AXIOS.POST('/a/mbr/bk/collection/del', {
                     bookIds: ['1',]
                 }, res=> {
               }) 
            },
            showSelectButton() {
                this.showSelect = true
            },
            setCurrentBook(item) {
                this.recentItem = item;
            },
            
            goBookDetail(item) {
                if (this.showSelect) {
                    item.selected = !item.selected
                } else {
                    uni.navigateTo({
                       url: '/pages/bookDetail/bookDetail'
                    }); 
                }
            },
            
            goRecentDetail() {
                uni.navigateTo({
                    url: '/pages/bookDetail/bookDetail'
                });
            },
            getData() {
                this.showLoading = true;
                setTimeout(() => {
                    this.showLoading = false;
                }, 2000);
                this.itemList = [{
                        title: 'hello',
                        cover: '../../static/lolis/a.png',
                        writer: 'test',
                        id:1,
                        selected: true
                    },
                    {
                        title: '呵撒',
                        cover: '../../static/lolis/ee.jpg',
                        writer: '33放大法dfafda发发呆',
                        id:2,selected: true
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/d.png',
                        writer: '33放大法',
                        id:3,selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/dd.jpg',
                        writer: 'f',
                        id:4,selected: true
                    },
                ];
                uni.stopPullDownRefresh();
            },

            goIndex() {
                uni.switchTab({
                    url: '/pages/index/index'
                })
            }
        }
    };
</script>

<style lang="less">
    @import 'bookShelf.less';
</style>
