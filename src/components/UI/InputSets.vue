<template>
    <input type="text">
</template>

<style scoped>
input {
  text-indent: 6px;
  height: 40px;
  line-height: 40px;
  width: 200px;
  color: rgba(255, 0, 157, 0.63);
  border: 1px solid rgba(255, 0, 157, 0.301);
  border-radius: 8px;
  font-size: 16px;
}
input:hover {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
input:focus {
  outline: none;
  background: rgb(243, 243, 172);
}
input::placeholder {
  color: rgba(255, 0, 157, 0.377);
}
</style>