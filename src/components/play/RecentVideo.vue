<template>
  <div class="panel">
    <header>最近发布的视频</header>

    <Divider class="divider" />
    <!-- <template v-for="item in lastVideo"> -->
    <div v-for="(item,index) in lastVideo" :key="index">
      <div class="main">
        <!-- <router-link
          key="{item.id}"
          class="title-content"
          :to="{path:'play',query: {authorId: aId,videoId:item.id}}"
        >{{item.name}}</router-link>-->
        <!-- 这里为什么用a链接跳转，迫不得已，因为router-link在相同url不同参数的情况下不会刷新页面，a连接比较简单 -->
        <a class="title-content" :href="'/play?authorId='+aId+'&videoId='+item.id">{{item.name}}</a>
        <span class="time">
          {{$moment(item.publishTime, 'YYYY-MM-DD')
          .startOf('day')
          .fromNow()}}
        </span>
      </div>
      <Divider class="inside-divider" />
    </div>
  </div>
</template>

<script>


import Divider from "@/components/Divider";
import { findVideoById } from "@/utils/api";

export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "RecentVideo",

  props: ["lastVideo", "authorId"],

  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      // 作者ID
      aId: "",
    };
  },

  methods: {},
 
  watch: {},
  created() {
    // 从_props中获取上级组件传递过来的参数
    let _this = this;
    let { lastVideo, authorId } = _this._props;
    this.aId = authorId;
  },

  /**
   * 注册引用进来的其他组件
   */
  components: {
    Divider,
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  header {
    color: black;
    font-weight: bold;
  }
  > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        display: flex;
        align-items: center;
      }
    }
    .time {
      float: right;
      color: #777;
      font-size: 11px;
    }
    .inside-divider {
      margin: 10px 0;
    }
    .avatar {
      margin-left: 10px;
    }
  }
  img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    margin-right: 5px;
  }
}
.divider {
  margin: 12px 0;
}

.title-content {
  font-size: 12px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

