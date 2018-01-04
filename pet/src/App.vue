<template>
    <div>
      <pet-header />
      <div class="tab">
        <div class="tab-item">
          <router-link to="/main">
            <img src="./common/images/1.png">
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/category">
            <img src="./pages/category/classifiy.png">
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/cart">
            <img src="./pages/cart/cart.png">
          </router-link>
        </div>
        <div class="tab-item">
          <router-link to="/UserCenter">
            <img src="./pages/UserCenter/UserCenter.png">
          </router-link>
        </div>
      </div>

      <router-view />
    </div>
</template>

<script>
  import header from './components/header/header.vue'



  export default {
    components: {
      'pet-header':header,


    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    position fixed
    bottom 0
    left:0
    width:100%
    height: 45px
    .tab-item
      float: left;
      width:25%
      height: 55px
      text-align center
      line-height 55px

      .router-link-active
        color #ff0000

        background-size: 234px 163px;
        margin: 0 auto;
        height: 40px;
        width: 42px;
        margin-top: 2px;





</style>
