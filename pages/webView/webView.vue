<template>
	<view>
        <web-view src="/hybrid/html/pingpp.html?title=jack&age=23"  @message="handleMessage"></web-view>
		<!-- <web-view src="/hybrid/html/pingppDemo/views/wap.html"></web-view> -->
        <!-- <web-view src="https://www.baidu.com"></web-view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
        
        methods:{
             handleMessage(evt) {
                 plus.nativeUI.alert('接收到的消息：' + JSON.stringify(evt.detail.data))
                console.log('接收到的消息：' + JSON.stringify(evt.detail.data));
            }
        }
	}
</script>

<style lang="less">
@import '../../style/variable.less';
</style>
