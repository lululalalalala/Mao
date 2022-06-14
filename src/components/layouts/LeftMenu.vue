<template>
  <div class="home-page-wrapper">
    <ul>
      <router-link to="/home"> <li>主页</li> </router-link>

      <router-link to="/admin"> <li>管理员</li> </router-link>

      <router-link to="/cat" @click="alterVisibility">
        <li>猫咪</li></router-link
      >
      <router-link to="/404"> <li>更多信息</li> </router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <keep-alive>
      <router-view name="catAward"></router-view>
    </keep-alive>
    <keep-alive>
      <router-view name="reminder"></router-view>
    </keep-alive>
    <keep-alive>
      <router-view name="abnormalBehaviors"></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  created() {
    console.log("it finally worked!");
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    alterVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
};
</script>

<style scoped>
.home-page-wrapper {
  min-width: 1300px;
  width: 100%;
  height: 1080px;
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
  box-sizing: border-box;
  background: url("../../assets/3.jpg") no-repeat;
  background-size: 100% 100%;
}
ul {
  list-style: none;
  width: 230px;
  height: 1080px;
  text-indent: 80px;
  padding: 0;
  background: transparent;
  box-shadow: 0 0 20px 0 rgba(255, 0, 157, 0.493);
  position: fixed;
  top: 0;
  left: 0;
  cursor: url("../../assets/ico/woman_yelling_at_a_cat_meme_cursor-woman.ico"),
    default !important;
  backdrop-filter: blur(3px);
  margin: 0;
}
.cats {
  margin: 0;
  padding: 0;
}
li {
  height: 50px;
  line-height: 50px;
  font-weight: bold;
}
li:hover {
  background: rgba(255, 0, 157, 0.493);
  color: rgba(255, 255, 0, 0.671);
  cursor: url("../../assets/ico/woman_yelling_at_a_cat_meme_cursor-woman.ico"),
    default !important;
}
a {
  width: 100%;
  color: rgba(255, 0, 157, 0.493);
}
.active {
  color: rgba(60, 60, 58, 0.807);
}
svg:hover {
  cursor: url("../../assets/ico/woman_yelling_at_a_cat_meme_cursor-woman.ico"),
    default !important;
  color: rgba(255, 255, 0, 0.671);
}
a {
  text-decoration: none;
}
</style>
