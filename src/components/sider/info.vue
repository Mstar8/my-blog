<template>
  <!-- 侧边栏作者信息 -->
  <el-card class="box-card">
    <div class="avatar">
      <figure>
        <img class="avatar-img" src="../../assets/img/sider-avatar.jpg" />
      </figure>
    </div>
    <div class="link-font">
      <p>LINK ME:</p>
    </div>
    <ul class="link-icons">
      <li class="cycle-icon">
        <span>
          <i class="iconfont20 icon-me"></i>
        </span>
      </li>
      <li class="cycle-icon">
        <span>
          <i class="iconfont20 icon-qqfuben"></i>
        </span>
      </li>
      <li class="cycle-icon">
        <span>
          <i class="iconfont20 icon-wechat"></i>
        </span>
      </li>
      <li class="cycle-icon">
        <span>
          <i class="iconfont20 icon-github"></i>
        </span>
      </li>
    </ul>
  </el-card>
</template>

<script>
export default {
  name: "info",
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
@import "../../assets/style/blog-sider.css";
.avatar {
}
.avatar .avatar-img {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  outline: none;
}
.avatar .avatar-img:hover {
  transition: all 1.5s;
  transform: rotate(360deg);
}
.link-font {
  font-size: 14px;
  margin: 10px 0;
}
.link-icons {
  list-style: none;
}
.cycle-icon {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid #c8cccf;
  line-height: 40px;
  margin-left: 10px;
}
.cycle-icon i {
  color: rgba(0, 0, 0, 0.5);
}
</style>
