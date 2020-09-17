<template>
  <div class="user-container">
    <div class="user-dashbord">
      <!-- logo -->
      <div class="logo-container">
        <img
          src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/logo_black_bottom@2x.png"
        />
      </div>

      <!-- icon -->
      <div>
        <div class="user-avatar">
          <img
            src="http://by-image.oss-cn-shanghai.aliyuncs.com/official-site/E2_Icon.jpg"
            class="user-avatar-icon"
          />
        </div>
        <div class="user-info">
          <h2>非会员</h2>
        </div>
      </div>

      <!-- selection -->
      <div class="mine">
        <router-link to="/user/session" style="text-decoration: none">
          <div
            class="chos-bg"
            @click="change('我的课程')"
            :style="{
              backgroundColor: $route.name == 'Session' ? 'green' : ''
            }"
          >
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-my-course.png"
            />
            <p>我的课程</p>
          </div>
        </router-link>

        <router-link to="/user/email" style="text-decoration: none">
          <div
            class="chos-bg"
            @click="change('我的邮箱')"
            :style="{ backgroundColor: $route.name == 'Email' ? 'green' : '' }"
          >
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-email.png"
            />
            <p>邮箱</p>
          </div>
        </router-link>
      </div>

      <!-- bottom -->
      <div class="menu-bom">
        <router-link to="/user/setting" style="text-decoration: none">
          <div
            class="chos-bg"
            @click="change('设置')"
            :style="{
              backgroundColor: $route.name == 'Setting' ? 'green' : ''
            }"
          >
            <img
              src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-set.png"
            />
            <p>设置</p>
          </div>
        </router-link>

        <div class="chos-bg" @click="funExit">
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/uc-index-quit.png"
          />
          <p>退出</p>
        </div>
      </div>
    </div>

    <div class="center">
      <div class="nav-title">
        <div class="tohome" @click="funExit">
          <img
            src="https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/ic_fanhui_jiashi.svg"
            style="margin-right: 20px"
          />
          <span>返回首页</span>
        </div>
        <p>{{ title }}</p>
      </div>
      <router-view class="component"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      title: "我的课程"
    };
  },

  methods: {
    change(title) {
      this.title = title;
    },
    funExit() {
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style>
.user-container {
  display: flex;
  width: 100%;
  height: 100vh;
}
.center {
  padding-left: 300px;
  width: 100%;
}
.user-dashbord {
  display: inline-block;
  vertical-align: top;
  width: 300px;
  height: 100vh;
  min-height: 768px;
  background-color: #141c3b;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 160px;
  z-index: 2;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.user-center {
  vertical-align: top;
  width: 100%;
  min-height: 600px;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  padding-left: 15.6vw;
  position: relative;
}
.logo-container {
  text-align: center;
  padding: 2vh 0 8.16vh;
}
.logo-container img {
  width: 146px;
  height: 43px;
  cursor: pointer;
}
.user-avatar {
  height: 78px;
  text-align: center;
}
.user-avatar-icon {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}
.user-info {
  text-align: center;
  word-wrap: break-word;
  word-break: break-all;
  padding: 0.51vh 0 8.16vh;
}
.user-info h2 {
  font-size: 14px;
  font-weight: 300;
  color: #e8e8e8;
  line-height: 25px;
  margin: 0;
  padding: 1px 0;
}
.chos-bg {
  display: flex;
  align-items: center;
  height: 54px;
  justify-content: center;
  cursor: pointer;
}
.chos-bg img {
  width: 22px;
  height: 22px;
  margin-right: 9px;
}
.chos-bg p {
  color: #e8e8e8;
  font-weight: 300;
  line-height: 54px;
  width: 70px;
}
.menu-bom {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  height: 108px;
}
.chos-bg:hover {
  background-color: rgb(167, 159, 194);
}

/*  */
.nav-title {
  height: 56px;
  padding: 0 40px;
  background: #fff;
  box-shadow: 5px 6px 4px rgba(213, 209, 209, 0.5);
  position: fixed;
  top: 0;
  left: 300px;
  right: 0;
  z-index: 9999;
  display: flex;
  color: #707070;
  line-height: 56px;
  cursor: pointer;
  overflow: hidden;
}
.tohome {
  line-height: 56px;
  margin-right: 30px;
  margin-left: -20px;
  cursor: pointer;
}
.course-list {
  width: 60vw;
  margin: 0 auto;
  padding: 80px 0 120px;
}
.component {
  width: 60vw;
  margin: 0 auto;
  padding: 136px 0 120px;
}
</style>
