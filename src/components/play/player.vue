<template>
  <div class="panel">
    <router-link class="user" :to="{path: 'play' }">
      <img :src="author.img" />
      <span>{{author.name}}</span>
    </router-link>
    <div>{{author.introduction}}</div>
  </div>
</template>

<script>
/**
 * 话题页面右侧上面的个人信息展示页面
 */
// import { getUserByName } from "@/utils/api";
import eventProxy from "@/utils/eventProxy";

export default {
  // 主播个人简介
  name: "player",
 
  props: ["author"],
  /**
   * 当前组件的‘数据中心'
   */
  data() {
    return {
      user: {},
    };
  },
  /**
   * 任何属于此组件的方法都定义在这里
   */
  methods: {
  
  },
  /**
   * 一般此钩子下面调用接口获取数据
   */
  created() {
  },
  /**
   * 监听props和data中的值是否有变化的钩子
   */
  watch: {
 
  },
};
</script>

<style lang="scss" scoped>
.panel {
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  > a {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius: 5px;
      margin-right: 20px;
    }
  }
  .user {
    margin-bottom: 10px;
  }
}
</style>

