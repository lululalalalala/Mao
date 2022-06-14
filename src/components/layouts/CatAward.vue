<template>
  <div class="cat-award-wrapper">
    <h3>本月最乖猫咪</h3>
    <span>候选猫</span>
    <div
      class="item"
      draggable="true"
      @dragstart="dragstart($event, item)"
      @dragend="dragend($event)"
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item.title }}
    </div>
    <span>得奖猫</span>
    <div class="drop-field" @drop="drop($event)" @dragover.prevent>
      <div class="item" v-if="droppedItem !== ''">
        {{ droppedItem }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "希希",
        },
        {
          id: 2,
          title: "壹壹",
        },
      ],
      droppedItem: "",
    };
  },
  methods: {
    drop(event) {
      this.droppedItem = event.dataTransfer.getData("item");
    },
    dragstart(event, item) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("item", item.title);
    },
    dragend(event) {
      event.dataTransfer.clearData();
    },
  },
};
</script>

<style scoped>
.cat-award-wrapper {
  text-align: center;
  padding: 20px 60px;
  width: 200px;
  background: rgba(128, 128, 128, 0.141);
  border-radius: 35px;
  position: relative;
  top: -338px;
  right: -865px;
  backdrop-filter: blur(3px);
}
.drop-field {
  background-color: rgba(238, 238, 238, 0.068);
  backdrop-filter: blur(3px);
  border: 2px solid rgba(255, 108, 196, 0.322);
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 12px;
  height: 50px;
  padding-bottom: 0;
}

.item {
  background-color: rgb(244, 242, 206);
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 25px;
  height: 30px;
  line-height: 30px;
  width: 80%;
}
span {
  display: block;
  font-weight: bold;
  font-size: 17px;
  margin: 20px 0;
}
h3{
  margin-bottom: 30px;
}
</style>
