<template>
	<view class="book-shelf-page">
		<view class="list-wrap">
            <view class="list-item" v-for="(item,index) in itemList" :key="index">
            	<image :src="item.cover" class="cover" mode="scaleToFill"></image>
                <div class="basic-info">
                <view class="title">
                	{{item.title}}
                </view>
                <view class="writer">
                	{{item.writer}}
                </view>
                </div>
            </view>
            
            <view class="list-item list-item-plus" @click="pushItem">
            	+
            </view>
        </view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello 风铃阅读',
            itemList: [
                {
                    title: 'hello',
                    cover: '../../static/lolis/a.png',
                    writer: 'test'
                },
                {
                    title: 'hell2o',
                    cover: '../../static/lolis/b.png',
                    writer: 'vfv'
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
            ],
            indicatorDots: true,
            autoplay: true,
            interval: 5000,
            duration: 500
        };
    },
    
    methods:{
        pushItem(){
            this.itemList.push({
                title: '呵撒',
                cover: '../../static/lolis/ee.jpg',
                writer: '33放大法dfafda发发呆'
            })
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
    padding: 15px;

    .list-wrap {
        width: 100%;
        max-width: 100%;
        display: flex;
        justify-content: space-between;
        // align-items: center; /*垂直*/
        flex-wrap: wrap; /*超出宽度强制换行*/
        .list-item {
            width: 30%;
            // border: 1px solid #eaeaea;
            margin-bottom: 15px;
            // overflow: hidden;
            box-shadow: 0 0 5px #ccc;
            border-radius: 4px;
            overflow: hidden;

            .cover {
                width: 100%;
                height: 100px;
            }
            .basic-info {
                padding: 5px;
                padding-top: 0;
                .title {
                    font-size: 14px;
                    color: #666;
                    padding-bottom: 5upx;
                }

                .writer {
                    font-size: 12px;
                    color: #999;
                }
            }
        }
        
        .list-item-plus {
            height: 120px;
            line-height: 120px;
            text-align: center;
            font-size: 40px;
            color: #999;
        }
    }
}
</style>
