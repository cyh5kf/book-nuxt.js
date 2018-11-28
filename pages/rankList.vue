<template>
  <section class="container">

    <HeaderNav />

    <div class="book_list_wrap">
      <BookList titleName="热推榜" isMore="false" />
    </div>

    <div class="book_list_wrap">
      <BookList titleName="新书榜" isMore="false" />
    </div>
    
    <div class="book_list_wrap">
      <BookList titleName="完结榜" isMore="false" />
    </div>

  </section>
</template>

<script>
  import BookList from '~/components/BookList';
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
        rankList: [1,1,1,1,1,1]
      }
    },
    components: {
      BookList,
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>

  .book_list_wrap {
    padding-bottom: 0.4rem;
  }

</style>
