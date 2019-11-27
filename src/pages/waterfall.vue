<template>
    <div class="p-waterfall">
        <!--<div class="p-skeleton">
            <van-skeleton
                    row="3"
                    row-width="50px"
            >
            </van-skeleton>
            <van-skeleton
                    row="3"
                    row-width="50px"
            >
            </van-skeleton>
            <van-skeleton
                    row="3"
                    row-width="50px"
            >
            </van-skeleton>
        </div>-->
        <div class="waterfall-panel">
            <!-- 第一列 -->
            <div class="column">
                <div>第一列</div>
                <!--<div class="item" @click="showImg(i.img)" v-for="(i,index) in col_1" :key="i.value">
                    <img mode='widthFix' :src="i.img" :alt="i.value">
                </div>-->
                <div class="item" @click="showImg(i)" v-for="(i,index) in col_test_1" :key="i">
                    <!--<img :src="i" alt="" mode='widthFix'>-->
                    <van-image
                            use-error-slot
                            :src="i.path"
                            width="100%"
                            :height="i.height"
                            lazy-load
                            fit="cover"
                            show-menu-by-longpress="true"
                    >
                        <text slot="error">加载失败</text>
                    </van-image>
                </div>
            </div>
            <!-- 第二列 -->
            <div class="column">
                <div>第二列</div>
                <div class="item" v-for="(i,index) in col_test_2" :key="i.name">
                    <!--<img mode='widthFix' :src="i.path" :alt="i.name">-->
                    <van-image
                            use-error-slot
                            :src="i.path"
                            width="100%"
                            height="260px"
                            lazy-load
                            fit="cover"
                            show-menu-by-longpress="true"
                    >
                        <text slot="error">加载失败</text>
                    </van-image>
                </div>
            </div>
            <!-- 第三列 -->
            <div class="column">
                <div>第三列</div>
                <div class="item" v-for="(i,index) in col_3" :key="i.value">
                    <img mode='widthFix' :src="i.img" :alt="i.value">
                </div>
            </div>
        </div>
        <!--popup-->
        <van-popup :show="isShowPop" @close="onPopClose" class="pic-popup">
            {{currentImg.initialWidth}}-{{currentImg.initialHeight}}
            <img :src="currentImg.path"

                 :style={height:currentImg.initialHeight,width:currentImg.initialWidth}
            >
                <!--<van-image
                        use-error-slot
                        :src="currentImg.path"
                        :width="currentImg.initialWidth"
                        :height="currentImg.initialHeight"
                        lazy-load
                        fit="none"
                        show-menu-by-longpress="true"
                >
                    <text slot="error">加载失败</text>
                </van-image>-->
        </van-popup>

    </div>
</template>
<script>
  import data from '../js/waterfallData'
  import imgData from '../js/imgData.json'
  export default {
    name: '',
    data() {
      return {
        col_1:[],
        col_2:[],
        col_3:[],
        currentImg:{},
        isShowPop: false,
        col_test_1:[
          {
            path:'/static/img/1.png',
            initialWidth:'236px',
            initialHeight:'236px',
            height: '200px'
          },{
            path:'/static/img/2.png',
            initialWidth:'236px',
            initialHeight:'258px',
            height: '200px'
          },{
            path:'/static/img/3.png',
            initialWidth:'236px',
            initialHeight:'461px',
            height: '200px'
          },{
            path:'/static/img/4.png',
            initialWidth:'236px',
            initialHeight:'298px',
            height: '200px'
          },

        ],
        col_test_2:[]
      }
    },
    methods: {
      initMasonryData(){
        let n = 0
        while (n < data.length) {
          this.col_1.push(data[n++])
          if(data[n]){
            this.col_2.push(data[n++])
          }
          if(data[n]){
            this.col_3.push(data[n++])
          }
        }
        //处理node的数据
        console.log(134,imgData)
        this.col_test_2 = imgData
      },
      showImg(img){
        this.currentImg = img
        this.isShowPop = true
        console.log(136,this.currentImg)
        /*wx.previewImage({
          current: path, // 当前显示图片的http链接
          urls: this.col_test_1 // 需要预览的图片http链接列表
        })*/
      },
      onPopClose(){
        this.isShowPop = false
      }
    },
    components: {},
    onShow() {
        this.initMasonryData()
    }
  }
</script>
<style lang="scss" scoped>
    .p-waterfall {
        padding-top: 130rpx;
        width: 100%;
        .p-skeleton{
            @include vertical-center;
            justify-content: space-between;
        }
        .waterfall-panel{
            width: 100%;
            display: flex;
            .column{
                display: flex;
                flex-direction: column;
                flex: 1;
                padding: 0 2px;
                >div:first-child{
                    @include vertical-center;
                    padding: 6px;
                    font-weight: bolder;
                    font-family: 微软雅黑;
                }
                .item {
                    padding-bottom: 2px;
                    width: 100%;
                    img{
                        height: 100%;
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
<style  lang="scss" >
    .p-waterfall{
        .pic-popup{
            .van-popup{
                padding: 30px;
            }
        }
    }
</style>
[object Object],[object Object],[object Object],[object Object],[object Object]
