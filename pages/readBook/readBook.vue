<template>
	<view class="chapter-page">

		<!-- <rich-text class="chapter-content" @click="onPageClick" :nodes="chapterDetailsConver" :style="{fontSize: chapterFontSize + 'px'}"/> -->
		<view class="loading-text" v-if="loading">
			<cc-loading></cc-loading>
		</view>
		<view v-else class="chapter-main-container" :style="{fontSize: chapterFontSize + 'px'}" @click="toggleSetting">
			<rich-text :nodes="chapterContent" />
		</view>

		<!-- 底部菜单 -->
		<view :class="['chapter-footbar', { show: showFooterBar }]">
			<view class="turnPage">
				<view class="button last" v-if="prevChapterId" @click="goPrev">上一章</view>
        <view v-else></view>
				<view class="button next" v-if="nextChapterId" @click="goNext">下一章</view>
        <view v-else></view>
			</view>
			<view class="setting-panel">
				<!-- 亮度调节面板 -->
				<view class="lightness setting-panel-normal">
					<view class="iconfont icon-baitian-qing"></view>
					<slider min="0" max="1" :value="lightness" step="0.05" backgroundColor="#f5f5f5" activeColor="#769DAC" block-size="20"
					 @changing="changeLightNess" @change="changeLightNess" />
					<view class="iconfont icon-baitian-qing" style="font-weight: bold;"></view>
				</view>

				<!-- 字体大小调节面板 -->
				<view class="font-size setting-panel-normal">
					<view class="iconfont icon-font"></view>
					<slider min="12" max="30" :value="chapterFontSize" step="1" color="#f5f5f5" activeColor="#769DAC" block-size="20"
					 @changing="changeFontSize" @change="changeFontSize" />
					<view style="font-size: 16px;">{{chapterFontSize}}</view>
				</view>
			</view>
		</view>


		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
			<view v-if="catalog.length">
				<view class="chapter-list-item" @click="setCurrentChapter(catalogItem)" :key="catalogItem.id" v-for="catalogItem in catalog">
					<view class="chapter-title">{{catalogItem.chapterTitle}}</view> 
          <view class="free-flag" v-if="!catalogItem.freeFlag">vip</view>
				</view>
			</view>
			<view class="chapter-list-item no-data" v-else>
				暂无章节信息
			</view>
		</uni-drawer>

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
				rightDrawerVisible: true || false,
				showDirectory: false, // 是否展示目录
				showFooterBar: false, // 是否展示底部菜单
				isNightMode: false, // 是否是夜间模式
				bookInBookCase: null, // 书籍对应的书架的内容
				lightness: 0, // 亮度
				chapterFontSize: 14, // 默认字体大小
				chaptersSectionCount: 0, // 章节数量
			};
		},

		computed: {
      prevChapterId(){
        const self = this
        let catalog = this.catalog || []
        let catalogIds = _.pluck(catalog, 'id')
        let currentIndex = ''
        catalogIds.map((item, index) => {
        	if(item == self.catalogId){
        		currentIndex = index
        	}
        })
        if(currentIndex == 0){
          return ''
        } else {
          return catalogIds[currentIndex - 1]
        }
      },
      
      nextChapterId(){
        const self = this
        let catalog = this.catalog || []
        let catalogIds = _.pluck(catalog, 'id')
        let currentIndex = ''
        catalogIds.map((item, index) => {
        	if(item == self.catalogId){
        		currentIndex = index
        	}
        })
        if(currentIndex == catalog.length + 1){
        	return ''
        } else {
        	return catalogIds[currentIndex + 1]
        }
      }
		},

		onNavigationBarButtonTap(e) {
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
			this.bookId = option.bookId || ''
			this.catalogId = option.catalogId || ''
			uni.setNavigationBarTitle({
				title: option.title || ''
			});
		},

		onShow() {
			this.getChapter()
			this.getCatalog()
		},

		methods: {
			getChapter(title = '') {
				const self = this
				self.loading = true
				this.AXIOS.POST('/s/bk/chapter', {
					catalogId: this.catalogId
				}, res => {
					let result = res.result || {}
					self.chapterContent = result || ''
					self.loading = false
          if(title){
            uni.setNavigationBarTitle({
            	title
            });
          }
				}, () => {
					self.loading = false
				})
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

			setCurrentChapter(item) {
				this.catalogId = item.id
				this.getChapter(item.chapterTitle)
			},

			goPrev(){
        let temp = {}
        this.catalog.map((item, index) => {
            if(item.id == this.prevChapterId){
              temp = item
            }
        })
        
        this.setCurrentChapter(temp)
      },
      goNext(){
        let temp = {}
        this.catalog.map((item, index) => {
        		if(item.id == this.nextChapterId){
        			temp = item
        		}
        })
        this.setCurrentChapter(temp)
      },

			toggleSetting() {
				this.showFooterBar = !this.showFooterBar;
			},

			// 切换目录
			toggleCategoryList() {
				this.showDirectory = !this.showDirectory;
			},

			// 切换夜间/白天模式
			toggleNightOrDay() {
				this.isNightMode = !this.isNightMode;
			},

			// 切换设置面板
			toggleSettingPanel() {
				this.showSettingPanel = !this.showSettingPanel;
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
				let temp = this.toDecimal(value);

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
					//                 wx.setStorage({
					//                     key: CHAPTER_FONT_SIZE,
					//                     data: value
					//                 });
				}
			},

			closeRightDrawer() {
				this.rightDrawerVisible = false;
			},
			showRightDrawer() {
				this.rightDrawerVisible = true;
			},

		},

		onHide() {
			this.showDirectory = false;
			this.showFooterBar = false;
		}
	};
</script>

<style lang="less">
	@import './readBook.less';
</style>
