<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<style scoped>
ul {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  border: 2px solid rgba(255, 108, 196, 0.322);
  border-radius: 15px;
  backdrop-filter: blur(3px);
}
</style>
