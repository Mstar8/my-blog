<template>
  <div class="sharelist">
    <el-row>
      <el-col
        :span="24"
        class="share-comment"
        v-for="(item, index) in shareList"
        :key="index"
      >
        <!-- 时间 -->
        <div class="a-time">
          <div class="time-hm">
            <i class="el-icon-time"></i> {{ item.date.time }}
          </div>
          <div class="time-dmy">
            <span class="day">{{ item.date.day }}</span>
            <span class="month fs-18">{{ item.date.month }}月</span>
            <span class="year fs-18 ml10">{{ item.date.year }}</span>
          </div>
        </div>
        <div></div>
        <!-- 文章图像 -->
        <div class="a-image cover-img" v-if="item.imgUrl">
          <img :src="item.imgUrl" />
        </div>
        <div class="a-content">
          <div class="a-title">
            <h3>
              <a>{{ item.title }}</a>
            </h3>
          </div>
          <div class="a-intro">
            <p>{{ item.introduction }}</p>
          </div>
        </div>
        <!-- 清楚浮动 -->
        <br clear="all" />
        <div class="a-viewmore" style="margin: 25px 0">
          <el-divider content-position="right">
            <a class="fs-18 f-fwb"
              >阅读更多 <i class="el-icon-d-arrow-right"></i
            ></a>
          </el-divider>
        </div>
        <div class="a-info f-oh">
          <div class="f-fl tags">
            <i class="el-icon-link"></i>
            <a
              v-for="(tag, tagIndex) in item.tags"
              :key="tagIndex"
              class="tag"
              >{{ tag }}</a
            >
          </div>
          <div class="f-fr">
            <span>
              <i class="el-icon-view">{{ " " + item.views }}</i>
            </span>
            <span>
              <i class="iconfont icon-aixin ml20"> {{ " " + item.likes }}</i>
            </span>
            <span>
              <i class="iconfont icon-xiaoxi ml20">
                {{ " " + item.comments }}</i
              >
            </span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getArticles } from "../../api/article";
export default {
  name: "blog-sharebox",
  data() {
    return {
      shareList: [],
    };
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
  },
  components: {},
  created() {
    let that = this;
    that.routerChage();
  },
};
</script>

<style scoped>
@import "../../assets/style/blog-common.css";
.share-comment {
  position: relative;
  padding: 15px;
  background-color: white;
  font-size: 15px;
  margin-bottom: 40px;
  box-shadow: 0 0 10px rgb(0 0 0 / 15%);
  overflow: hidden;
}

.a-time {
  width: 100%;
  line-height: 32px;
  background-color: white;
  overflow: hidden;
  font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, Courier New,
    monospace, Helvetica Neue, Arial, sans-serif;
}
.a-time .time-dmy {
  float: right;
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
.a-time .time-hm {
  float: left;
}

.a-image {
  display: block;
  margin-top: 18px;
  margin-right: 20px;
  border: 1px solid #e8e9e7;
  width: 300px;
  height: 200px;
  float: left;
  overflow: hidden;
}
.a-image img {
  width: 100% !important;
  height: 100% !important;
  border: none;
  display: block;
}

.a-content {
  padding: 0 20px;
  text-align: left;
  min-height: 200px;
  overflow: hidden;
}
.a-content .a-title h3 {
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 18px;
}
.a-content .a-intro p {
  line-height: 26px;
}

.a-info {
  color: #787977;
}
.a-info .tags .tag {
  display: inline-block;
  font-size: 12px;
  background-color: #f1f2f0;
  color: #787977;
  margin: 2px;
  padding: 2px 5px;
}
</style>
