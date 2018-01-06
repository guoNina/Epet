<template>
  <div>
    <div class="content_wrap">
      <ul class="router_wrap">
        <div class="left_wrap">
          <li>
            <router-link to="/category/classifiy">
              <span>分类</span>
            </router-link>
          </li>
        </div>

        <div class="right_wrap">
          <li class="brand">
            <router-link to="/category/brand">
              <span>品牌</span>
            </router-link>
          </li>
          <li class="search">
            <router-link to="/category/search">
              <img src="./search-ico.png">
            </router-link>
          </li>
        </div>

      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content_wrap
    width: 100%
    /*height: 500px*/
    background:#f3f4f5;
    overflow: hidden;
    ul
      padding: 0 15px;
      border-bottom: 1px solid #cbcbcb;
      height: 40px;
      width: 100%
      z-index: 11;
      background: #fff;
      font-size: 13px;
      font-weight: 700;
      overflow: hidden;
      .left_wrap
        text-align: right;
        padding-right: 5%;
        width: 50%;
        height: 40px;
        line-height: 40px;
        float: left;
        overflow: hidden;
        a
          color: #333;
          overflow: hidden;
          span
            color: #ed4044;
            border-bottom: 2px solid #ed4044;
            display: inline-block;
            height: 40px;
            padding: 0 4px;
            cursor: pointer;

      .right_wrap
        padding-left: 5%;
        width: 50%;
        height: 40px;
        line-height: 40px;
        float: left;
        overflow: hidden;
        .brand
          overflow: hidden;
          display: block
          float: left;
          a
            color: #333;
            display: block
            position: relative
            overflow: hidden;
        .search
          overflow: hidden;
          float: right
          top: 13px;
          right: 15px;
          position: absolute;
          a
            color: #333;
            display: block
            position: relative
            img
              display: block
              width: 14px;
              height: 14px;



</style>
