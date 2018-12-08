<template>
  <section ref="wraper" :class="{container: true, eye_protection: isEyeProtection, night: isNight}">
    <div class="header_nav">
      <div class="left">
        <nuxt-link to="/">
          <img src="~/assets/images/left_arrow.svg" alt="">
        </nuxt-link>
        <div :class="{btn: true, mode: true, active: isNight}" @click="changeMode" v-text="isNight? '夜间': '日间'"></div>
        <div :class="{btn: true, mode: true, active: isEyeProtection}" @click="changeEye">护眼</div>
      </div>

      <div class="right">
        <span>字体：</span>
        <div :class="{btn: true, font_size: true, active: fontSize === 0}" @click="changeFontSize(0)">小</div>
        <div :class="{btn: true, font_size: true, active: fontSize === 1}" @click="changeFontSize(1)">中</div>
        <div :class="{btn: true, font_size: true, active: fontSize === 2}" @click="changeFontSize(2)">大</div>
      </div>
      
    </div>

    <div class="main">
      <p class="chapter_name" v-text="'圣墟 外篇一 神朝将崩'"></p>
      <p class="text" ref="text" v-text="text"></p>
    </div>

    <div class="footer">
      <div class="pre btn">上一页</div>
      <div class="directory btn">目录</div>
      <div class="next btn">下一页</div>
    </div>
    
  </section>
</template>

<script>
  import HeaderNav from '~/components/HeaderNav';

  export default {
    data() {
      return {
        isEyeProtection: false, // 是否护眼模式，默认不是
        isNight: false, // 是否夜间模式，默认日间模式
        text: ' 庙堂腐朽，宦官当道，义军纷起，天下大乱，山河破碎，烽火连天，民不聊生。 神朝垂暮，社稷将崩，诸侯并起，秦、汉、齐三足鼎立，欲改天换日，取神朝而代之。 身逢乱世，一统江山成就万世基业，还是仗剑而行，笑傲醉江湖？ 一轮银盘高挂，皎洁而明亮。 山峦起伏，并不巍峨，与几个山村相邻，夜鸟啼鸣，越显幽静。 月华如水，山地间素淡朦胧，像是有一层薄烟缭绕。其中一座矮山，草木不丰，奇石兀立，只有几株古树伸展枝杈向天，并无几片叶子。 山顶有一块青石，在月光下流动清辉，有一名少年盘坐在上，****着上身，肌体成古铜色，强健有力，脸如刀削，线条分明，英气逼人，一头如瀑的黑发自然披散。 山顶有一块青石，在月光下流动清辉，有一名少年盘坐在上，****着上身，肌体成古铜色，强健有力，脸如刀削。 ',
        fontSize: 1, //字体大小
      }
    },
    mounted () {
      this.$refs.wraper.style.height = document.body.clientHeight + 'px';

    },
    methods: {
      // 打开关闭护眼模式
      changeEye() {
        this.isEyeProtection = !this.isEyeProtection;
      },
      // 切换日间夜间模式
      changeMode() {
        this.isNight = !this.isNight;
      },
      // 切换字体大小
      changeFontSize(size) {
        this.fontSize = size;
      }
    },
    watch: {
      // 修改字体大小
      fontSize() {
        switch (this.fontSize) {
          case 0:
            this.$refs.text.style = 'font-size: 0.24rem; line-height: 0.36rem';
            break;
          case 1:
            this.$refs.text.style = 'font-size: 0.28rem; line-height: 0.4rem';
            break;
          case 2:
            this.$refs.text.style = 'font-size: 0.32rem; line-height: 0.44rem';
            break;
          default:
            break;
        }
        
      }
    },
    components: {
      HeaderNav
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0.28rem 0.3rem 0.52rem;
    color: #333;
  }

  .eye_protection {
    background-color: #E8CA9F;

  }
  
  .night {
    background-color: #333;
    color: #999;

    .active {
      color: #fff;
    }

  }

  .header_nav {
    width: 100%;
    margin-bottom: 0.34rem;
    overflow: hidden;

    .left {
      float: left;
      padding-left: 0.64rem;
      position: relative;
      height: 0.6rem;
      line-height: 0.6rem;
      overflow: hidden;

      img {
        width: 0.2rem;
        height: 0.36rem;
        position: absolute;
        top: 0.12rem;
        left: 0;
      }
    }

    .right {
      float: right;
      overflow: hidden;

      span {
        float: left;
        font-size: 0.3rem;
        font-weight: 500;
        height: 0.6rem;
        line-height: 0.6rem;
      }
    }

    .mode {
      width: 1rem;
    }

    .font_size {
      width: 0.6rem;
    }
    
    .active {
      background-color: #EA5454 !important;
      border: 2px solid #EA5454 !important;
    }

    .btn {
      float: left;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      border-radius: 4px;
      font-size: 0.3rem;
      font-weight: 500;
      border: 2px solid #979797;
      margin-right: 0.2rem;
    }
  }

  .main{
    margin-bottom: 0.36rem;

    .chapter_name {
      font-size: 0.34rem;
      font-weight: 600;
      margin-bottom: 0.52rem;
    }

    .text {
      font-size: 0.28rem;
      font-weight: 500;
      line-height: 0.4rem;
    }
  }

  .footer{
    position: relative;

    .btn {
      width: 1.6rem;
      border-radius: 4px;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      border: 2px solid #979797;
      font-size: 0.28rem;
      font-weight: 500;
    }

    .pre {
      position: absolute;
      top: 0;
      left: 0;
    }

    .next {
      position: absolute;
      top: 0;
      right: 0;
    }

    .directory {
      margin-left: 2.66rem;
    }
  }

</style>
