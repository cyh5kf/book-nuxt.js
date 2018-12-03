<template>
  <section class="container">

    <div class="header_nav" v-show="!isEdit">
      <nuxt-link to="/" class="back_btn">
        <img src="~/assets/images/left_arrow.svg" alt="">
      </nuxt-link>

      <ul class="tab">
        <li v-for="(itme,index) in tabList" :key="index" :class="tabIndex===index? 'active': ''"  @click="getItem(index)" v-text="itme"></li>
      </ul>
      
      <div class="edit_btn" v-show="tabIndex === 0" @click="handleEdit">编辑</div>
      <div class="edit_btn" v-show="tabIndex === 1" @click="clearHistory">清空</div>
    </div>

    <div class="header_edit" v-show="isEdit">
      <span class="selectAll" @click="selectAll" v-text="isCheckedAll? '取消全选': '全选'"></span>
      <span class="cancel" @click="handleCancel">取消</span>
    </div>

    <div class="content" v-show="tabIndex === 0">
      <div v-for="(item, index) in bookshelfList" :key="index" class="card">
        <div class="img_wrap">
          <img :src="item.coverUrl" alt="">
          <span>更新</span>
        </div>
        <div class="detail">
          <p class="name" v-text="item.name"></p>
          <p class="subtitle" v-text="item.subtitle"></p>
          <p class="introduction" v-text="item.introduction"></p>
          <div class="checkbox" v-show="isEdit">
            <input type="checkbox" :id="'checkbox'+ index" v-model="item.isChecked" />
            <label :for="'checkbox'+ index"></label>
          </div>
        </div>
      </div>
    </div>

    <div class="content" v-show="tabIndex === 1">
      <div v-for="(item, index) in historyList" :key="index" class="card">
        <div class="img_wrap">
          <img :src="item.coverUrl" alt="">
          <span>更新</span>
        </div>
        <div class="detail">
          <p class="name" v-text="item.name"></p>
          <p class="subtitle" v-text="item.subtitle"></p>
          <p class="introduction" v-text="item.introduction"></p>
        </div>
      </div>
    </div>

    <div class="delete" @click="handleDelete" v-show="isEdit">
      <img src="~assets/images/delete_btn.png" alt="">
      <span>删除 </span>
      <span v-text="`(${checkNum})`"></span>
    </div>
    
  </section>
</template>

<script>
  import BookCard from '~/components/BookCard';

  export default {
    data() {
      return {
        tabList: ['我的书架', '阅读历史'],
        tabIndex: 0, // 列表切换，0：我的书架，1：阅读历史
        isEdit: false, // 书架是否编辑状态，默认非编辑状态
        isCheckedAll: false, // 是否全选，默认没有全选
        bookshelfList: [ // 我的书架列表
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅1',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅2',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅3',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          }
        ],
        historyList: [ // 阅读历史列表
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          },
          {
            coverUrl: 'http://static.zongheng.com/upload/cover/28/32/2832b8950fbd2a91b4359a0abdbbcb6f.jpeg',
            name: '流经存在的邂逅',
            subtitle: '作者：苏小懒',
            introduction: '1小时前更新·爱情是个好东西'
          }
        ]
      }
    },
    computed: {
      // 删除个数
      checkNum() {
        const bookshelfList = this.bookshelfList;
        let deleteList = [];
        for(let i of bookshelfList) {
          if(i.isChecked) {
            deleteList.push(i);
          }
        }
        return deleteList.length;
      }
    },
    methods: {
      // 切换列表
      getItem(index) {
        this.tabIndex = index;
      },
      // 清空阅读历史
      clearHistory() {
        this.historyList = [];
      },
      // 进入书架编辑状态
      handleEdit() {
        this.isEdit = true;
      },
      // 书架编辑，全选
      selectAll() {
        this.isCheckedAll = !this.isCheckedAll;
        let bookshelfList = this.bookshelfList;
        bookshelfList.forEach((i, index) => {
          this.$set(i, 'isChecked', this.isCheckedAll? true: false);
        });
      },
      // 书架编辑，取消
      handleCancel() {
        this.isEdit = false; 
      },
      // 删除书架操作
      handleDelete() {
        if(this.checkNum === 0) {
          return false;
        }
        const bookshelfList = this.bookshelfList;
        this.bookshelfList = bookshelfList.filter((i) => {
          return !i.isChecked === true;
        })
      }
    },
    components: {
      BookCard
    }
  }
