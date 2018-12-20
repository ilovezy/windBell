<template>
	<view class="book-shelf-page">
        <view class="top-container">
            <view class="left-wrap">
                <image :src="recentItem.cover" class="cover" mode="scaleToFill"></image>
            </view>
            <view class="right-wrap">
                <view class="title">{{recentItem.title}}</view>
                <view class="writer" style="">
                    {{recentItem.writer}}
                </view>
                <view class="btn-keep-read ripple"> 继续阅读</view>
            </view>
        </view>
		<view>
            <view v-if="showLoading">
                <cc-loading></cc-loading>
            </view>
            <view v-else class="list-wrap">
                <view class="list-item ripple" @click="setCurrentBook(item)" v-for="(item,index) in itemList" :key="index">
                    <image :src="item.cover" class="cover" mode="scaleToFill" @click="previewImg(item)"></image>
                    <view class="basic-info">
                    <view class="title">
                        {{item.title}}
                    </view>
                    <view class="writer">
                        {{item.writer}}
                    </view>
                    </view>
                </view>
                
                <view class="list-item list-item-plus ripple" @click="pushItem">
                    +
                </view>
                <view class="list-item-placeholder" v-if="itemList.length % 3 == 1">
                </view>
            </view>
        </view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            showLoading: true,
            title: 'Hello 风铃阅读',
            recentItem: {
                title: 'hello',
                cover: '../../static/lolis/a.png',
                writer: 'test'
            },
            itemList: [],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        };
    },

    mounted() {
        this.getData()
    },

    onPullDownRefresh() {
        this.getData();
    },

    methods: {
        setCurrentBook(item){
          this.recentItem = item  
        },
        getData() {
            this.showLoading = true
            setTimeout(() => {
            	this.showLoading = false;
            }, 2000);
            this.itemList = [
                {
                    title: 'hello',
                    cover: '../../static/lolis/a.png',
                    writer: 'test'
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/d.png',
                    writer: '33放大法'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/dd.jpg',
                    writer: ''
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/d.png',
                    writer: '33放大法'
                },
                {
                    title: '呵呵dd发发顺丰的撒',
                    cover: '../../static/lolis/dd.jpg',
                    writer: ''
                },
                {
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                }
            ];
            uni.stopPullDownRefresh();
        },
        previewImg(item) {
            // plus.nativeUI.alert(JSON.stringify(item));
            uni.previewImage({
                urls: [item.cover, '../../static/lolis/ee.jpg', '../../static/lolis/dd.jpg']
            });
            // 从相册选择6张图
            //             uni.chooseImage({
            //                 count: 6,
            //                 sizeType: ['original', 'compressed'],
            //                 sourceType: ['album'],
            //                 success: function(res) {
            //                     // 预览图片
            //                     uni.previewImage({
            //                         urls: res.tempFilePaths
            //                     });
            //                 }
            //             });
        },
        pushItem() {
            const self = this;
            setTimeout(() => {
                self.itemList.push({
                    title: '呵撒',
                    cover: '../../static/lolis/ee.jpg',
                    writer: '33放大法dfafda发发呆'
                });
            }, 300);
        }
    }
};
</script>

<style lang="less">
@import '../../style/variable.less';
.book-shelf-page {
    display: flex;
    flex-flow: column;
    display: flex;
    justify-content: center; /*水平*/

    .top-container {
        height: 200px;
        background: @theme-color-dark;
        color: #fff;
        display: flex;
        align-items: center;
        padding: 0 15px;
        // padding-top: 40px;
        box-sizing: border-box;
        .left-wrap {
            box-shadow: 0 0 5px #ccc;
            // border-radius: 4px;
            overflow: hidden;

            .cover {
                width: 100px;
                height: 120px;
            }
        }

        .right-wrap {
            // color: #fff;
            padding-left: 20px;
            .title {
                font-size: 18px;
                padding-bottom: 10px;
            }

            .writer {
                font-size: 14px;
                padding-bottom: 10px;
            }
            
            .btn-keep-read {
                display: inline-block;
                font-size: 14px;
                border: 1px solid #fff;
                padding: 5px 15px;
            }
        }
    }

    .list-wrap {
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        // align-items: center; /*垂直*/
        flex-wrap: wrap; /*超出宽度强制换行*/
        padding: 15px;
        box-sizing: border-box;

        .list-item {
            width: 30%;
            max-width: 120px;
            // border: 1px solid #eaeaea;
            margin-bottom: 15px;
            // overflow: hidden;
            box-shadow: 0 0 5px #ccc;
            // border-radius: 4px;
            overflow: hidden;

            .cover {
                width: 100%;
                height: 100px;
            }
            .basic-info {
                padding: 5px;
                padding-top: 0;
                .title {
                    font-size: 12px;
                    color: #666;
                    padding-bottom: 5upx;
                }

                .writer {
                    font-size: 10px;
                    color: #999;
                }
            }
        }

        .list-item-plus {
            height: 100px;
            line-height: 100px;
            text-align: center;
            font-size: 40px;
            color: #999;
        }

        .list-item-placeholder {
            width: 30%;
            max-width: 120px;
            margin-bottom: 15px;
        }
    }
}
</style>
