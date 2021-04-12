<template>
  <div class="sharelist">
    <el-row type="flex" aligin="middle">
      <el-col
        :span="24"
        v-for="(item, index) in shareList"
        :key="index"
        class="share-comment"
        @mouseleave="downFloatHandle(item)"
        @mouseenter="upFloatHandle(item)"
        :class="animateStyle(item)"
      >
        <!-- 时间 -->
        <div class="a-time">
          <div class="f-fr">
            <i class="el-icon-time"></i> {{ item.date.time }}
          </div>
          <div class="time-dmy f-fl">
            <span class="day">{{ item.date.day }}</span>
            <span class="month fs-18">{{ item.date.month }}月</span>
            <span class="year fs-18 ml10">{{ item.date.year }}</span>
          </div>
        </div>
        <!-- 文章图像 -->
        <div class="a-image cover-img" v-if="item.imgUrl">
          <img :src="item.imgUrl" />
        </div>

        <!--文章 -->
        <div class="a-content">
          <!-- 标题 -->
          <div class="a-title">
            <h3>
              <a>{{ item.title }}</a>
            </h3>
          </div>
          <!-- 文章信息 -->
          <div class="a-info f-oh">
            <div class="f-di tags">
              <i class="iconfont12 icon-tag"></i>
              <a
                v-for="(tag, tagIndex) in item.tags"
                :key="tagIndex"
                class="tag"
                >{{ tag }}</a
              >
            </div>
            <div class="f-di">
              <span>
                <i class="iconfont12 icon-view ml10">{{
                  " " + item.views + " 浏览"
                }}</i>
              </span>
              <span>
                <i class="iconfont12 icon-aixin ml10">
                  {{ " " + item.likes + " 喜欢" }}</i
                >
              </span>
              <span>
                <i class="iconfont12 icon-xiaoxi ml10">
                  <a style="border-bottom: 1px dashed #787977">{{
                    " " + item.comments + " 评论"
                  }}</a>
                </i>
              </span>
            </div>
          </div>
          <!-- 文章简介 -->
          <div class="a-intro">
            <p>{{ item.introduction }}</p>
          </div>
        </div>

        <!-- 查看更多 -->
        <div class="a-viewmore">
          <a>-阅读全文-</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArticles } from "../../api/article";
export default {
  components: {},
  name: "blog-sharebox",
  data() {
    return {
      shareList: [],
      blogMouseFlag: [],
    };
  },
  computed: {
    animateStyle() {
      return function (item) {
        if (item.mouseFlag == null) {
          return null;
        }
        return item.mouseFlag == "down" ? "downstyle" : "upstyle";
      };
    },
  },
  methods: {
    routerChage() {
      let that = this;
      that.initShareArticles();
    },
    initShareArticles() {
      let that = this;
      getArticles()
        .then((res) => {
          //   console.log(res);
          that.shareList = res.data;
          // 填充鼠标操作数组
          // this.blogMouseFlag = new Array(this.shareList.length).fill(null);
          this.shareList.forEach((blog) => (blog["mouseFlag"] = null));
        })
        .catch((err) => {
          //   console.log("出现错误" + err);
          this.$notify({
            title: "错误",
            message: err.data.msg,
            type: "error",
            position: "bottom-right",
          });
        });
    },
    // 动画特效处理
    upFloatHandle(item) {
      item.mouseFlag = "up";
    },
    downFloatHandle(item) {
      if (item.mouseFlag === "up") {
        item.mouseFlag = "down";
      }
    },
  },
  created() {
    let that = this;
    that.routerChage();
  },
};
</script>

<style scoped>
@import "../../assets/style/blog-common.css";
@import "../../assets/style/animation.css";

.share-comment {
  position: relative;
  padding: 30px 15px;
  background-color: rgb(255, 255, 255, 0.5);
  font-size: 15px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
  overflow: hidden;
}
.a-time {
  width: 100%;
  line-height: 32px;
  overflow: hidden;
  font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, Courier New,
    monospace, Helvetica Neue, Arial, sans-serif;
}
.a-time .time-dmy .day {
  display: block;
  color: #6bc30d;
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  position: relative;
  top: 2px;
}
.a-time .month,
.a-time .year {
  color: #989997;
}

.a-image img {
  width: 100% !important;
  height: 100% !important;
  border: none;
  display: block;
}

.a-info {
  color: #787977;
  margin-bottom: 10px;
}
.a-info .tags {
  margin-right: 10px;
}

.a-info .tags .tag {
  display: inline-block;
  font-size: 12px;
  margin: 0 2px;
  border-bottom: 1px dashed #787977;
}

.a-image {
  display: block;
  width: 500px;
  height: 200px;
  overflow: hidden;
  margin: 10px auto;
  border-radius: 5px;
  box-shadow: 0 0px 10px rgb(0 0 0 / 15%);
}

.a-content {
  padding: 0 20px;
  min-height: 200px;
  overflow: hidden;
}
.a-content .a-title h3 {
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.a-content .a-intro p {
  text-align: left;
  text-indent: 2em;
  line-height: 26px;
}
.a-viewmore {
  margin: 15px 0;
}
.a-viewmore a {
  font-size: 12px;
  padding: 8px 10px;
  border: 1px solid #787977;
  cursor: pointer;
  border-radius: 5px;
}
.a-viewmore a:hover {
  background-color: black;
  color: white;
}

</style>
