<template>
  <div class="card">
    <img src="~assets/images/cover.png" alt="">
    <div class="detail">
      <p class="name">全民领主</p>
      <p class="subtitle">唐家三少·都市·连载·37万字</p>
      <p class="introduction">这本书讲述的就是他们之间那些温暖他们之间那些温暖他们之间那些温暖...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    width: 100%;
    height: 1.92rem;
    position: relative;
    margin-bottom: 0.32rem;

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 1.6rem;
      height: 1.92rem;
      box-shadow:0px 4px 8px 0px rgba(0,0,0,0.08);
      position: absolute;
      top: 0;
      left: 0;
    }

    .detail {
      width: 100%;
      padding-left: 1.84rem;

      .name {
        font-size: 0.3rem;
        color: #333;
        font-weight: 600;
        padding-bottom: 0.18rem;
      }

      .subtitle, .introduction {
        color: #666;
        font-size: 0.28rem;
      }

      .subtitle {
        padding-bottom: 0.1rem;
      }
    }
  }
</style>