</script>

<style lang="scss" scoped>
  .header_nav {
    width: 100%;
    height: 1.3rem;
    border: 2px solid #EFEFEF;
    padding: 0.2rem 0 0.24rem;
    overflow: hidden;
    position: relative;

    .back_btn {
      position: absolute;
      top: 0.4rem;
      left: 0.34rem;
      display: block;

      img {
        display: block;
        width: 0.2rem;
        height: 0.36rem;
      }
    }

    .tab {
      border-radius:38px;
      border:2px solid #EA5454;
      overflow: hidden;
      margin-left: 1.42rem;
      width: 4rem;

      li {
        width: 50%;
        height: 0.7rem;
        line-height: 0.7rem;
        text-align: center;
        font-size: 0.32rem;
        font-weight: 500;
        color: #EA5454;
        float: left;
      }

      .active {
        background-color: #EA5454;
        color: #fff;
      }
      
    }

    .edit_btn {
      width: 1rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      color: #fff;
      border-radius: 4px;
      background-color: #EA5454;
      font-size: 0.28rem;
      position: absolute;
      top: 0.28rem;
      right: 0.3rem;
    }
  }

  .header_edit {
    padding: 0.38rem 0.52rem 0.36rem 0.3rem;
    width: 100%;
    height: 1.3rem;
    border: 2px solid #EFEFEF;
    overflow: hidden;

    span {
      font-size: 0.28rem;
      color: #333;
    }

    .selectAll {
      float: left;
    }
    
    .cancel {
      float: right;
    }
  }

  .card {
    width: 100%;
    height: 1.68rem;
    position: relative;
    margin-bottom: 0.28rem;

    &:last-child {
      margin-bottom: 0;
    }

    .img_wrap {
      position: absolute;
      top: 0;
      left: 0;

      img {
        width: 1.34rem;
        height: 1.68rem;
        border-radius:6px;
      }
      span {
        position: absolute;
        top: 0;
        left: 0;
        width: 0.67rem;
        height: 0.39rem;
        line-height: 0.39rem;
        text-align: center;
        background-color: #FF5770;
        color: #fff;
        font-size: 0.22rem;
        border-radius: 6px 0 6px 0;
      }
    }

    .detail {
      width: 100%;
      padding-left: 1.54rem;
      position: relative;

      .name {
        font-size: 0.3rem;
        color: #333;
        font-weight: 600;
        padding: 0.16rem 0 0.14rem;
      }

      .subtitle, .introduction {
        color: #999;
        font-size: 0.26rem;
      }

      .subtitle {
        padding-bottom: 0.08rem;
      }

      .checkbox {
          width: 0.44rem;
          height: 0.44rem;
          position: absolute;
          top: 0.64rem;
          right: 0.24rem;
      }
      .checkbox input[type='checkbox'] {
          position: absolute;
          left: 0;
          top: 0;
          width: 0.44rem;
          height: 0.44rem;
          opacity: 0;
      }
      .checkbox label {
          position: absolute;
          left: 0.3rem;
          top: 0;
      }
      .checkbox label:before {
          content: '';
          position: absolute;
          left: -0.3rem;
          top: 0;
          width: 0.44rem;
          height: 0.44rem;
          border: 1px solid #FF5770;
          border-radius: 50%;
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
      }

      .checkbox label:after {
          content: '';
          position: absolute;
          left: -0.12rem;
          top: 0.08rem;
          width: 0.1rem;
          height: 0.24rem;
          border: 0;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          background: #fff;
          transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transition: all 0.3s ease;
          -webkit-transition: all 0.3s ease;
          -moz-transition: all 0.3s ease;
      }

      .checkbox input[type='checkbox']:checked + label:before {
          background: #FF5770;
          border-color: #FF5770;
      }
      .checkbox input[type='checkbox']:checked + label:after {
          background: #FF5770;
      }
    }
  }

  .content {
    padding: 0.4rem 0.3rem 0.7rem;
  }

  .delete {
    width: 100%;
    text-align: center;
    font-size: 0.34rem;
    color: #EA5454;
    border:2px solid #EFEFEF;
    padding: 0.22rem 0 0.2rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    img {
      width: 0.31rem;
      height: 0.29rem;
      display: inline-block;
      position: relative;
      top: -0.04rem;
      right: 0.06rem;
    }
  }

</style>
