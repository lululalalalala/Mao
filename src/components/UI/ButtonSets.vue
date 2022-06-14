<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  display: inline-block;
  text-decoration: none;
  margin: 15px auto;
  margin-bottom: 25px;
  width: 80px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: rgba(255, 0, 157, 0.37);
  background: rgba(243, 243, 172, 0.466);
  font-weight: bold;
  border: 1px solid rgba(255, 0, 157, 0.301);
}
button:hover {
  cursor: url("../../assets/ico/woman_yelling_at_a_cat_meme_pointer-cat.ico"),
    default;
  outline: none;
  border: 1px solid yellow;
  color: rgba(255, 0, 157, 0.527);
  background: rgba(255, 255, 0, 0.479);
}
</style>
