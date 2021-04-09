<template>
  <div>
    <user-info></user-info>
    <ctime></ctime>
  </div>
</template>

<script>
import UserInfo from "../sider/info";
import Ctime from "../sider/ctime";
export default {
  name: "blog-right",
  data() {
    return {};
  },
  methods: {},
  components: { UserInfo, Ctime },
};
</script>
<style>
</style>
