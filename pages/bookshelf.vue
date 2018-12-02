<template>
  <section class="container">

    <div class="header_nav">
      <nuxt-link to="/" class="back_btn">
        <img src="~/assets/images/left_arrow.svg" alt="">
      </nuxt-link>

      <ul class="tab">
        <li v-for="(itme,index) in tabList" :key="index" :class="tabIndex===index? 'active': ''"  @click="getItem(index)" v-text="itme"></li>
      </ul>
      
      <div class="edit_btn" v-show="tabIndex === 0">编辑</div>
      <div class="edit_btn" v-show="tabIndex === 1" @click="clearHistory">清空</div>
    </div>

    <div class="content" v-show="tabIndex === 0">
      <div v-for="(item, index) in bookshelfList" :key="index" class="card">
        <div class="img_wrap">
          <img :src="item.coverUrl" alt="">
          <span>更新</span>
        </div>
        <div class="detail">
          <p class="name" v-text="item.name"></p>
          <p class="subtitle" v-text="item.subtitle"></p>
          <p class="introduction" v-text="item.introduction"></p>
        </div>
      </div>
    </div>

    <div class="content" v-show="tabIndex === 1">
      <div v-for="(item, index) in historyList" :key="index" class="card">
        <div class="img_wrap">
          <img :src="item.coverUrl" alt="">
          <span>更新</span>
        </div>
        <div class="detail">
          <p class="name" v-text="item.name"></p>
          <p class="subtitle" v-text="item.subtitle"></p>
          <p class="introduction" v-text="item.introduction"></p>
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';

  export default {
    data() {
      return {
        tabList: ['我的书架', '阅读历史'],
        tabIndex: 0, // 列表切换，0：我的书架，1：阅读历史
        bookshelfList: [ // 我的书架列表
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          }
        ],
        historyList: [
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          }
        ]
      }
    },
    methods: {
      // 切换列表
      getItem(index) {
        this.tabIndex = index;
      },
      // 清空阅读历史
      clearHistory() {
        this.historyList = [];
      }
    },
    components: {
      BookCard
    }
  }
</script>

<style lang="scss" scoped>
  .header_nav {
    width: 100%;
    border: 2px solid #EFEFEF;
    padding: 0.2rem 0 0.24rem;
    overflow: hidden;
    position: relative;

    .back_btn {
      position: absolute;
      top: 0.4rem;
      left: 0.34rem;
      display: block;

      img {
        display: block;
        width: 0.2rem;
        height: 0.36rem;
      }
    }

    .tab {
      border-radius:38px;
      border:2px solid #EA5454;
      overflow: hidden;
      margin-left: 1.42rem;
      width: 4rem;

      li {
        width: 50%;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        font-size: 0.32rem;
        font-weight: 500;
        color: #EA5454;
        float: left;
      }

      .active {
        background-color: #EA5454;
        color: #fff;
      }
      
    }

    .edit_btn {
      width: 1rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      background-color: #EA5454;
      font-size: 0.28rem;
      position: absolute;
      top: 0.28rem;
      right: 0.3rem;
    }
  }

  .card {
    width: 100%;
    height: 1.68rem;
    position: relative;
    margin-bottom: 0.28rem;

    &:last-child {
      margin-bottom: 0;
    }

    .img_wrap {
      position: absolute;
      top: 0;
      left: 0;

      img {
        width: 1.34rem;
        height: 1.68rem;
        border-radius:6px;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.67rem;
        height: 0.39rem;
        line-height: 0.39rem;
        text-align: center;
        background-color: #FF5770;
        color: #fff;
        font-size: 0.22rem;
        border-radius: 6px 0 6px 0;
      }
    }

    .detail {
      width: 100%;
      padding-left: 1.54rem;

      .name {
        font-size: 0.3rem;
        color: #333;
        font-weight: 600;
        padding: 0.16rem 0 0.14rem;
      }

      .subtitle, .introduction {
        color: #999;
        font-size: 0.26rem;
      }

      .subtitle {
        padding-bottom: 0.08rem;
      }
    }
  }

  .content {
    padding: 0.4rem 0.3rem 0.7rem;
  }

</style>
