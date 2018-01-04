<template>
    <div class="swipe-wrap">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="./001.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./002.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./003.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./004.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./005.jpg"></mt-swipe-item>
        <mt-swipe-item><img src="./006.jpg"></mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  export default {}

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swipe-wrap
    width:375px
    height 160px
    img
      width:100%
      height:100%

</style>
