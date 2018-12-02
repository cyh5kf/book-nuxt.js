<template>
  <section class="container">

    <HeaderNav backName="排行榜" backUrl="/" />

    <div class="content">
      <div class="booklist_wrap">
        <div class="title">
          <span class="name">热推榜</span>
          <nuxt-link to="/hotList">
            <img src="~assets/images/right_arrow.svg" alt="">
          </nuxt-link>
        </div>
        <div class="card" v-for="(item, index) in rankList" :key="index" >
          <img :src="item.coverUrl" alt="">
          <div class="detail">
            <p class="name" v-text="item.name"></p>
            <p class="subtitle" v-text="item.subtitle"></p>
            <p class="introduction" v-text="item.introduction"></p>
          </div>
        </div>
      </div>

      <div class="booklist_wrap">
        <div class="title">
          <span class="name">新书榜</span>
          <nuxt-link to="/newList">
            <img src="~assets/images/right_arrow.svg" alt="">
          </nuxt-link>
          
        </div>
        <div class="card" v-for="(item, index) in rankList" :key="index" >
          <img :src="item.coverUrl" alt="">
          <div class="detail">
            <p class="name" v-text="item.name"></p>
            <p class="subtitle" v-text="item.subtitle"></p>
            <p class="introduction" v-text="item.introduction"></p>
          </div>
        </div>
      </div>

      <div class="booklist_wrap">
        <div class="title">
          <span class="name">完结榜</span>
          <nuxt-link to="/finishList">
            <img src="~assets/images/right_arrow.svg" alt="">
          </nuxt-link>
          
        </div>
        <div class="card" v-for="(item, index) in rankList" :key="index" >
          <img :src="item.coverUrl" alt="">
          <div class="detail">
            <p class="name" v-text="item.name"></p>
            <p class="subtitle" v-text="item.subtitle"></p>
            <p class="introduction" v-text="item.introduction"></p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
        rankList: [
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
        ]
      }
    },
    components: {
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>

  .content {
    padding: 0.26rem 0 0.32rem;
  }

  .booklist_wrap {
    padding: 0 0.3rem 0;
    margin-bottom: 0.4rem;

    .title {
      position: relative;
      color: #333;
      overflow: hidden;
      width: 100%;
      margin-bottom: 0.26rem;

      .name {
        font-size: 0.36rem;
        height: 0.5rem;
        line-height: 0.5rem;
        float: left;
      }

      img {
        display: block;
        width: 0.18rem;
        height: 0.33rem;
        position: absolute;
        top: 0.1rem;
        right: 0;
      }
    }

    .card {
      width: 100%;
      height: 1.7rem;
      position: relative;
      margin-bottom: 0.26rem;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        width: 1.4rem;
        height: 1.7rem;
        box-shadow:0px 4px 8px 0px rgba(0,0,0,0.08);
        position: absolute;
        top: 0;
        left: 0;
      }

      .detail {
        width: 100%;
        padding-left: 1.64rem;

        .name {
          font-size: 0.3rem;
          color: #333;
          font-weight: 600;
          padding: 0.02rem 0 0.18rem;
        }

        .subtitle, .introduction {
          color: #666;
          font-size: 0.28rem;
        }

        .subtitle {
          padding-bottom: 0.1rem;
        }
      }
    }
  }

</style>
