<template>
  <nuxt-link to="/bookIntroduction" class="card">
    <img :src="data.coverUrl" alt="">
    <div class="detail">
      <p class="name" v-html="name"></p>
      <p class="subtitle" v-html="subtitle"></p>
      <p class="introduction" v-html="introduction"></p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['data', 'searchResult'],
  computed: {
    name() {
      const searchResult = this.searchResult;
      return this.replaceString(searchResult, this.data.name);
    },
    subtitle() {
      const searchResult = this.searchResult;
      return this.replaceString(searchResult, this.data.subtitle);
    },
    introduction() {
      const searchResult = this.searchResult;
      return this.replaceString(searchResult, this.data.introduction);
    }
  },
  methods: {
    replaceString(searchResult, resultText) {
      let titleString = resultText;
      if(!titleString) {
        return '';
      }
      if(searchResult && searchResult.length > 0) {
        // 匹配关键字正则
        let replaceReg = new RegExp(searchResult, 'g');
        // 高亮替换v-html值
        let replaceString = '<span style="color: #EA5454;">' + searchResult + '</span>';
        // 开始替换
        titleString = titleString.replace(replaceReg, replaceString);
      }
      return titleString;
    }
  },
}
</script>


<style lang="scss" scoped>
  .card {
    display: block;
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
