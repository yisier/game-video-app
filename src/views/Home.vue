<template>
  <div class="home">
    <el-tabs v-model="tab" @tab-click="tabChanged">
      <el-tab-pane label="LOL视频解说" name="anchor">
        <LolGameVideo :anchorList="anchorList" />
      </el-tab-pane>
      <el-tab-pane label="赛事" name="share">
        暂无内容
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/**
 * 主页
 */

import LolGameVideo from "@/components/LolGameVideo.vue";
import { getAnchorList } from "@/utils/api";
import { setSession, getSession } from "@/utils/util";
export default {
  /**
   * 给此组件起的名字，会显示在Vue的DevTool里面
   */
  name: "Home",
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      page: 1,
      limit: 20,
      tab: "anchor",
      list: [],
      anchorList: [],
    };
  },
  /**
   * 任何属于此组件的方法都定义在这里
   */
  methods: {
    /**
     * 获取主播分类
     */
    getAnchorList() {
      this.anchorList = [];
      getAnchorList().then((res) => {
        var list = res.data.list;
        for (var i = 0; i < list.length; i++) {
          this.anchorList.push(list[i]);
        }
      });
    },

   
    // 切换tab
    tabChanged(tab, event) {
      console.log(tab, event);
      // 主播分类
      if (tab.name == "anchor") {
        this.getAnchorList();
      }
    },
  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {

    if (this.$route.query.tabid) {
      this.activeName = this.$route.query.tabid;
    } else {
      this.activeName = 0;
    }

    // 默认获取主播分类
    this.getAnchorList();
  },
  /**
   * 组件被销毁的钩子：移除绑定的滚动事件
   */
  destroyed() {
    window.removeEventListener("scroll", this.scrollMethod);
  },
  /**
   * 注册引用进来的其他组件
   */
  components: {

    LolGameVideo,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin: auto;
  width: 100%;
  padding: 20px 30px;
  box-sizing: border-box;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
