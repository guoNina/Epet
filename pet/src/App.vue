<template>
    <div>
      <div class="tab">
        <div class="tab-son">
          <div class="tab-item">
            <router-link to="/main">
            </router-link>
          </div>
        </div>
        <div class="tab-son">
          <div class="tab-item1">
            <router-link to="/category">
            </router-link>
          </div>
        </div>
        <div class="tab-son">
          <div class="tab-item2">
            <router-link to="/cart">
            </router-link>
          </div>
        </div>
        <div class="tab-son">
          <div class="tab-item3">
            <router-link to="/usercenter">
            </router-link>
          </div>
        </div>
      </div>

      <router-view />
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    mounted (){
   /*   this.$http.get('./api/menus')
        .then(response => {
          const result = response.data
          console.log('vue-resource',result);
        })*/
      /*axios.$http.get('./api2/datas')
        .then(response => {
          const result = response.data
          console.log('axios',result);
        })*/
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    height: 45px;
    line-height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 103;
    border-top: 1px solid #e7e7e7;
    background-color white
    .tab-son
      float: left;
      width:25%
      height:100%
      .tab-item a,.tab-item1 a,.tab-item2 a,.tab-item3 a
        display: block
        background: url(./common/images/img.png) no-repeat;
        background-size: 234px 163px;
        margin:0 auto
        width: 42px
        height: 40px
        margin-top: 2px;

      .tab-item1  a
        background-position: 0 -40px;
      .tab-item a
        background-position: -85px 0;
      .tab-item2  a
        background-position: -85px -81px;
      .tab-item3  a
        background-position: -85px -122px;



        /*.router-link-active
          color #ff0000
          display: block
          background-position: 0 0;
          background-position: -85px 0;
          background: url(./common/images/img.png) no-repeat;
          background-size: 234px 163px;
          margin: 0 auto;
          height: 40px;
          width: 42px;
          margin-top: 2px;*/











</style>
