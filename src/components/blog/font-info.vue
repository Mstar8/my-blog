<template>
  <div class="font-info">
    <el-divider class="animate__animated animate__zoomIn">
      <h1>{{ title }}</h1></el-divider
    >
    <div class="animate__animated animate__fadeInLeft">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: "font-info",
  props: {
    title: {
      type: String,
      default: "Title",
    },
    content: {
      type: String,
      default: "Tex",
    },
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
};
</script>

<style scoped>
.font-info {
  margin: 25px 0 30px 0;
}
>>> .el-divider__text {
  background-color: rgb(244, 244, 244, 0.6);
}
</style>
