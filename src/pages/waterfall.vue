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
                <div class="item" @click="showImg(i)" v-for="(i,index) in col_1" :key="i">
                    <van-image
                            use-error-slot
                            :src="i.path"
                            width="100%"
                            :height="i.randomHeight"
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
                <div class="item" v-for="(i,index) in col_2"
                     :key="i.name"
                     @click="showImg(i)"
                >
                    <!--<img mode='widthFix' :src="i.path" :alt="i.name">-->
                    <van-image
                            use-error-slot
                            :src="i.path"
                            width="100%"
                            :height="i.randomHeight"
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
                <div class="item" v-for="(i,index) in col_3"
                     :key="i.name"
                     @click="showImg(i)"
                >
                    <!--<img mode='widthFix' :src="i.path" :alt="i.name">-->
                    <van-image
                            use-error-slot
                            :src="i.path"
                            width="100%"
                            :height="i.randomHeight"
                            lazy-load
                            fit="cover"
                            show-menu-by-longpress="true"
                    >
                        <text slot="error">加载失败</text>
                    </van-image>
                </div>
            </div>
        </div>
        <!--popup-->
        <van-popup :show="isShowPop" @close="onPopClose" class="pic-popup">
            <img :src="currentImg.path"
            :style={height:currentImg.height/10,width:currentImg.width/10}
                 mode="widthFix"
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
  //import data from '../js/waterfallData'
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
        col_test_2:[]
      }
    },
    methods: {
      initMasonryData(){
        //处理node的数据
        let data = imgData
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
        console.log(131,this.col_2[0])
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
                    border: solid 1px red;
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
                padding: 30rpx;
                max-width: 90%;
                max-height: 90%;
            }
        }
    }
</style>
[object Object],[object Object],[object Object],[object Object],[object Object]
