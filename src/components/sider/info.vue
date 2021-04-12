<template>
  <!-- 侧边栏作者信息 -->
  <el-card class="box-card upfloat" body-style="padding: 0px">
    <div class="avatar">
      <figure>
        <img class="avatar-img" src="../../assets/img/sider-avatar.jpg" />
      </figure>
    </div>
    <div class="author-name">
      <div>Mstar</div>
      <div style="height: 19px">
        <typewriter text="寥若晨星" :wspeed="500" :isBack="true"></typewriter>
      </div>
    </div>
    <ul class="link-icons">
      <li class="cycle-icon">
        <el-tooltip effect="light" placement="bottom">
          <img src="../../assets/img/icon/wecaht-icon.png" />
          <template #content>
            <img
              src="../../assets/img/wx-user.jpg"
              style="width: 100px; height: 100px"
            />
          </template>
        </el-tooltip>
      </li>
      <li class="cycle-icon">
        <el-tooltip
          effect="light"
          content="生而为人，我很抱歉"
          placement="bottom"
        >
          <a
            target="_blank"
            href="https://music.163.com/#/user/home?id=384210070"
          >
            <img src="../../assets/img/icon/netmusic-icon.png" />
          </a>
        </el-tooltip>
      </li>
      <li class="cycle-icon">
        <el-tooltip effect="light" content="Blibili干杯" placement="bottom">
          <a target="_blank" href="https://space.bilibili.com/23265983">
            <img src="../../assets/img/icon/bilibili-icon.png" />
          </a>
        </el-tooltip>
      </li>
      <li class="cycle-icon">
        <el-tooltip effect="light" content="py交易地" placement="bottom">
          <a target="_blank" href="https://github.com/Mstar8">
            <img src="../../assets/img/icon/github-icon.png" />
          </a>
        </el-tooltip>
      </li>
    </ul>
    <div class="user-intro">
      <el-collapse>
        <el-collapse-item title="热爱游戏🎮" name="1">
          <ul style="list-style: none">
            <li>lol, roguelike类, 神界原罪2, 巫师3, 给他爱5</li>
            <li>多端玩家, 有啥玩啥, 欢迎志同道合之辈前来py</li>
          </ul>
        </el-collapse-item>
        <el-collapse-item title="擅长技术💻" name="2">
          <ul style="list-style: none">
            <li>web后端：java springboot mysql</li>
            <li>web前端：html css js vue</li>
            <li>游戏开发：unity小菜鸡</li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
  </el-card>
</template>

<script>
import Typewriter from "../util/typewriter.vue";
export default {
  name: "info",
  data() {
    return {};
  },
  methods: {},
  components: { Typewriter },
};
</script>

<style scoped>
@import "../../assets/style/blog-sider.css";
@import "../../assets/style/animation.css";

.box-card {
  border-radius: 5px;
}
.avatar {
  padding-top: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
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
.author-name {
  font-size: 14px;
  padding: 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.link-icons {
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.cycle-icon {
  display: inline-block;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  line-height: 40px;
  margin-left: 5px;
  background-color: rgba(0, 0, 0, 10%);
  cursor: pointer;
}
.cycle-icon img {
  width: 15px;
  height: 15px;
}

.el-collapse {
  border: none;
}

>>> .el-collapse-item__header {
  background-color: inherit;
  padding-left: 20px;
}

>>> .el-collapse-item__wrap {
  background-color: inherit;
}

>>> .el-collapse-item__content{
  text-align: left;
  padding-left: 10px;
}
</style>
