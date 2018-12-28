<template>
	<view class="book-detail-page">
		<view class="loading-text" v-if="loading">
			<cc-loading></cc-loading>
		</view>
		<view class="page-fade cc-fade" v-else>
			<view class="main-detail-wrap">
				<view class="book-basic">
					<image class="mask-bg-img" :src="imgCover" mode="widthFix"></image>
					<view class="book-main-wrap">
						<image class="avatar" :src="imgCover" mode="scaleToFill"></image>
						<view class="detail">
							<view class="detail-title">
								{{title}}
							</view>
							<view class="detail-writer">
								<view v-if="authorName">
									<view class="iconfont icon-wode"></view> {{authorName}}
								</view>
							</view>

							<view class="detail-tags">
								{{classification}}
								<view class="end-flag" v-if="endFlag !==''">
									{{ endFlag ? '已完结' : '连载中'}}
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="notice-bar-wrap">
					<view class="notice-bar">
						<view class="percent">78%</view>和您相同喜好的书友，正在看这本书
					</view>
				</view>


				<view class="desc">
					{{shortDesc}}
				</view>
				<view class="place-bg"></view>

				<view class="directory-wrap">
					<view class="dir-title">
						<view class="iconfont icon-mulu"></view> 目录 <view class="dir-sub-text" v-if="catalog.length">共{{catalog.length}}章</view>
					</view>
					<view class="dir-list-wrap" v-if="catalog.length">
						<view class="dir-list-item" v-for="item in catalog" :key="item.id" @click="goReadBook(item)">
							<view class="text">{{item.chapterTitle}} {{item.id}}</view>
							<view class="iconfont" v-if="!item.freeFlag">vip</view>
						</view>
					</view>

					<view class="dir-list-wrap no-data" v-else>
						暂无章节信息
					</view>
				</view>
				<view class="place-bg"></view>

			</view>
			<view class="button-btns-wrap">
				<view class="left-btn" @click="addToBookShelf">
					加书架
				</view>

				<view class="read-btn" @click="goReadBook">
					开始阅读
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import ccLoading from '@/components/cc-loading.vue'
	export default {
		components: {
			ccLoading
		},
		data() {
			return {
				loading: true,
        
				bookId: 1,
				authorName: '',
				classification: '',
				endFlag: '',
				imgCover: '',
				shortDesc: '',
				title: '',
				catalog: []
			};
		},

		onLoad() {
			this.getDetail()
		},

		methods: {
			getDetail() {
				const self = this
				this.AXIOS.POST('/s/bk/index', {
					bookId: 1,
				}, (res) => {
					let data = res.result || {}
					self.authorName = data.authorName || ''
					self.classification = data.classification || ''
					self.endFlag = data.endFlag || ''
					self.imgCover = data.imgCover || ''
					self.shortDesc = data.shortDesc || ''
					self.title = data.title || ''
					self.catalog = data.catalog || []

					self.loading = false
				}, () => {
					self.loading = false
				})
			},

			goReadBook(item) { // TODO
        console.log(item.id)
				if (item.id) {
					uni.navigateTo({
						url: '/pages/readBook/readBook?catalogId=' + item.id + '&bookId=' + this.bookId + '&title=' + item.chapterTitle
					})
				} else {
          // TODO
					uni.navigateTo({
						url: '/pages/readBook/readBook?bookId=' + this.bookId
					})
				}

			},
            
            addToBookShelf(){
                const self = this
                this.AXIOS.POST('/a/mbr/bk/collect', {
                	bookId: 1
                }, (res) => {
                    this.UTIL.simpleToast('添加成功')
                })
            }
		}
	};
</script>

<style lang="less">
	@import 'bookDetail.less';
</style>
