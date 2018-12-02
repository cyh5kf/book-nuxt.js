<template>
  <div class="booklist_wrap">
    <div class="title">
      <span class="name" v-text="titleName"></span>
      <nuxt-link :to="goUrl">
        <span class="more">更多</span>
        <img src="~assets/images/right_arrow.svg" alt="">
      </nuxt-link>
      
    </div>
    <BookCard v-for="(item, index) in dataList" :data="item" :key="index" />
  </div>
</template>

<script>
  import BookCard from '~/components/BookCard';

  export default {
    props: ['titleName', 'goUrl', 'dataList'],
    data() {
      return {
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
  .booklist_wrap {
    padding: 0 0.3rem 0;

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
