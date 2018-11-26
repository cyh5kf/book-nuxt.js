<template>
  <section class="container">
    <!-- 头部导航 -->
    <header>
      <div class="avatar">
        <p class="top">西子追书</p>
        <p class="bottom">novel west</p>
      </div>
      <div class="tab_list">
        <div class="gender active">
          男生
          <span></span>
        </div>
        <div class="gender">
          女生
          <span></span>
        </div>
      </div>
      <div class="search_btn"></div>
    </header>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>


    <!-- 分类 -->
    <div class="sort">
      <div class="sub">
        <img src="~assets/images/rank_icon.png" alt="" class="icon">
        <p>排行</p>
      </div>
      <div class="sub center">
        <img src="~assets/images/sort_icon.png" alt="" class="icon">
        <p>分类</p>
      </div>
      <div class="sub">
        <img src="~assets/images/book_icon.png" alt="" class="icon">
        <p>完本</p>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';

export default {
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
    // const swiper = new Swiper('.swiper-container',{
    //     autoplayDisableOnInteraction: false,
    //     autoplay: 3000,
    //     loop: true,
    //     pagination: '.swiper-pagination',
    //     paginationClickable :true,
    // })
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/css/swiper.min.css";
  header {
    padding: 0.34rem 0.32rem 0.32rem;
    overflow: hidden;
    position: relative;

    .avatar {
      color: #333;
      float: left;

      .top {
        height: 0.4rem;
        line-height: 0.4rem;
        font-size: 0.29rem;
        
      }

      .bottom {
        height: 0.26rem;
        font-size: 0.21rem;
        line-height: 0.26rem;
      }
    }

    .tab_list {
      margin: 0.04rem 0 0 1.14rem;
      color: #333;
      float: left;

      .gender {
        font-size: 0.36rem;
        float: left;
        height: 0.5rem;

        span {
          display: none;
        }

        &:last-child {
          margin-left: 0.84rem;
        }
      }

      .active {
        position: relative;
        span {
          display: block;
          position: absolute;
          width: 0.72rem;
          height: 0.06rem;
          border-radius: 4px;
          background-color: #EA5454;
          bottom: -0.1rem;
        }
      }
    }

    .search_btn {
      background: url('~assets/images/search_btn.png') no-repeat;
      background-size: cover;
      width: 0.44rem;
      height: 0.44rem;
      position: absolute;
      top: 0.38rem;
      right: 0.32rem;
    }
  }

  .swiper-container {
      width: 100%;
      height: 3rem;
      .swiper-slide {
        text-align: center;
        font-size: 0.18rem;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }
    }
    
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
      bottom: 0.9rem;
  }

  .sort {
    padding: 0.36rem 0.7rem 0.42rem;

    .sub {
      overflow: hidden;
      &:first-child {
        float: left;
      }

      &:last-child {
        float: right;
      }

      .center {
        margin: 0 auto;
      }

      .icon {
        width: 0.76rem;
        height: 0.76rem;
      }

      p {
        font-size: 0.28rem;
        color: #333;
      }

    }
  }

</style>
