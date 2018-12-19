<template>
    <view>
         	
        <web-view :webview-styles="webviewStyles" src="https://www.baidu.com"></web-view>
      </view>
</template>

<script>
export default {
    data() {
        return {
            webviewStyles: {
                progress: {
                    color: '#428bca'
                }
            }
        };
    }
};
</script>

<style lang="less">
</style>
