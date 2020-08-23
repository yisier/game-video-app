<template>
  <div>

    <div v-for="(video,index) in videoList" :key="index">
      <div class="videos-list">
        <div class="items">
          <div
            class="v va"
            @click="toPlay(video)"
            @mouseover="changeActive($event)"
            @mouseout="removeActive($event)"
          >
            <div class="v-thumb">
              <img :src="video.imgUrl" :alt="video.name" class="v-img" />
            </div>

            <div class="v-link">
              <div class="v-link-tagrt">
                <i class="ico-1080P">{{video.videoResolution}}</i>
              </div>
              <div class="v-link-tagrb">
                <span class="v-time">{{video.timeLen}}</span>
              </div>
            </div>
            <div class="v-meta">
              <div class="v-meta-title">
                <a
                  @click="toPlay(video)"
                  data-from="y1.7-2"
                  target="_blank"
                  :title="video.name"
                >{{video.name}}</a>
              </div>
              <div class="v-meta-entry">
                <span class="v-publishtime">{{video.publishTime}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 会在首页使用的组件 :p
 */
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "VideoList",

  props: ["videoList", "count"],
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      article: [],
    };
  },
  methods: {
    toPlay(video) {
      console.log(video);
      this.$router.push({
        path: "/play",
        query: { authorId: video.author, videoId: video.id },
      });
    },

    // 鼠标移入加入class
    changeActive($event) {
      console.log();
      $event.currentTarget.className = "v va cursor";
      event.currentTarget.firstChild.firstChild.classList.add("active");
    },
    removeActive($event) {
      event.currentTarget.firstChild.firstChild.classList.remove("active");
      $event.currentTarget.className = "v va";
    },
  },
  filters: {},

  /**
   * 注册引用进来的其他组件
   */
  components: {},
};
</script>


<style lang="scss" scoped>
.active {
  box-shadow: 10px 10px 5px #888888;
  border-style: solid 0;
}

.cursor {
  cursor: pointer;
}

.v-meta-title {
  font-size: 14px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.v .v-link .v-link-tagrt {
  z-index: 3;
  position: absolute;
  top: 0;
  right: 0;
}

.v .ico-1080P {
  background-color: #bb9b69;
  background-color: rgba(187, 155, 105, 0.9);
  color: #ffffff;
}
.v .ico-HD,
.v .ico-SD,
.v .ico-1080P,
.v .ico-video-vip,
.v .ico-video-channelvip {
  display: block;
  margin-right: 10px;
  height: 22px;
  line-height: 22px;
  padding: 0 5px;
  -webkit-border-bottom-left-radius: 5px;
  -moz-border-radius-bottomleft: 5px;
  border-bottom-left-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-bottomright: 5px;
  border-bottom-right-radius: 5px;
  background-color: #515151;
  background-color: rgba(81, 81, 81, 0.9);
  font-size: 12px;
  color: #d3c39c;
  text-align: center;
  font-style: normal;
}

.v .v-link .v-link-tagrb {
  z-index: 3;
  position: absolute;
  bottom: 0;
  right: 0;
}

.v .v-time {
  display: block;
  height: 17px;
  line-height: 17px;
  margin: 0 10px 20px 0;
  padding: 0 5px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  background: #000;
  background: rgba(0, 0, 0, 0.5);
  color: #e7e7e7;
  white-space: nowrap;
  font-size: 12px;
}

.va .v-meta {
  padding: 5px 0;
}

.v .v-publishtime {
  float: left;
}

.v .v-meta .v-meta-entry {
  height: 20px;
  font-size: 12px;
  color: #bbbbbb;
}

.videos-list .items .v {
  float: left;
  height: 180px;
  min-height: 1px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 30px;
}

.v {
  margin: 0;
  padding: 0;
  position: relative;
  width: 260px;
  // background-color: rebeccapurple;
  padding-left: 5px;
}

.v .v-thumb img {
  width: 100%;
  border-radius: 4px
}

.v img {
  display: block;
  border: 1 none;
}

fieldset,
img {
  border: 0;
}

img {
  border: none;
}

.v .v-link,
.v .v-thumb {
  width: 250px;
  height: 150px;
  padding-left: 5px;
}

.v .v-link {
  z-index: 4;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
