<template>
  <div>
    <pet-header />
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


</template>

<script>
  import header from '../../components/header/header.vue'
  export default {
    components: {
      'pet-header':header,
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

  /*color: red;*/






</style>
