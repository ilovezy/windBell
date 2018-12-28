<template>
	<view class="content">
		<swiper :indicator-dots="indicatorDots" style="height: 180px;" :autoplay="autoplay" :circular="true" :interval="interval"
		 :duration="duration">
			<swiper-item v-for="(item, index) in itemList" :key="index">
				<image style="width: 100%;" :src="item" mode="scaleToFill"></image>
			</swiper-item>
		</swiper>
		<view>
			<text class="title">{{title}}</text>
		</view>

		<view class="test-less" @click="goBookDetail">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam non eum sapiente ducimus eaque ullam quidem
			laudantium reiciendis. Natus illum est assumenda? Perspiciatis corporis doloremque itaque corrupti distinctio
			sapiente ab?
		</view>
        
        <button type="primary" @click="clearTheme">clearTheme</button>
	</view>
</template>

<script>
	import user from '@/common/user'
	export default {
		components: {},
		data() {
			return {
				title: 'Hello 风铃阅读',
				itemList: ['../../static/lolis/timg.png', '../../static/lolis/timg1.png', '../../static/lolis/timg2.png'],
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				rightDrawerVisible: false
			};
		},
		onLoad() {},
		onShow: function() {
			// plus.nativeUI.showWaiting( "等待中..." );
			// plus.nativeUI.alert('App Show');
		},
		onHide: function() {
			// plus.nativeUI.alert('App Hide');
			console.log('App Hide');
		},
		onNavigationBarButtonTap(e) {
			// this.rightDrawerVisible = !this.rightDrawerVisible;
			uni.navigateTo({
				url: '/pages/search/searchBook/searchBook'
			});
		},
		methods: {
			goBookDetail(item) {
				uni.navigateTo({
					url: '/pages/bookDetail/bookDetail'
				});
			},
            
            clearTheme(){
                this.USER.clearTheme()
            }
		}
	};
</script>
<style lang="less">
	@import '../../style/variable.less';

	.content {
		text-align: center;
		/* background: red; */
	}

	.test-less {
		color: @theme-color;
	}

	.logo {
		width: 120upx;
		height: 150upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}

	.btn {
		width: 80%;
	}
</style>
