<template>
  <div class="abnormal-behaviors-wrapper">
    <list-sets>
      <h3>异常记录</h3>
      <li>
        希希
        <list-sets class="xixi">
          <li>发烧</li>
          <li>呕吐</li>
          <li>拉稀</li>
          <li>食欲不振</li>
        </list-sets>
      </li>
      <li>
        壹壹
        <list-sets class="yiyi">
          <li>呕吐</li>
          <li>拉稀</li>
        </list-sets>
      </li>
    </list-sets>
  </div>
</template>

<script></script>

<style scoped>
.abnormal-behaviors-wrapper {
  width: 300px;
  text-align: center;
  position: relative;
  top: -800px;
  left: 1400px;
}
li {
  font-weight: bold;
  font-size: 18px;
}
.xixi li,
.yiyi li {
  font-weight: lighter;
  font-size: 15px;
  margin-bottom: 10px;
}
</style>
