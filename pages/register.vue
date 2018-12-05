<template>
  <section class="container">
    <nuxt-link to="/" class="back_btn">
      <img src="~/assets/images/left_arrow.svg" alt="">
    </nuxt-link>
    <img src="~assets/images/logo.png" alt="" class="logo">
    <p class="title">遇见西子，小说无忧</p>
    <input type="text" style="display: none;">
    <input type="password" style="display: none;">
    <div class="input_box">
      <input type="text" placeholder="请输入邮箱">
    </div>
    <div class="input_box pwd">
      <input type="password" placeholder="请输入密码">
    </div>
    <div class="submit">注册</div>
    <img src="~assets/images/umbrella.png" alt="" class="umbrella">
  </section>
</template>

<script>

  export default {
    data() {
      return {}
    },
    mounted () {

    },
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background: url('~assets/images/login_bg.png') no-repeat;
    background-size: contain;
    position: relative;
    text-align: center;
    padding-bottom: 0.28rem;

    .back_btn {
      position: absolute;
      top: 0.66rem;
      left: 0.34rem;
      img {
        width: 0.2rem;
        height: 0.36rem;
      }
    }

    .logo {
      width: 1.6rem;
      display: inline-block;
      margin: 2.32rem auto 0.32rem;
    }

    .title {
      width: 100%;
      text-align: center;
      font-size: 0.38rem;
      color: #FF5770;
      font-weight: bold;
      font-family: STSongti-SC-Bold;
      margin-bottom: 0.64rem;
    }

    .input_box {
      margin: 0 0.3rem 0.28rem;
      padding: 0.42rem 0.38rem 0.38rem;
      border-radius: 8px;
      border: 2px solid #EFEFEF;

      input {
        width: 100%;
        height: 0.4rem;
        font-size: 0.28rem;
      }

    }

    .pwd {
      margin-bottom: 0.52rem;
    }

    .submit {
      width: 6.9rem;
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      border-radius: 6px;
      margin: 0 auto 0.22rem;
      background-color: #FF5770;
      font-size: 0.32rem;
      color: #fff;
      font-weight: 500;
    }

    .umbrella {
      width: 2.88rem;
      display: block;
      margin: 1.06rem 0 0 3.96rem;
    }
  }

</style>
