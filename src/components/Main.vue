<template>
  <div class="bar">
    <div class="aside-left">
      <div class="aside-item-t1" @click="change('interest')">
        趣味小课
      </div>
      <div class="aside-item-t1" @click="change('lesson')">
        预备课程
      </div>
      <div class="aside-item-t1" @click="change('code')">
        编程入门
      </div>
    </div>
    <div class="main-container">
      <!-- <template v-for="item in list">
        <div
          class="main-item"
          v-if="item.type == typename"
          @click="jumpLearn(item)"
        >
          <img :src="item.coverUrl" alt="" />
          <h1>{{ item.title }}</h1>
          <h2>{{ item.summary }}</h2>
        </div>
      </template> -->
      <div
        class="main-item"
        v-for="(item, index) in rename"
        :key="index + 'item'"
        @click="forwardTouser"
      >
        <div class="img-container">
          <img :src="item.coverUrl" alt="" />
          <p>{{ item.title }}</p>
        </div>
        <div class="summary-content">
          <p>{{ item.summary }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../data/data";

export default {
  name: "Aside",
  components: {},
  data() {
    return {
      list: data.list,
      typename: "code"
    };
  },
  computed: {
    rename() {
      let arr = [];
      switch (this.typename) {
        case "interest":
          arr = this.list.filter(item => {
            return item.type == "interest";
          });
          break;
        case "code":
          arr = this.list.filter(item => {
            return item.type == "code";
          });
          break;
        case "lesson":
          arr = this.list.filter(item => {
            return item.type == "lesson";
          });
          break;
      }
      return arr;
    }
  },
  methods: {
    change(name) {
      this.typename = name;
    },
    forwardTouser() {
      this.$router.push({
        name: "user"
      });
    }
  }
};
</script>

<style lang="scss">
.bar {
  width: 1200px;
  margin: 0 auto;
  height: 600px;
  padding-top: 180px;
  display: flex;
  .aside-left {
    width: 280px;
    .aside-item-t1 {
      padding-top: 20px;
      font-size: 18px;
      color: #343a40;
      letter-spacing: 1.2px;
      width: 160px;
      height: 34px;
      line-height: 34px;
      padding-left: 8px;
      cursor: pointer;
    }
  }
}
.main-container {
  display: flex;
  flex-wrap: wrap;
  width: 920px;
  .main-item {
    width: 50%;
    box-sizing: border-box;
    height: 440px;
    .img-container {
      display: flex;
      flex-direction: column;
      img {
        width: 400px;
        height: 198px;
      }
      p {
        padding-left: 10px;
        height: 68px;
        border: 1px solid #eaeaea;
        border-top: none;
        line-height: 68px;
        font-size: 18px;
        box-sizing: content-box;
        width: 388px;
      }
    }
    .summary-content {
      word-break: break-all;
      overflow: hidden;
      position: relative;
      width: 400px;
      padding: 12px 0;

      p {
        font-size: 14px;
        font-weight: 400;
        color: #505050;
        line-height: 20px;
      }
    }
  }
}
</style>
