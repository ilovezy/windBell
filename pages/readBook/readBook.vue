<template>
    <view class="chapter-page" :class="selectedTheme">
        <view class="loading-wrap" v-if="loading">
            <cc-loading></cc-loading>
        </view>
        <view class="chapter-main-container " :style="{fontSize: chapterFontSize + 'px'}" @click="toggleSetting">
            <rich-text :nodes="chapterContent" />
        </view>


        <uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
            <view v-if="catalog.length">
                <view :class="['chapter-list-item', { active: catalogId == catalogItem.id }]" @click="clickNavBarItem(catalogItem)"
                    :key="catalogItem.id" v-for="catalogItem in catalog">
                    <view class="chapter-title">{{catalogItem.chapterTitle}}</view>
                    <view class="free-flag" v-if="!catalogItem.freeFlag">vip</view>
                </view>
            </view>
            <view class="chapter-list-item no-data" v-else>
                暂无章节信息
            </view>
        </uni-drawer>

        <view class="turn-page-wrap">
            <view class="button last" @click="goPrev">上一章</view>
            <view class="button next" @click="goNext">下一章</view>
        </view>
        <!-- 底部菜单 -->
        <view :class="['chapter-footbar', { show: showFooterBar }]">
            <view class="turn-page-inside">
                <view class="button last" @click="goPrev">上一章</view>
                <view class="button next" @click="goNext">下一章</view>
            </view>

            <view class="setting-panel">
                <view class="setting-theme-select">
                    <view class="select-theme-label">
                        主题
                    </view>
                    <view class="theme-item-wrap">
                        <view class="theme-item" @click="changeTheme(item)" :style="{backgroundColor: item.backgroundColor}"
                            v-for="(item, index) in themeList" :key="item.className">
                            {{item.title}}
                        </view>
                    </view>
                </view>

                <!-- 亮度调节面板 -->
                <view class="setting-lightness setting-panel-normal">
                    <view class="setting-left-part">
                        <view class="iconfont icon-baitian-qing"></view>
                    </view>

                    <view class="setting-middle-part">

                        <slider class="setting-slider" min="0" max="1" :value="lightness" step="0.05" backgroundColor="#f5f5f5"
                            activeColor="#769DAC" block-size="20" @changing="changeLightNess" @change="changeLightNess" />
                    </view>
                    <view class="setting-right-part">
                        <view class="iconfont icon-baitian-qing" style="font-weight: bold;"></view>
                    </view>
                </view>

                <!-- 字体大小调节面板 -->
                <view class="setting-font-size setting-panel-normal">
                    <view class="setting-left-part">
                        <view class="iconfont icon-font"></view>
                    </view>
                    <view class="setting-middle-part">
                        <slider min="12" max="30" :value="chapterFontSize" step="1" color="#f5f5f5" activeColor="#769DAC"
                            block-size="20" @changing="changeFontSize" @change="changeFontSize" />
                    </view>
                    <view class="setting-right-part">
                        <!-- <view style="font-size: 16px;">{{chapterFontSize}}</view> -->
                        <view class="iconfont icon-font" style="font-weight: bold;"></view>
                    </view>
                </view>

            </view>
        </view>
        <!-- 底部菜单 end -->

    </view>
</template>

