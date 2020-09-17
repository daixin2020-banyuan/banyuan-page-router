<template>
  <div>
    <!-- title -->
    <div class="email-title">
      <div class="email-title-left">
        <h2>消息列表</h2>
        <a href="javascript:void(0);" class="all-read">全部已读</a>
      </div>
      <a href="javascript:void(0);" class="submit">意见反馈</a>
    </div>

    <!--  -->
    <!--  -->
    <!--  -->
    <div class="email-news">
      <div class="news-nav">
        <p>内容</p>
        <p>发布者</p>
        <p>日期</p>
      </div>
      <div class="news">暂无数据</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Email"
};
</script>

<style>
a {
  text-decoration: none;
}
.email-title {
  height: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.email-title-left {
  display: flex;
  align-items: center;
}
.email-title h2 {
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
}
.all-read {
  margin: 3px 0 0 30px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
  font-size: 14px;
  color: #909090;
  line-height: 20px;
  padding: 0 9px;
}
.submit {
  font-size: 14px;
  color: #505050;
  line-height: 20px;
  padding-left: 32px;
  position: relative;
}
.submit::before {
  content: "";
  width: 20px;
  height: 20px;
  background: url(https://by-image.oss-cn-shanghai.aliyuncs.com/yfront/static/user/mall/pic_fankui_youxiang.png);
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.email-news {
  height: 109px;
  margin-top: 18px;
  border-radius: 4px;
  border: 1px solid #e4e4e4;
}
.news-nav {
  padding-left: 72px;
  background-color: rgb(226, 226, 226);
  font-size: 16px;
  font-weight: 600;
  color: #606060;
  line-height: 22px;
  box-sizing: border-box;
  height: 49px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.news {
  text-align: center;
  line-height: 60px;
  color: #909399;
  font-size: 14px;
}
</style>
