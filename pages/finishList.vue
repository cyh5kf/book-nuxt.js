<template>
  <section class="container">

    <HeaderNav backName="完本榜" backUrl="/" />

    <div class="content">
      <BookCard v-for="(item, index) in bookList" :key="index" />
    </div>
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
        bookList: [1,1,1,1,1,1]
      }
    },
    mounted () {

    },
    components: {
      BookCard,
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0.4rem 0.3rem 0.7rem;
  }

</style>
