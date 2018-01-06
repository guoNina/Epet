<template>
    <div class="header">
      <div class="wrap">
        <div class="overflow xiazaiApp">
          <div class="overflow rela">
            <div class="appdowimg">
              <a href="#">
                <img src="../../common/images/banner.jpg">
              </a>
              <span class="closebtn">
                <img src="./closebtn_03.png">
              </span>
            </div>
          </div>
        </div>
        <div class="indexheader">
        </div>
      </div>
      <div class="outWrap">
        <div class="bottom-wrap">
          <a href="#">
            <span class="dogswitch c89">狗狗站</span>
            <span class="fenge c89">|</span>
            <span class="place c89">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a href="https://wap.epet.com/search.html?pet_type=dog&amp;fw=0">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="eico serach-ico"></span>
          </a>
        </p>
        <a href="https://wap.epet.com/wappms/pms.html?fw=0" class="epet-category">
          <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
        </a>


      </div>
      <div class="find_nav">
        <div class="find_nav_left dscroll">
          <div class="find_nav_list dscroll-div" style="width: 140%;">
            <ul class="dscroll-ul">
              <li data-type="0" data-shareid="1" class="dscroll-li on" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=0&amp;pet_type=dog&amp;fw=0"><!---->
                  <span class="rela">
                    <span>首页</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li data-type="" data-shareid="0" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/clothmall/main.html?pet_type=dog&amp;fw=0"><!---->
                  <span>
                    <span>服饰城</span>
                  <i></i>
                </span>
                </a>
              </li>
              <li data-type="123" data-shareid="372" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=123&amp;pet_type=dog&amp;is_single=1&amp;fw=0"><!---->
                  <span>
                    <span>狗狗主粮</span>
                  <i></i>
                </span>
                </a>
              </li>
              <li data-type="125" data-shareid="374" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=125&amp;pet_type=dog&amp;is_single=1&amp;fw=0"><!---->
                  <span>
                    <span>医疗保健</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li data-type="131" data-shareid="375" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=131&amp;pet_type=dog&amp;is_single=1&amp;fw=0"><!---->
                  <span>
                    <span>零食玩具</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li data-type="134" data-shareid="0" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=134&amp;pet_type=dog&amp;is_single=1&amp;fw=0"><!---->
                  <span>
                    <span>日用外出</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li data-type="140" data-shareid="371" class="dscroll-li" style="width: 74.6429px;">
                <a href="https://wap.epet.com/main.html?menu_param=140&amp;pet_type=dog&amp;is_single=1&amp;fw=0"><!---->
                  <span>
                    <span>美容香波</span>
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    position fixed
      top:0
      left:0
    width: 375px
    overflow hidden
    .wrap
      /*position relative*/
      .overflow
        overflow hidden

      .xiazaiApp
        position relative
        max-width 640px
        margin 0 auto
        color #fff
        z-index: 102
        width:100%
        .rela

          .appdowimg
            position relative
            a
              overflow: hidden;
              img
                width:100%
            .closebtn
              display: inline-block;
              width: 5%;
              margin-right: 2%;
              vertical-align: middle;
              position: absolute;
              top: 20%;
              left: 2%;
              img
                width: 18.75px
                height: 18.75px



    .indexheader
      .indexnavcon
        height:86px
        .headerbox
          float: left;
          .main
            max-width: 640px;
            margin: auto;
            .clearfix pt5 pl10 pr10 pb5
              .epet-search bgf
                padding: 8px 0;
                background: #fff;
                text-align: center;
                display: -webkit-box;
                -webkit-box-align: center;
                display: -moz-box;
                -moz-box-align: center;
                /*width: 100%;*/
            .find_nav
              float left
              width: 100%;
              height: 35px;
              min-width: 320px;


    .outWrap
      overflow: hidden
      padding: 10px 5px
      .bottom-wrap
        margin-right 20px
        margin-top: 3px;
        float: left;
        a
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          .c89
            color: #898989
            font-size 14px
          i
            position: absolute;
            top: 75px;
            right: 276px;
            border-width: 4px;
            font-size: 0;
            line-height: 0;
            border-style: solid solid dotted;
            border-color: #898989 transparent transparent;
      .search-text
        width: 220px;
        height: 25px;
        float: left;
        a
          color: #333;
          -webkit-box-flex: 1
          width: 100%
          height: 100%
          display: block
          overflow: hidden;

          input
            width: 100%
            height: 100%
            border: 0;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;


      a
        display: block
        img
          width: 25px;
          margin-left: 10px;
          vertical-align: middle;
          float: right;
    .find_nav
      width: 100%;
      height: 35px;
      min-width: 320px;
      .dscroll
        overflow-x: auto;
        overflow-y: hidden;
        .dscroll-ul
          white-space: nowrap;
          display: flex;
          list-style: none;
          li
            width: 25%;
            float: left;
            list-style: none;
            a
              display: block;
              width: 100%;
              height: 100%;
              line-height: 36px;
              font-size: 14px;
              text-align: center;
              color: #666;


              .rela
                position: relative;
                color: #459d36;
                display: inline-block;
                i
                  position: absolute;
                  bottom: 1px;
                  left: -10%;
                  width: 120%;
                  height: 2px;
                  background: #459d36;


</style>
