<template>
  <div>
    <nav-header></nav-header>
    <div class="container">
      <el-row :gutter="20" style="margin-left: -10px; margin-right: -10px">
        <el-col :span="18"><blog-sharebox></blog-sharebox></el-col>
        <el-col :span="6"><blog-right></blog-right></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavHeader from "../components/blog/header";
import BlogSharebox from "../components/blog/blog-sharebox";
import BlogRight from '../components/blog/blog-right.vue';
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {},
  components: {
    NavHeader,
    BlogSharebox,
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
