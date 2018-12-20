<template>
	<view>
		
	</view>
</template>

<script>
import user from '@/common/user';
import config from '@/common/config';
export default {
    data() {
        return {};
    },
    created() {
        if (!user.hasReadSlider() && config.showOpenSlider) {
            uni.redirectTo({
                url: '/pages/openSlider/openSlider'
            });
        } else {
            uni.switchTab({
                url: '/pages/index/index'
            });
        }
    }
};
</script>

<style>
</style>
