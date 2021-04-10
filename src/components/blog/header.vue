<template>
  <div>
    <div class="nav-header" v-if="visible">
      <div class="container">
        <div class="headbox">
          <el-menu
            class="el-menu-header"
            :default-active="activeIndex"
            mode="horizontal"
            router="true"
          >
            <el-menu-item index="5">关于</el-menu-item>
            <el-menu-item index="4">资源</el-menu-item>
            <el-menu-item index="3">感想</el-menu-item>
            <el-menu-item index="/category">分类</el-menu-item>
            <el-menu-item index="/">首页</el-menu-item>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="headimgbox">
      <div class="welcome">
        <typewriter :text="welcomeText" 
        :wspeed="200"
        :isBack="true"></typewriter>
      </div>
    </div>
  </div>
</template>

<script>
import { getScrollTop } from "@/utils/utils";
import Typewriter from '../util/typewriter.vue';
export default {
  name: "header",
  data() {
    return {
      welcomeText: "Hi, Friend!",
      activeIndex: "1",
      show: false,
      visible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      if (getScrollTop() >= 150 && this.visible == false) {
        setTimeout(() => {
          this.visible = true;
        }, 200);
      } else if (getScrollTop() < 150) {
        this.visible = false;
      }
    },
  },
  components: {
    Typewriter
  },
};
</script>

    Typewriter
<style scoped>
/**总体定位 */
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  width: 100%;
  background-color: rgb(255, 255, 255);
}
/**内容定位 */
.nav-header .container {
  max-width: 80%;
  margin: 0 auto;
}
/**背景颜色跟随父级元素 */
.el-menu-header {
  background-color: transparent;
  border-bottom: none !important;
}
.headbox {
  padding-right: 50px;
}
.el-menu-header .el-menu-item {
  float: right;
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  outline: none;
}

.el-menu-header .el-menu-item:hover {
  background: #fff;
}

.container .item-searchbox {
  position: absolute;
  right: 10%;
  top: 0;
  max-width: 180px;
  min-width: 40px;
  line-height: 50px;
  cursor: pointer;
  outline: none;
}

/*字体颜色 */
.container ul li.el-menu-item,
.el-menu-header .el-menu-item:hover {
  color: black;
}

/**图片设计 */
.headimgbox {
  background-image: url(http://139.196.32.107/images/head_bg3.jpg);
  height: 758px;
  background-size: cover;
  background-position: center 50%;
  background-repeat: no-repeat;
  margin-bottom: 40px;
}
.headimgbox .welcome {
  text-align: center;
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 150px;
  height: 150px;
  line-height: 150px;
  font-size: 80px;
  background-color: rgb(255, 255, 255, 0);
  font-family: "Sigmar One", Arial;
  color: aliceblue;
  text-shadow: 1px 1px 0 #ff3f1a, -1px -1px 0 #00a7e0;
}
</style>
