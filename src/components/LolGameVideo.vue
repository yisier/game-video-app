<template>
  <div>
    <div class="lol-lable">
      <div style="margin-top: 20px">
        <el-radio-group v-model="radio" size="small">
          <el-radio-button label="全部分类" @click.native.prevent="getVideoList(null,'全部分类')"></el-radio-button>
          <el-radio-button
            v-for="item in anchorList"
            :key="item.id"
            :label="item.name"
            @click.native.prevent="getVideoList(item.id,item.name)"
          ></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <br />
    <div>{{radio}} 解说视频 {{ count }} 个视频</div>

    <!-- <Divider class="divider" /> -->
    <div class="videoList">
      <VideoList :videoList="videoList" :count="count" />
    </div>

    <div class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="count"
        :current-page.sync="pageNum"
        @current-change="handleCurrentChange"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import Divider from "@/components/Divider";
import VideoList from "@/components/VideoList";
import { getVideoList } from "@/utils/api";

/**
 * 会在首页使用的组件 :p
 */
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "LolGameVideo",
 
  props: ["anchorList"],
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      videoList: [],
      anchor: "",
      count: 0,
      pageSize: 20,
      pageCount: 0,
      pageNum: 1,

      radio: "全部分类",
    };
  },
  methods: {
    getVideoList(authorId, authorName) {
      console.log(authorId);
      this.radio = authorName;

      this.videoList = [];
      var url = "/" + this.pageNum + "/" + this.pageSize;
      if (authorId != null) {
        url = url + "?author=" + authorId;
      }
      getVideoList(url).then((res) => {
        console.log(res.data);
        var data = res.data;
        var list = data.list;
        this.count = data.total;
        this.pageCount = data.pages;
        this.pageNum = data.pageNum;
        for (var i = 0; i < list.length; i++) {
          this.videoList.push(list[i]);
        }
      });
    },

    handleCurrentChange(val) {
      this.pageNum = val;
      this.getVideoList(null, this.radio);
    },
  },

  created() {
    // 默认获取主播分类
    this.getVideoList(null, "全部分类");
  },

  filters: {},

  /**
   * 注册引用进来的其他组件
   */
  components: {
    Divider,
    VideoList,
  },
};
</script>

<style lang="scss" scoped>
.like {
  background-color: rgb(132, 235, 111);
  color: red;
}

.lol-lable {
  margin-bottom: 6px;
}

.videoList {
  margin-top: 20px;
}

.pager {
  margin-left: 35%;
  float: left;
}
</style>