<script>
    import uniDrawer from '@/components/uni-drawer.vue';
    import _ from '@/common/underscore.js'

    export default {
        components: {
            uniDrawer
        },
        data() {
            return {
                loading: true,
                bookId: '',
                catalogId: '',
                catalog: [],
                chapterContent: '',

                light: 0.1,
                rightDrawerVisible: false,
                showFooterBar: true, // 是否展示底部菜单

                isNightMode: false, // 是否是夜间模式
                lightness: 0, // 亮度
                chapterFontSize: 14, // 默认字体大小

                selectedTheme: 'default',
                themeList: [{
                    className: 'default',
                    backgroundColor: '#efe6df',
                }, {
                    className: 'dark',
                    backgroundColor: '#455a64',
                }, {
                    className: 'light',
                    backgroundColor: '#e8eaf6',
                }, {
                    className: 'green',
                    backgroundColor: '#e8f5e9',
                }, {
                    className: 'pink',
                    backgroundColor: '#fce4ec',
                }]
            };
        },

        computed: {
            prevChapterId() {
                const self = this
                let catalog = this.catalog || []
                let catalogIds = _.pluck(catalog, 'id')
                let currentIndex = ''
                catalogIds.map((item, index) => {
                    if (item == self.catalogId) {
                        currentIndex = index
                    }
                })
                if (currentIndex == 0) {
                    return ''
                } else {
                    return catalogIds[currentIndex - 1]
                }
            },

            nextChapterId() {
                const self = this
                let catalog = this.catalog || []
                let catalogIds = _.pluck(catalog, 'id')
                let currentIndex = ''
                catalogIds.map((item, index) => {
                    if (item == self.catalogId) {
                        currentIndex = index
                    }
                })
                if (currentIndex == catalog.length - 1) {
                    return ''
                } else {
                    return catalogIds[currentIndex + 1]
                }
            }
        },

        onNavigationBarButtonTap(e) {
            this.showFooterBar = false
            this.rightDrawerVisible = !this.rightDrawerVisible;
        },
        onBackPress() {
            // 返回按钮监听
            if (this.rightDrawerVisible) {
                this.rightDrawerVisible = false;
                return true;
            }
        },
        onLoad(option) {
            this.bookId = option.bookId || '1'
            this.catalogId = option.catalogId || '1'
            this.chapterTitle = option.title || 'test'

            this.chapterFontSize = this.USER.getFontSize() || 14
            this.selectedTheme = this.USER.getTheme() || 'default'

            uni.setNavigationBarTitle({
                title: option.title || ''
            });
        },

        onShow() {
            this.getChapter({
                id: this.catalogId,
                chapterTitle: this.chapterTitle,
                getForce: true
            })
            this.getCatalog()
        },

        methods: {

            clickNavBarItem: _.debounce(function(item) {
                this.getChapter(item)
            }, 300, true),

            getChapter(item = {}) {
                const self = this

                if (item.getForce || (item.id != this.catalogId)) {
                    self.rightDrawerVisible = false
                    self.loading = true

                    this.AXIOS.POST('/s/bk/chapter', {
                        catalogId: item.id
                    }, res => {
                        let result = res.result || {}
                        self.chapterContent = result || ''
                        self.setNewChapter(item)
                        self.loading = false
                    }, () => {
                        self.loading = false
                    })
                }
            },

            setNewChapter(item) {
                this.catalogId = item.id
                setTimeout(() => {
                    uni.pageScrollTo({
                        scrollTop: 0,
                        duration: 0
                    });
                }, 100)
                uni.setNavigationBarTitle({
                    title: item.chapterTitle || ''
                });
            },

            getCatalog() {
                const self = this
                this.AXIOS.POST('/s/bk/catalog', {
                    bookId: this.bookId
                }, res => {
                    let result = res.result || {}
                    self.catalog = result.catalog || []
                })
            },

            goPrev: _.debounce(function() {
                let chapterId = this.prevChapterId
                if (chapterId) {
                    this.goTargetPage(chapterId)
                } else {
                    this.UTIL.simpleToast('已经是第一章了')
                }
            }, 300, true),

            goNext: _.debounce(function() {
                let chapterId = this.nextChapterId
                if (chapterId) {
                    this.goTargetPage(chapterId)
                } else {
                    this.UTIL.simpleToast('已经是最后一章了')
                }
            }, 300, true),

            goTargetPage(chapterId) {
                let temp = {}
                this.catalog.map((item, index) => {
                    if (item.id == chapterId) {
                        temp = item
                    }
                })
                this.showFooterBar = false
                this.getChapter(temp)
            },

            toggleSetting() {
                this.showFooterBar = !this.showFooterBar;
            },

            // 切换夜间/白天模式
            toggleNightOrDay() {
                this.isNightMode = !this.isNightMode;
            },

            toDecimal(x) {
                f = Math.round(x * 100) / 100;
                return f;
            },

            // 改变亮度
            changeLightNess(e) {
                const {
                    value
                } = e.target;

                if (typeof value === 'number') {
                    this.lightness = value;
                    plus.screen.setBrightness(value);

                    uni.setScreenBrightness({
                        value,
                        success: function() {
                            console.log('yes fuck');
                        }
                    });
                }
            },

            // 改变字体大小
            changeFontSize(e) {
                const {
                    value
                } = e.target;
                if (typeof value === 'number') {
                    this.chapterFontSize = value;
                    this.USER.setFontSize(value);
                }
            },
            
            changeTheme(item) {
                this.selectedTheme = item.className
                this.USER.setTheme(item.className);
            },
            closeRightDrawer() {
                this.rightDrawerVisible = false;
            },

        },

        onHide() {
            this.closeRightDrawer()
            this.showFooterBar = false
        }
    };
</script>

<style lang="less">
    @import './readBook.less';
</style>
