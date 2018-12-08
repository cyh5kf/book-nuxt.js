<template>
  <section class="container">

    <HeaderNav backName="书籍简介" backUrl="/" />

    <div class="content">
      <div class="top">
        <div class="book_info">
          <img src="http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg" alt="" class="cover">
          <div class="right">
            <p class="name">韭菜的自我修养</p>
            <p class="author">李笑来</p>
            <p class="status">
              <span>连载 </span>
              <span>更新时间2018-11-21</span>
            </p>
            <p class="latest_chapter">
              <span>最新章节:</span>
              <span class="chapter_name">第387章 星魔宫的继承人</span>
            </p>
          </div>
        </div>

        <div class="btn_area">
          <nuxt-link to="/novelText">
            <div class="begin_read">开始阅读</div>
          </nuxt-link>
          
          <div class="join_bookcase">加入书架</div>
        </div>

        <div class="introduction">
          <span>你不是韭菜，你从来都不是韭菜。真的很羡慕你，读过这本小册子！反复读，认真读，一个字也不要漏掉一个字…</span>
          <span class="more">更多</span>
        </div>
      </div>

      <div class="directory">
        <div class="header">
          <div class="left">
            <img src="~assets/images/directory_icon.png" alt="">
            <span>目录正文</span>
          </div>
          <div class="right">
            <img src="~assets/images/sort.svg" alt="">
            <span>倒序</span>
          </div>
        </div>

        <ul class="list">
          <li v-for="(item, index) in directoryList" :key="index" v-text="item.chapterName"></li>
        </ul>
      </div>

      <div class="pagination">
        <div class="pre btn">上一页</div>
        <span class="jump">跳转至：</span>
        <div class="page_index">
          <no-ssr>
            <cube-select
              v-model="pageNum"
              :options="options"
              @change="changePage">
            </cube-select>
          </no-ssr>
          
        </div>
        <div class="next btn">下一页</div>
      </div>

    </div>
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
        directoryList: [
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'},
          {chapterName: '第一章 仙女星'}
        ],
        pageNum: '第1页',
        options: ['第1页','第2页','第3页','第4页','第5页','第6页','第7页',]
      }
    },
    mounted () {
      
    },
    methods: {
      changePage(value, index, text) {
        console.log('change', value, index, text)
      }
    },
    components: {
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0.28rem 0.3rem 0.88rem;
  }

  .top {
    border-bottom: 2px solid #EFEFEF;
    padding-bottom: 0.24rem;
    margin-bottom: 0.3rem;

    .book_info {
      height: 2.8rem;
      margin-bottom: 0.24rem;
      position: relative;

      img.cover {
        width: 2rem;
        height: 2.8rem;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }

      .right {
        width: 100%;
        padding-left: 2.32rem;

        .name {
          margin-bottom: 0.12rem;
          padding-top: 0.52rem;
          font-size: 0.38rem;
          color: #333;
          font-weight: 600;
        }

        .author {
          font-size: 0.32rem;
          font-weight: 500;
          color: #666;
          margin-bottom: 0.16rem;
        }

        .status {
          font-size: 0.28rem;
          font-weight: 500;
          color: #666;
          margin-bottom: 0.12rem;
        }

        .latest_chapter {
          font-size: 0.28rem;
          font-weight: 500;
          color: #666;

          .chapter_name {
            color: #EA5454;
          }
        }
      }
    }

    .btn_area {
      overflow: hidden;
      margin-bottom: 0.3rem;

      .begin_read, .join_bookcase {
        width: 3.2rem;
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        font-size: 0.3rem;
        font-weight: 500;
      }

      .begin_read {
          float: left;
          color: #FFFFFF;
          background-color: #EA5454;
      }

      .join_bookcase {
        float: right;
        color: #333;
        border: 1px solid #EFEFEF;
      }      
    }

    .introduction {
      font-size: 0.26rem;
      color: #666;

      .more {
        color: #4A90E2;
      }
    }
  }
  
  .directory {
    .header {
      overflow: hidden;
      margin-bottom: 0.4rem;

      span {
        font-size: 0.28rem;
        color: #333;
        font-weight: 500;
        position: relative;
        top: 0.04rem;
      }

      .left {
        float: left;

        img {
          width: 0.34rem;
          display: inline-block;
          margin-right: 0.14rem;
        }
        
      }

      .right {
        float: right;

        img {
          width: 0.3rem;
          display: inline-block;
        }
      }
    }
  }

  ul.list {
    margin-bottom: 0.54rem;

    li {
      font-size: 0.28rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 0.4rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  
  .pagination {
    position: relative;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    color: #333;
    font-weight: 500;

    .btn {
      border-radius: 4px;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
      border: 1px solid #EFEFEF;
    }

    .pre {
      position: absolute;
      top: 0;
      left: 0;
      width: 1.6rem;
    }

    .next {
      position: absolute;
      top: 0;
      right: 0;
      width: 1.6rem;
    }

    .jump {
      margin-left: 2rem;
    }

    .page_index {
      width: 1.7rem;
      display: inline-block;

      .cube-select {
        padding: 0.2rem 0.2rem 0.18rem 0.4rem;
        color: #333;
        font-size: 0.3rem;

        .cube-select-icon {
          right: 0.3rem;
        }
        
        &:after {
          border-radius: 4px;
        }
      }
    }
  }

</style>
