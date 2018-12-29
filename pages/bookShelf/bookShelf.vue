<template>
    <view class="book-shelf-page">
        <view class="book-basic">
            <image class="mask-bg-img" :src="recentItem.cover" mode="widthFix"></image>
            <view class="book-main-wrap">
                <image class="avatar" :src="recentItem.cover" mode=""></image>
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
                <view class="list-item cc-fade" @longpress="showSelectLongPress" @click="goBookDetail(item)" v-for="(item,index) in itemList"
                    :key="index">
                    <view class="book-wrap">
                        <image :src="item.cover" class="cover" mode="scaleToFill"></image>
                        <view class="basic-info">
                            <view class="title">
                                {{item.title}}
                            </view>
                        </view>

                        <view v-if="showSelect" class="select-mask">
                            <view class="select-icon " :class="item.selected ? 'selected' : 'not-selected'">
                                <view v-if="item.selected" class="iconfont icon-cc-yes-crude"></view>
                            </view>
                        </view>
                    </view>
                </view>
                <view class="list-item list-item-plus cc-fade" v-if="!showSelect" @click="goIndex">
                    +
                </view>
                <view class="list-item-placeholder" v-if="itemList.length % 3 == 1">
                </view>
            </view>


            <view class="btn-bottom-wrap cc-fade" v-if="showSelect">
                <view class="btn-bottom-spe btn-cancel" @click="closeSelect">取消编辑</view>
                <view class="btn-bottom-spe btn-select-all" @click="selectAll">
                    {{allSelected ? '取消全选' : '全选'}}
                </view>
                <view class="btn-bottom-spe btn-delete" @click="removeChapter">删除书架</view>
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
                showSelect: true,
                selectedIds: []
            };
        },

        computed: {
            allSelected() {
                let flag = true
                this.itemList.map((item, index) => {
                    if (!item.selected) {
                        flag = false
                    }
                })

                return flag
            }
        },

        onShow() {
            this.getData()
            this.getBookShelfList()
        },

        onPullDownRefresh() {
            this.getData()
        },

        methods: {
            getBookShelfList() {
                this.AXIOS.POST('/s/mbr/bk/collection', {}, res => {})
            },

            removeChapter() {
                if(this.UTIL.isLongArr(this.itemList)){
                    let bookIds = []

                    this.itemList.map((item, index) => {
                        if(item.selected){
                            bookIds.push(item.id)
                        }
                    })
                    if(this.UTIL.isLongArr(bookIds)){
                        this.AXIOS.POST('/a/mbr/bk/collection/del', {
                            bookIds
                        }, res => {})
                    } else {
                        this.UTIL.simpleToast('请选择要删除的书本')
                    }

                } else {
                    this.UTIL.simpleToast('书架里没有书')
                }
            },
            showSelectLongPress() {
                uni.hideTabBar()
                this.showSelect = true
            },

            closeSelect() {
                this.showSelect = false
                this.itemList.map((item) => {
                    item.selected = false
                })
            },
            selectAll() {
                if(this.allSelected){
                    this.itemList.map((item) => {
                        item.selected = false
                    })
                } else {
                    this.itemList.map((item) => {
                        item.selected = true
                    })
                }
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
                }, 1000);
                this.itemList = [{
                        title: 'hello',
                        cover: '../../static/lolis/a.png',
                        writer: 'test',
                        id: 1,
                        selected: false
                    },
                    {
                        title: '呵撒',
                        cover: '../../static/lolis/ee.jpg',
                        writer: '33放大法dfafda发发呆',
                        id: 2,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/d.png',
                        writer: '33放大法',
                        id: 3,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/dd.jpg',
                        writer: 'f',
                        id: 4,
                        selected: false
                    }, {
                        title: '呵撒',
                        cover: '../../static/lolis/ee.jpg',
                        writer: '33放大法dfafda发发呆',
                        id: 5,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/d.png',
                        writer: '33放大法',
                        id: 6,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/dd.jpg',
                        writer: 'f',
                        id: 7,
                        selected: false
                    }, {
                        title: '呵撒',
                        cover: '../../static/lolis/ee.jpg',
                        writer: '33放大法dfafda发发呆',
                        id: 8,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/d.png',
                        writer: '33放大法',
                        id: 9,
                        selected: false
                    },
                    {
                        title: '呵呵dd发发顺丰的撒',
                        cover: '../../static/lolis/dd.jpg',
                        writer: 'f',
                        id: 11,
                        selected: false
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
