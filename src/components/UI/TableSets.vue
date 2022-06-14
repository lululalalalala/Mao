<template>
  <section>
    <table>
      <slot> </slot>
    </table>
  </section>
</template>

<style scoped>
table {
  table-layout: fixed;
  width: 85%;
  max-height: 700px;
  border-collapse: collapse;
  border: 1px solid rgba(255, 0, 157, 0.24);
  text-align: center;
  margin: 0 auto;
  margin-left: 30px;
  box-sizing: border-box;
  background: rgba(243, 243, 172, 0.466);
}
</style>
