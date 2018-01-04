<template>
    <div>
      <pet-header />

      <div class="tab">
        <div class="tab-item">
          <router-link to="/main">首页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/category">分类</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/cart">购物车</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/UserCenter">我的E宠</router-link>
        </div>
      </div>

      <router-view />
    </div>
</template>

<script>
  import header from './components/header/header.vue'


  export default {
    components: {
      'pet-header':header
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    .tab-item
      display: inline-block
      .router-link-active
        color #ff0000



</style>
