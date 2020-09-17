<template>
  <div>
    <div class="setting-nav">
      <h1 @click="fun('个人信息')">
        个人信息
        <span
          class="span1"
          :style="{ display: flag ? 'block' : 'none' }"
        ></span>
      </h1>
      <h1 @click="fun('账号信息')">
        账号信息
        <span
          class="span2"
          :style="{ display: flag ? 'none' : 'block' }"
        ></span>
      </h1>
    </div>

    <div class="setting-per">
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      page: "个人信息",
      flag: true
    };
  },
  methods: {
    fun(name) {
      this.page = name;
      this.flag = !this.flag;
    }
  }
};
</script>

<style>
.setting-nav {
  display: flex;
}
.setting-nav h1 {
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
  padding-right: 55px;
  padding-bottom: 23px;
  cursor: pointer;
}
.setting-per {
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  padding: 50px 90px;
}
.setting-nav h1:hover {
  text-decoration: cat;
}
.span1 {
  display: block;
  width: 80px;
  height: 4px;
  background-color: #6964d1;
}
.span2 {
  display: none;
  width: 80px;
  height: 4px;
  background-color: #6964d1;
}
</style>
