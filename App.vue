<script>
export default {
    onLaunch: function() {
        console.log('App Launch');
        //#ifdef APP-PLUS
        plus.screen.lockOrientation('portrait-primary'); //锁定
        //#endif
    },
    onShow: function() {
        console.log('App Show');
    },
    onHide: function() {
        console.log('App Hide');
    }
};
</script>

<style lang="less">
/*每个页面公共css */
/* This stylesheet generated by Transfonter (https://transfonter.org) on April 16, 2018 10:16 AM */
@import './style/global.less';
@import './style/variable.less';
@import './style/iconfont.css';

.iconfont {
    display: inline-block;
}
.cc-fade {
    animation: ccFade 0.5s;
}

@keyframes ccFade{
    0% {
        opacity: 0.2;
    }
    100%{
        opacity: 1;
    }
}
</style>
