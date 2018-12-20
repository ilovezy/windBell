<template>
	<view>
	<van-search :value="value" placeholder="请输入搜索关键词" show-action @search="onSearch"  @cancel="onCancel"></van-search>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: ''
			};
		},
        methods:{
            onSearch(){
                plus.nativeUI.alert('fuck')
            },
            onCancel(){
                plus.nativeUI.alert('cancel')
            }
        }
	}
</script>

<style lang="less">
@import '../../style/variable.less';
</style>
