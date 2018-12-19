<template>
	<view class="content">
       <swiper :indicator-dots="indicatorDots" style="height: 400upx;" :autoplay="autoplay" :circular="true" :interval="interval" :duration="duration">
            <swiper-item v-for="item in itemList" :key="item" >
                <image style="width: 100%;" :src="item" mode="top left"></image>
            </swiper-item>
        </swiper>
        <view>
            <text class="title">{{title}}</text>
        </view>
        <button type="primary" class="btn" @click="goCenter">go center</button>
        <br>
        <button type="primary" class="btn" @click="goTabbarSet">go TabbarSet</button>
        <br>
        <button type="primary" class="btn" @click="goWebview">go webview</button>
        <br>
     <button type="primary" class="btn" @click="goMySelf">go mySelf</button>
     <br>
     <button type="primary" class="btn" @click="goBaidu">go baidu</button>

     
        <qrcode val="itms-services://?action=download-manifest&url=https://read-public-test.oss-cn-hangzhou.aliyuncs.com/manifest.plist" size="120" ref="qrcode"></qrcode>
        <view class="test-less">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam non eum sapiente ducimus eaque ullam quidem laudantium reiciendis. Natus illum est assumenda? Perspiciatis corporis doloremque itaque corrupti distinctio sapiente ab?
        </view>
        
        
		<uni-drawer :visible="rightDrawerVisible" mode="left" @close="closeRightDrawer">
      <view style="height: 100%; overflow-y: scroll;">
      <view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view>
      <view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view><view>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro dolorem libero nam. Voluptatum distinctio quos odio accusantium illo nostrum error asperiores architecto impedit expedita nam consequatur necessitatibus quasi voluptatibus tempore.</view>
      </view>
            
    </uni-drawer>
   <view class='iconfont icon-wo'></view>

	</view>
</template>

<script>
import qrcode from '../../components/qrcode/qrcode.vue';
import uniDrawer from '../../components/uni-drawer.vue';
import uniIcon from '../../components/uni-icon.vue';
export default {
    components: {
        qrcode,
        uniDrawer,
        uniIcon
    },
    data() {
        return {
            title: 'Hello 风铃阅读',
            itemList: ['../../static/lolis/dd.jpg', '../../static/lolis/ee.jpg'],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500,
            rightDrawerVisible: false
        };
    },
    onLoad() {
        this.sayHello();
    },
    onShow: function () {
      // plus.nativeUI.showWaiting( "等待中..." );
      // plus.nativeUI.alert('App Show');
    	console.log('App Show')
    },
    onHide: function () {  
      // plus.nativeUI.alert('App Hide');
    	console.log('App Hide')
    },
    onNavigationBarButtonTap(e) {
        // this.rightDrawerVisible = !this.rightDrawerVisible;
        uni.navigateTo({
        		url: '/pages/searchBook/searchBook'
        });
    },
    onBackPress() {
        // 返回按钮监听
        if (this.rightDrawerVisible) {
            this.rightDrawerVisible = false;
            return true;
        }
    },
    methods: {
        sayHello() {
            // plus.nativeUI.alert('HelloL');
        },
        closeRightDrawer() {
            this.rightDrawerVisible = false;
        },
        showRightDrawer() {
            this.rightDrawerVisible = true;
        },
        item1() {
            this.rightDrawerVisible = false;
            uni.showToast({
                title: 'item1'
            });
        },
        item2() {
            this.rightDrawerVisible = false;
            uni.showToast({
                title: 'item2'
            });
        },
        confirm() {
            uni.showToast({
                title: '搜索'
            });
        },
        goCenter() {
            uni.navigateTo({
                url: '/pages/searchBook/searchBook'
            });
        },
        goTabbarSet() {
            uni.navigateTo({
                url: '/pages/tabbarSet/tabbarSet'
            });
        },
        goMySelf() {
            uni.navigateTo({
                url: '/pages/user/mySelf/mySelf'
            });
        },

        goWebview() {
            uni.navigateTo({
                url: '/pages/webView/webView'
            });
        },
        goBaidu(){
          uni.navigateTo({
          		url: '/pages/webView/baidu/baidu'
          });
          
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
