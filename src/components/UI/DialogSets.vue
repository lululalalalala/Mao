<template>
  <teleport to="body">
    <div @click="$emit('pop-up')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
          <button @click="$emit('pop-up')">Close</button>
        </slot>
      </menu>
    </dialog>
  </teleport>
</template>

<script>
export default {
  emits: ["pop-up"],
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
  backdrop-filter: blur(3px);
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
}
dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background: rgb(243 239 204);
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
}
header {
  background: rgba(255, 0, 157, 0.301);
  color: white;
  width: 100%;
  padding: 1rem;
}
header h2 {
  margin: 0 12px;
  color: rgb(243, 239, 204);
}
section {
  padding: 1rem;
}
menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
