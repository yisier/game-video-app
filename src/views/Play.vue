<template>
  <div class="topic">
    <div class="left">
      <div class="title">{{video.name}}</div>
      <div class="info">
        <span>
          发布于&nbsp;
          {{video.publishTime}}
          &nbsp;•&nbsp;
        </span>
        作者：
       {{author.name}}&nbsp;•&nbsp;
        <span>{{video.playCount}}次播放&nbsp;&nbsp;</span>
      </div>
      <Divider />
      <div class="content" />
      <iframe height="498" width="830" :src="video.videoUrl" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="right">
      <player :author="author" />
      <RecentVideo :lastVideo="lastVideo" :authorId="this.$route.query.authorId" />
    </div>
  </div>
</template>

<script>

import Divider from "@/components/Divider";

import player from "@/components/play/player";
import RecentVideo from "@/components/play/RecentVideo";

import { getAnchor, findVideoCreateTimeByAnchorId,findVideoById } from "@/utils/api";

export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "Play",
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      video:{},
      // 作者信息
      author: {name: "", introduction: "", img: "" },
      // 最近发布的视频
      lastVideo: [],
    };
  },
  /**
   * 任何属于此组件的方法都定义在这里
   */
  methods: {},
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
    
    var videoId = this.$route.query.videoId;

    // 获取视频信息
    findVideoById(videoId).then((res) => {
      console.log(res.data);
      this.video = res.data;

    });

    var authorId = this.$route.query.authorId;
    // 获取主播信息
    getAnchor(authorId).then((res) => {
      var data = res.data;
      this.author.name = data.name;
      this.author.introduction = data.introduction;
      this.author.img = data.personalHomepage;
    });

    // 最近发布的视频
    findVideoCreateTimeByAnchorId(authorId).then((res) => {
      console.log(res.data);
      var list = res.data;
      console.log(list);
      for (var i = 0; i < list.length; i++) {
        this.lastVideo.push(list[i]);
      }
    });

  },
  
  /**
   * 注册引用进来的其他组件
   */
  components: {
    Divider,
    player,
    RecentVideo,
  },
};
</script>

<style lang="scss" scoped>
$grey-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

.topic {
  display: flex;
  margin-bottom: 100px;
  .title {
    color: black;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 8px;
  }
  .content {
    color: #333;
    line-height: 1.6;
    margin-bottom: 50px;
    /deep/ img {
      width: 100%;
    }
  }
  .left {
    width: 72%;
    float: left;
    box-shadow: $grey-shadow;
    padding: 20px;
    .info {
      display: flex;
      align-items: center;
      color: #838383;
      font-size: 12px;
    }
  }
  .right {
    float: right;
    width: 25%;
    height: 100%;
    margin-left: 2%;
  }
}
</style>

