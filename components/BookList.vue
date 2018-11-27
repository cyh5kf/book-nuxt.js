<template>
  <div class="container">
    <div class="title">
      <span class="name">{{titleName}}</span>
      <span class="more">更多</span>
      <img src="~assets/images/right_arrow.png" alt="">
    </div>
    <BookCard v-for="(item, index) in bookList" :key="index" />
  </div>
</template>

<script>
  import BookCard from '~/components/BookCard';

  export default {
    props: ['titleName'],
    data() {
      return {
        bookList: [1,1,1]
      }
    },
    mounted () {

    },
    components: {
      BookCard
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 0.3rem 0.46rem;

    .title {
      position: relative;
      color: #333;
      overflow: hidden;
      width: 100%;
      margin-bottom: 0.22rem;

      .name {
        font-size: 0.36rem;
        height: 0.5rem;
        line-height: 0.5rem;
        float: left;
      }

      .more {
        font-size: 0.26rem;
        color: #999;
        vertical-align: middle;
        padding-right: 0.24rem;
        float: right;
        position: relative;
        top: 0.06rem;
      }

      img {
        display: block;
        width: 0.12rem;
        height: 0.22rem;
        position: absolute;
        top: 0.14rem;
        right: 0;
      }
    }
  }
</style>
