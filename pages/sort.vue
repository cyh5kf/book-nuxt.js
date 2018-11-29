<template>
  <section class="container">

    <HeaderNav backName="分类" backUrl="/" />

    <div class="content">
      <div class="category">
        <p class="title">男生热点</p>
        <ul>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
        </ul>
      </div>

      <div class="category">
        <p class="title">女生热点</p>
        <ul>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
        </ul>
      </div>

      <div class="category">
        <p class="title">出版热点</p>
        <ul>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
          <li>玄幻</li>
        </ul>
      </div>
    </div>
    
  </section>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
      }
    },
    mounted () {

    },
    components: {
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    padding: 0.36rem 0.3rem 0;
    
    .category {
      margin-bottom: 0.28rem;

      .title {
        font-size: 0.32rem;
        color: #333;
        margin-bottom: 0.28rem;
      }

      ul {
        overflow: hidden;

        li {
          float: left;
          width: 1.6rem;
          height: 0.8rem;
          line-height: 0.8rem;
          border-radius: 10px;
          border: 2px solid #999;
          margin: 0 0.16rem 0.2rem 0;
          text-align: center;
          font-size: 0.28rem;
          color: #666;

          &:nth-child(4n+0) {
            margin-right: 0;
          }
        }
      }
    }
  }

</style>
