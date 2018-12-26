<template>
  <view class="chapter-page">

    <!-- <rich-text class="chapter-content" @click="onPageClick" :nodes="chapterDetailsConver" :style="{fontSize: chapterFontSize + 'px'}"/> -->
      <view class="chapter-main-container" :style="{fontSize: chapterFontSize + 'px'}" @click="toggleSetting">

      {{chapterFontSize}}
      <view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view>
      <view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view><view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view><view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view><view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view><view class="">
      	
      viewLorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime nihil qui perspiciatis doloremque explicabo natus repellat ut harum quos quisquam sed unde consectetur ipsum porro a praesentium culpa nulla itaque vitae iusto omnis tempore obcaecati alias quod dicta vel ex eligendi corporis et pariatur dolorem quo adipisci autem maiores minus debitis excepturi. Eum et voluptatibus inventore aut sunt ullam officia libero quas necessitatibus beatae soluta facilis at quam facere quae sed quod voluptate hic dolorem ipsa minima natus quibusdam aperiam sit ut reprehenderit minus doloremque quaerat doloribus eius! Alias repellat vero obcaecati tenetur. Quos voluptates
      </view>
    </view>

    <!-- 底部菜单 -->
    <view  :class="['chapter-footbar', { show: showFooterBar }]">
      <view class="turnPage">
      	<view class="button last" @click="gotoTargeChapter(currentPageIndex - 1)">上一章</view>
      	<view class="button next" @click="gotoTargeChapter(currentPageIndex + 1)">下一章</view>
      </view>
      <view class="setting-panel">
      	<!-- 亮度调节面板 -->
      	<view class="lightness setting-panel-normal">
      		<view class="iconfont icon-baitian-qing"></view>
      		<slider min="0" max="1" :value="lightness" step="0.05" backgroundColor="#f5f5f5" activeColor="#769DAC" block-size="20" @changing="changeLightNess" @change="changeLightNess" />
          <view class="iconfont icon-baitian-qing" style="font-weight: bold;"></view>
          <!-- <view>{{lightness}}</view> -->
      	</view>
        
        <button @click="changeLight">set</button>
      	<!-- 字体大小调节面板 -->
      	<view class="font-size setting-panel-normal">
      		<view class="iconfont icon-font"></view>
      		<slider min="12" max="30" :value="chapterFontSize" step="1" color="#f5f5f5" activeColor="#769DAC" block-size="20" @changing="changeFontSize" @change="changeFontSize"/>
      		<view style="font-size: 16px;">{{chapterFontSize}}</view>
      	</view>
      </view>
    </view>


   <uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
    	<view class="chapter-list-item" :key="item2" v-for="item2 in chapterList">
    		{{item2}}
    	</view>
    </uni-drawer>
   
  </view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer.vue';
export default {
    components: {
        uniDrawer
    },
    data() {
        return {
            light: 0.1,
            rightDrawerVisible: false,
            CHAPTER_SECTION_COUNT: 100,
            showDirectory: false, // 是否展示目录
            showFooterBar: false, // 是否展示底部菜单
            isNightMode: false, // 是否是夜间模式
            currentPageIndex: 0, // 当前查看第几章
            bookInBookCase: null, // 书籍对应的书架的内容
            lightness: 0, // 亮度
            chapterFontSize: 14, // 默认字体大小
            chaptersSectionCount: 0, // 章节数量

            chapterList: [
                '发动机阿斯',
                'fdas',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录',
                '章节数量',
                '书籍对应的书架的内容',
                '是否展示目录'
            ], // 当前查看的章节段落
            chapterDetailsConver:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident obcaecati nesciunt veritatis totam voluptas cumque placeat odio quo ipsum sit similique natus expedita consequatur non reprehenderit! Totam quis necessitatibus explicabo?'
        };
    },
    computed: {},
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
    methods: {
        sayFuck(itme) {
            plus.nativeUI.alert(itme);
        },
        // 回首页
        gotoHome() {
            wx.redirectTo({
                url: '/pages/index/main'
            });
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
            const { value } = e.target;
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
            const { value } = e.target;
            if (typeof value === 'number') {
                this.chapterFontSize = value;
                //                 wx.setStorage({
                //                     key: CHAPTER_FONT_SIZE,
                //                     data: value
                //                 });
            }
        },

        gotoTargeChapter() {},

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
        }
    },
    onLoad() {},

    onHide() {
        this.showDirectory = false;
        this.showFooterBar = false;
    }
};
</script>

<style lang="less">
@import './readBook.less';
</style>
