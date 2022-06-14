<template>
  <div class="app-wrapper">
    <router-view></router-view>
    <router-view name="login"></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$router.push("./login");
  },
};
</script>

<style scoped>
.app-wrapper {
  background: radial-gradient(rgb(255, 255, 182), transparent);
  min-width: 1300px;
}
</style>
