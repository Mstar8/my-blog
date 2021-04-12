<template>
  <div
    v-if="visible"
    class="back-top animate__animated animate__fadeInDown"
    @click="backTop"
  ></div>
</template>

<script>
import { getScrollTop } from "../../utils/utils";
export default {
  name: "back-top",
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      if (getScrollTop() >= 750 && this.visible == false) {
        setTimeout(() => {
          this.visible = true;
        }, 100);
      } else if (getScrollTop() < 750) {
        this.visible = false;
      }
    },
    backTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    },
  },
  components: {},
};
</script>

<style scoped>
.back-top {
  position: fixed;
  z-index: 100;
  right: 40px;
  bottom: 40px;
  height: 152px;
  width: 60px;
  background-image: url("../../assets/img/back-top.gif");
  cursor: pointer;
}
</style>