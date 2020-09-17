<template>
  <div>
    <div>
      <h6>推荐课程</h6>
      <div
        v-for="(item, index) in list"
        :key="'item' + index"
        class="course-item-container"
      >
        <div class="course-item">
          <div class="course-info">
            <h3>{{ item.title }}</h3>
            <p>{{ item.content }}</p>
          </div>
          <button class="course-study" @click="backTohome">继续学习</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Session",
  data() {
    return {
      list: [
        {
          title: "React",
          content: "专业的React教学，包含React全家桶与实战项目。"
        },
        {
          title: "Vue",
          content: "专业的Vue教学，包含Vue全家桶与实战项目。"
        },
        {
          title: "前端进阶",
          content:
            "针对掌握前端三剑客（HTML+CSS+JavaScript）基本内容的学生设计，进一步学习。"
        },
        {
          title: "大数据",
          content: "大数据"
        },
        {
          title: "趣味小课",
          content: "趣味小课"
        }
      ]
    };
  },
  methods: {
    backTohome() {
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style>
h6 {
  font-size: 20px;
  font-weight: 400;
  color: #707070;
  line-height: 28px;
}
.course-item-container {
  width: 100%;
  padding: 15px 0;
}
.course-item {
  width: 864px;
  height: 142px;
  box-sizing: border-box;
  padding: 40px 40px 40px 44px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
  font-size: 0;
  box-shadow: 4px 2px 4px rgba(212, 210, 210, 0.27);
  position: relative;
}
.course-info {
  width: 618px;
  height: 60px;
}
.course-info h3 {
  font-size: 20px;
  font-weight: 500;
  font-family: PingFangSC-Regular;
  color: #404040;
  line-height: 28px;
  padding-bottom: 10px;
}
.course-info p {
  font-size: 16px;
  font-weight: 500;
  font-family: PingFangSC-Regular;
  color: #909090;
  line-height: 22px;
}
.course-study {
  width: 100px;
  height: 30px;
  background: #6964d1;
  color: white;
  outline: none;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 62px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
</style>
