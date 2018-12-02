<template>
  <section class="container">

    <HeaderNav backName="完本榜" backUrl="/" />

    <div class="content">
      <BookCard v-for="(item, index) in bookList" :data="item" :key="index" />
    </div>
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
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
