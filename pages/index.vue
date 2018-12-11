<template>
  <section class="container">
    <!-- 头部导航 -->
    <header>
      <div class="avatar">
        <p class="top">西子追书</p>
        <p class="bottom">novel west</p>
      </div>
      <div class="tab_list">
        <div :class="{gender: true, active: gender === 'boy'}" @click="changeGender('boy')">
          男生
          <span></span>
        </div>
        <div :class="{gender: true, active: gender === 'girl'}" @click="changeGender('girl')">
          女生
          <span></span>
        </div>
      </div>
      <nuxt-link to="/search" class="search_btn"></nuxt-link>
    </header>

    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~assets/images/banner.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/images/banner.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/images/banner.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/images/banner.png" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~assets/images/banner.png" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 分类 -->
    <div class="sort">
      <nuxt-link to="/rankList" class="sub">
        <img src="~assets/images/rank_icon.svg" alt="" class="icon">
        <p>排行</p>
      </nuxt-link>
      <nuxt-link to="/sort" class="sub center">
        <img src="~assets/images/sort_icon.svg" alt="" class="icon">
        <p>分类</p>
      </nuxt-link>
      <nuxt-link to="/finishList" class="sub wanben">
        <img src="~assets/images/book_icon.svg" alt="" class="icon">
        <p>完本</p>
      </nuxt-link>
      
      <div class="clear"></div>
    </div>

    <div class="book_list_wrap">
      <BookList :dataList="bookList" titleName="本周热推" goUrl="/hotList" />
    </div>
    
    <div class="book_list_wrap">
      <BookList :dataList="bookList" titleName="新书抢先" goUrl="/newList" />
    </div>
    

    <div class="recommend">
      <p class="title">书友推荐</p>
      <ul class="content">
        <li class="bookItem" v-for="(item, index) in recommendList" :key="index">
          <img src="http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg" alt="">
          <p class="name">无敌小皇叔</p>
          <p class="author">唐家三少</p>
        </li>
      </ul>
    </div>

    <div class="book_list_wrap">
      <BookList :dataList="bookList" titleName="完本推荐" goUrl="/finishList" />
    </div>

    <div class="ad">
      <img src="~assets/images/ad.png" alt="">
      <span>屠龙宝刀，点击就送</span>
      <div class="btn_download">立即下载</div>
    </div>

    <nuxt-link to="/bookshelf" class="btn_bookshelf">
      <p>进入书架</p>
    </nuxt-link>

  </section>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import BookList from '~/components/BookList';

  export default {
    data() {
      return {
        gender: 'boy', // 性别
        recommendList: [1,1,1,1,1,1],
        bookList: [
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          }
        ],
        boyBookList: [
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          }
        ],
        girlBookList: [
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '全民领主',
            subtitle: '唐家三少·都市·连载·37万字',
            introduction: '这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...'
          }
        ],
      }
    },
    async asyncData ({ app }) {

      // const deviceId = uuid.v4();
      // console.log('deviceId:' + deviceId);
      // const query = {
      //     // id: "1",
      //     // jsonrpc: "2.0",
      //     method: "activate",
      //     params: [
      //       {
      //           clientInfo: {
      //               lang: "zh-CN",
      //               osVersion: "12",
      //               clientVersion: "c",
      //               deviceId: deviceId,
      //               manufactory: "m",
      //               machineMode: "mode",
      //               deviceType: 2
      //           },
      //           identity: {
      //               "appName": "yyzshz"
      //           }
      //       }
      //   ]
      // }

      // const res = await api.post('/no-auth/user-rpc', query);
      // console.log(res)
    },
    async mounted () {

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
    methods: {
      // 切换性别列表
      changeGender(gender) {
        this.gender = gender;
        this.bookList = gender === 'boy'? this.boyBookList: this.girlBookList;
      }
    },
    components: {
      BookList
    }
  }
</script>

<style lang="scss" scoped>

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
      background: url('~assets/images/search_btn.svg') no-repeat;
      background-size: cover;
      display: block;
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
    overflow: hidden;
  }

  .sort {
    padding: 0.36rem 0.7rem 0.42rem;

    .sub {
      text-align: center;

      img {
        margin-bottom: 0.12rem;
      }
      
      &:first-child {
        float: left;
        width: 0.82rem;
      }

      p {
        font-size: 0.28rem;
        color: #333;
      }

    }

    .wanben {
      float: right;
      width: 0.76rem;

      img {
        padding: 0.04rem 0 0.06rem;
      }
    }

    .center {
      margin-left: 1.88rem;
      float: left;
      width: 0.76rem;

      img {
        padding-top: 0.04rem;
      }
      
    }
  }

  .recommend {
    padding: 0 0.3rem 0.12rem;

    .title {
      font-size: 0.36rem;
      color: #333;
      padding-bottom: 0.24rem;
    }

    .content {
      width: 6.9rem;
      overflow: hidden;

      .bookItem {
        margin-right: 1.02rem;
        margin-bottom: 0.32rem;
        float: left;

        &:nth-child(3n+0) {
          margin-right: 0;
        }
        
        img {
          display: block;
          width: 1.6rem;
          height: 1.92rem;
          box-shadow:0px 4px 8px 0px rgba(0,0,0,0.08);
        }

        .name {
          font-size: 0.3rem;
          color: #333;
          font-weight: 600;
        }

        .author {
          font-size: 0.28rem;
          color: #666;
        }
      }
    }
  }

  .book_list_wrap {
    padding-bottom: 0.48rem;
  }
  
  .btn_bookshelf {
    background: url('~assets/images/btn_bookshelf.svg') no-repeat;
    background-size: cover;
    width: 1.6rem;
    height: 1.6rem;
    position: fixed;
    top: 7.98rem;
    right: 0.3rem;

    p {
      width: 0.76rem;
      margin: 0.32rem auto 0;
      font-size: 0.36rem;
      color: #fff;
      line-height: 0.48rem;
    }
  }

  .ad {
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    padding-left: 1.2rem;
    font-size: 0.28rem;
    box-shadow:0px 0px 10px 0px rgba(51,51,51,0.24);
    position: relative;

    span {
      color: #333;
    }

    img {
      width: 0.72rem;
      height: 0.82rem;
      border-radius: 4px;
      position: absolute;
      top: 0.24rem;
      left: 0.24rem;
    }
    
    .btn_download {
      width: 1.48rem;
      height: 0.58rem;
      line-height: 0.58rem;
      text-align: center;
      background-color: #EA5454;
      color: #fff;
      position: absolute;
      top: 0.38rem;
      right: 0.34rem;
    }
  }

</style>
