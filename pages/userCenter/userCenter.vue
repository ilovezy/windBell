<template>
	<view>
		这是用户信息页面
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
        
        updated(){
         	plus.nativeUI.alert('no')

        },
        
        created() {
        	plus.nativeUI.alert('欢迎来到个人中心页面')
        }
	}
</script>

<style>

</style>
