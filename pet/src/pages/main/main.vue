<template>
  <div>
    <pet-header />
    <!--{{datas}}-->
    <div class="main_out_wrap" ref="scrollWrap">
      <div class="main-wrap">
        <div class="swipe-wrap">
          <mt-swipe :auto="2000">
            <mt-swipe-item><img src="./001.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./002.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./003.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./004.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./005.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="./006.jpg"></mt-swipe-item>
          </mt-swipe>
        </div>
        <div class="banner_item"><!----> <!----></div>
        <div class="list-wrap">
          <ul class="list">
            <li class="list-item">
              <img src="./echongtuan.jpg">
            </li>
            <li class="list-item">
              <img src="./li2.jpg">
            </li>
            <li class="list-item">
              <img src="./li3.jpg">
            </li>
            <li class="list-item">
              <img src="./li04.jpg">
            </li>
            <li class="list-item">
              <img src="./li5.jpg">
            </li>
            <li class="list-item">
              <img src="./li6.jpg">
            </li>
            <li class="list-item">
              <img src="./07.jpg">
            </li>
            <li class="list-item">
              <img src="./li8.jpg">
            </li>
            <li class="list-item">
              <img src="./li9.jpg">
            </li>
            <li class="list-item">
              <img src="./li10.jpg">
            </li>
          </ul>
        </div>
        <div class="xline-wrap"><!---->
          <div class="xline">
            <div class="page-line">

            </div>
          </div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
        </div>
        <div class="newUser-wrap">
          <a href="#">
            <img src="./newUser.gif">
          </a>
        </div>
        <div class="surprise_day">
          <div class="surprise_day_top">
            <div class="everyday">
              <img src="./suprice.png">
              <div class="font1">
                距本场结束
              </div>
              <div class="time ftc fl ml5">
                <div class="time1 dib clearfix ft12 dtime">
                  <span class="time1-1">01</span>
                  <span class="time-zi ft12">:</span>
                  <span class="time1-1">27</span>
                  <span class="time-zi ft12">:</span>
                  <span class="time1-1">22</span>
                </div>
              </div>
              <div class="more">
                <a href="#">
                  <img src="./more.jpg">
                </a>
              </div>
            </div>
          </div>
          <div class="surprise_day_bottom">
            <div class="swiper-container">
              <ul class="swiper-wrapper">
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang01.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang02.jpg">
                    </li>
                    <div class="span_wrap">
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang03.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang04.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang05.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang06.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
                <div class="swiper-wrapper2">
                  <a href="#">
                    <li class="swiper-items">
                      <img src="./qiang07.jpg">
                    </li>
                    <div>
                      <span class="m">¥</span>
                      <span class="mub">2.48</span>
                    </div>
                    <p>省￥22.32</p>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="mask">
          <div class="mask_wrap">
            <div class="mask_main_wrap">
              <div class="mask_main">
                <p class="dog">
                  DOG
                  <b>_</b>
                  <span>亲爱的小主</span>
                </p>
                <p class="welcome">您即将进入
                  <span>狗狗站</span>
                </p>
                <ul class="change_ul">
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div class="mask_footer">
                <a href="#">
                  <img src="./close2.png">
                </a>
              </div>
            </div>

          </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>

      </div>
    </div>

  </div>


</template>

<script>
  import header from '../../components/header/header.vue'
  import BScroll from 'better-scroll'

  import {mapState} from 'vuex'

  export default {
    components: {
      'pet-header':header,
    },
    mounted(){
      this.$store.dispatch('requestMenus',() => {
        this.$nextTick(() =>{
          this._initScroll
        })
      })
    },
    methods:{
      _initScroll(){
        new BScroll(this.$refs.scrollWrap)
      }
    },
    computed:{
      ...mapState(['menus'])
    }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">

  .main-wrap
    .swipe-wrap
      width:375px
      height 160px
      img
        width:100%
        height:100%
    .list-wrap
      .list
        overflow: hidden
        .list-item
          display: block
          float: left;
          width:20%
          img
            width:100%
    .banner_item
      min-height: 1px;
      background black
    .xline-wrap
      .page-line
        background: #f3f4f5;
        height: 10px;
    .newUser-wrap
      min-height: 1px;
      width:100%
      a
        display: block;
        img
          width:100%
          height:100%


    .surprise_day
      .surprise_day_top
        overflow: hidden
        padding: 10px
        .everyday
          position relative
          float: left
          img
            height: 24px;
            margin-left: -20px;
            display: block;
            vertical-align: middle;
            float: left;
          .font1
            margin-top: 5px;
            font-size: 13px;
            margin-left: 10px;
            float: left;
          .ml5
            margin-left: 5px;
          .fl
            float: left;
          .ftc
            text-align: center;
            .dib
              display: inline-block;
            .ft12
              font-size: 12px;
              .time1-1
                border 1px solid #ddd
                padding:1px 2px
                font-size 13px

          .more
            width 120px
            height: 55px
            position: absolute;
            top: -6px;
            right:-117px;
            a
              display: block;
              text-align: right;
              width: 100%
              height: 100%
              img
                display: block;
                margin: 0 0 0 auto;
                width: 50%;
                height: 100%
                vertical-align: middle;
                float right





      .surprise_day_bottom
        position: relative;

        .swiper-container

          .swiper-wrapper
            height: 100%;
            position: relative;
            overflow hidden
            white-space:nowrap;
            .swiper-wrapper2
              width: 98.5714px;
              height: 100%;
              margin-right: 10px;
              display:inline-block;
              span
                font-size 12px


              a
                display: block
                width: 85px
                height:100%
                margin: 0 .5em;
                overflow: hidden;
                .swiper-items
                  width: 85px
                  height:84px
                  img
                    width:100%
                    height:100%
                    display: block;
                .span_wrap
                  margin-top: 5px;
                  text-align: center;

    .mask
      display: none
      transition: all .4s linear 0s;
      position: fixed;
      top: 0;
      width: 100%;
      left: 0;
      height: 100%;
      z-index: 104;
      background: #fff;
      .mask_wrap
        display: block;
        top: 106.5px;
        left: 0px;
        width: 100%;
        position: fixed;
        border-radius: 5px;
        z-index: 102;
        overflow: hidden!important;
        .mask_main_wrap
          .mask_main
            max-width: 640px;
            margin: auto;
            .dog
              color: #999;
              position: relative;
              font-size: 16px;
              text-align: center;
              b
                width: 100%;
                position: absolute;
                bottom: 30px;
                left: 0;
                text-align: center;
                color: #000;
                font-size: 12px;
              span
                display block
                font-size: 16px;
                margin-top: 20px;
                text-align: center;
                color: #666;

            .welcome
              color: #333;
              font-size: 20px;
              text-align: center;
              display block
              margin-top 15px
          .mask_footer
            a
              overflow: hidden;
              color: #7e8c8d;
              width: 100%;
              height: 40px;
              line-height: 50px;
              position: fixed;
              bottom: 20px;
              left: 0;
              display: block;
              border-top: 1px solid #e7e7e7;
              z-index: 103;
              img
                display: block
                width: 23px;
                line-height 23px
                vertical-align: middle;
                height:23px
                text-align center
                position: absolute
                right 176.1px
                bottom:0
                /*z-index: 104;*/


</style>
