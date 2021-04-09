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
    <div></div>
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
</style>
