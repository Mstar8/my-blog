<template>
  <div>
    <nav-head></nav-head>
    <div class="container">
    <font-info title="文章" content="会当临绝顶，一览众山小"/>
      <el-row :gutter="20">
        <el-col :span="18"><blog-sharebox></blog-sharebox></el-col>
        <el-col :span="6"><blog-right/></el-col>
      </el-row>
    </div>
    <back-top />
  </div>
</template>

<script>
import NavHead from "../components/blog/header";
import BlogSharebox from "../components/blog/blog-sharebox";
import BackTop from "../components/sider/back-top.vue";
import FontInfo from '../components/blog/font-info.vue';
import BlogRight from "../components/blog/blog-right";
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavHead,
    BlogSharebox,
    BackTop,
    FontInfo,
    BlogRight,
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 0;
}
.container .el-col-16 {
  transition: all 0.5s ease-out 0s;
}
</style>
