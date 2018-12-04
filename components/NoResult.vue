<template>
  <div class="no_result">
      <img src="~assets/images/null_icon.svg" alt="">
      <p v-text="text"></p>
    </div>
</template>

<script>

  export default {
    props: ['text']
  }

</script>


<style lang="scss" scoped>
  .no_result {
    img {
      width: 3.02rem;
      height: 2.4rem;
      margin: 1.38rem auto 0.72rem;
      display: block;
    }
    
    p {
      width: 100%;
      text-align: center;
      font-size: 0.28rem;
      color: #333;
      font-weight: 500;
    }
  }
</style>
