<template>
  <section class="container">

    <HeaderNav backName="搜索" backUrl="/" />

    <div class="input_box">
      <img src="~assets/images/search_btn.svg">
      <input 
        type="text"
        placeholder="请输入书名/作者名/关键词"
        @input="inputFunc()"
        @keydown.enter="search"
        v-model="searchValue"
        autocomplete="false"
      />
    </div>

    <div class="popular_searches" v-show="!isInput">
      <h1>热门搜索</h1>

      <ul class="content">
        <li>
          <i class="hot">热</i>
          <span>全民领主</span>
        </li>
        <li>
          <i class="new">新</i>
          <span>炮灰农女的逆袭</span>
        </li>
        <li>
          <i class="up_arrow"></i>
          <span>王爷，奴家减个肥</span>
        </li>
        <li>
          <i class="up_arrow"></i>
          <span>一笙有喜</span>
        </li>
      </ul>
    </div>

    <div class="search_result" v-show="isInput && bookList.length > 0">
      <BookCard v-for="(item, index) in bookList" :searchResult="searchResult" :data="item" :key="index"  />
    </div>

    <NoResult text="暂无搜索结果～" v-show="isInput && bookList.length === 0" />
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';
  import HeaderNav from '~/components/HeaderNav';
  import NoResult from '~/components/NoResult';

  export default {
    data() {
      return {
        bookList: [
        ],
        isInput: false, // 是否处于输入状态
        searchValue: '', // 实时搜索内容
        searchResult: '' // 最终的搜索内容
      }
    },
    methods: {
      //输入框输入
      inputFunc(e) {
        if(!this.searchValue && this.searchValue.length === 0) {
          this.isInput = false;
          this.searchResult = '';
        }
      },
      // 点击回车键搜索
      search() {
        this.searchResult = this.searchValue;
        this.isInput = true;
      }
    },
    components: {
      BookCard,
      HeaderNav,
      NoResult
    }
  }
</script>

<style lang="scss" scoped>
  .input_box {
    margin: 0.18rem 0.3rem 0.48rem;
    padding: 0.16rem 0.64rem 0.14rem 0.64rem;
    position: relative;
    background-color: #F5F5F5;
    border-radius:6px;

    img {
      display: block;
      width: 0.29rem;
      height: 0.28rem;
      position: absolute;
      top: 0.22rem;
      left: 0.26rem;
    }

    input {
      height: 0.4rem;
      width: 100%;
      background-color: #f5f5f5;
      font-size: 0.28rem;
      color: #333;
    }
  }
  
  .popular_searches {
    padding-left: 0.3rem;

    h1 {
      font-size: 0.36rem;
      color: #333;
      margin-bottom: 0.28rem;
      font-weight: 500;
    }

    .content {

      li {
        padding: 0.28rem 0 0.28rem 0.56rem;
        position: relative;
        border-bottom: 1px solid #EEEEEE;

        &:last-child {
          border-bottom: none;
        }

        span {
          font-size: 0.34rem;
          font-weight: 400;
          color: #333;
        }

        i {
          position: absolute;
          left: 0;
          top: 0.36rem;
        }

        .hot, .new {
          width: 0.32rem;
          height: 0.32rem;
          font-size: 0.24rem;
          line-height: 0.32rem;
          text-align: center;
          border-radius: 2px;
          color: #fff;
        }

        .hot {
          background-color: #FF5770;
        }

        .new {
          background-color: #F58C23;
        }

        .up_arrow {
          background: url('~assets/images/up_arrow.svg') no-repeat;
          width: 0.26rem;
          height: 0.25rem;
        }
      }
    }
  }

  .search_result {
    padding: 0 0.3rem 0.7rem;
  }

</style>
