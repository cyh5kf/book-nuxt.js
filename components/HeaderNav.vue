<template>
  <div class="header_nav">
    <div class="back_btn">
      <nuxt-link :to="backUrl">
        <img src="~/assets/images/left_arrow.svg" alt="">
      </nuxt-link>
      <span v-text="backName"></span>
    </div>
    
    <nuxt-link to="/">
      <div class="go_home">首页</div>
    </nuxt-link>
  </div>
</template>

<script>

  export default {
    props: ['backName', 'backUrl']
  }

</script>


<style lang="scss" scoped>
  .header_nav {
    width: 100%;
    border: 2px solid #EFEFEF;
    padding: 0.28rem 0.3rem 0.26rem 0.34rem;
    overflow: hidden;

    .back_btn {
      float: left;
      padding-left: 0.62rem;
      position: relative;
      height: 0.6rem;
      line-height: 0.6rem;

      img {
        width: 0.2rem;
        height: 0.36rem;
        position: absolute;
        top: 0.12rem;
        left: 0;
      }

      span {
        color: #333;
        font-size: 0.32rem;
        
      }
    }

    .go_home {
      float: right;
      width: 1rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      background-color: #EA5454;
      font-size: 0.28rem;
    }
  }
</style>
