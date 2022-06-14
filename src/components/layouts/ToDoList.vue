<template>
  <div class="to-do-list-wrapper">
    <h3>每日待办事项</h3>
    <div class="undefined dropzone">
      <span>未定义</span>
      <list-sets @drop="drop($event, 1)" @dragover.prevent @dragenter.prevent>
        <li
          v-for="item in listOne"
          :key="item.id"
          draggable="true"
          @dragstart="dragStart($event, item)"
        >
          {{ item.title }}
        </li>
      </list-sets>
    </div>
    <div class="finished-unfinished">
      <div class="finished dropzone">
        <span>已完成</span>
        <list-sets @drop="drop($event, 2)" @dragover.prevent @dragenter.prevent>
          <li
            v-for="item in listTwo"
            :key="item.id"
            draggable="true"
            @dragstart="dragStart($event, item)"
          >
            {{ item.title }}
          </li>
        </list-sets>
      </div>
      <div class="unfinished dropzone">
        <span>未完成</span>
        <list-sets @drop="drop($event, 3)" @dragover.prevent @dragenter.prevent>
          <li
            v-for="item in listThree"
            :key="item.id"
            draggable="true"
            @dragstart="dragStart($event, item)"
          >
            {{ item.title }}
          </li>
        </list-sets>
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
          title: "铲屎",
          list: 1,
        },
        {
          id: 2,
          title: "梳毛",
          list: 1,
        },
        {
          id: 3,
          title: "陪玩",
          list: 1,
        },
        {
          id: 4,
          title: "量体温",
          list: 3,
        },
        {
          id: 5,
          title: "添粮",
          list: 2,
        },
        {
          id: 6,
          title: "换水",
          list: 2,
        },
      ],
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    listThree() {
      return this.items.filter((item) => item.list === 3);
    },
  },
  methods: {
    dragStart: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    drop(evt, listID) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = listID;
    },
  },
};
</script>

<style scoped>
.to-do-list-wrapper {
  text-align: center;
  width: 450px;
  backdrop-filter: blur(3px);
  position: relative;
  top: 45px;
  left: 300px;
  background: rgba(128, 128, 128, 0.141);
  border-radius: 30px;
  height: 68%;
}
h3 {
  padding-top: 25px;
  padding-bottom: 10px;
  margin-bottom: 0;
}
.dropzone span {
  font-weight: bold;
  font-size: 17px;
  margin: 20px 0;
  display: block;
}
.dropzone ul {
  width: 40%;
  height: 400px;
  margin: 0;
}
.undefined ul {
  width: 85%;
  height: 120px;
  position: relative;
  left: 33px;
}
.finished {
  position: relative;
  top: 0%;
  left: -115px;
}
.unfinished {
  position: relative;
  top: -462px;
  left: 113px;
}
li {
  width: 90px;
  height: 35px;
  line-height: 35px;
  display: inline-block;
  margin: 7px 7px;
  background: rgb(244 242 206);
  border-radius: 10px;
}
.finished-unfinished {
  width: 100%;
  height: 65%;
  position: relative;
  left: 135px;
}
.finished-unfinished span {
  position: relative;
  left: -135px;
}
</style>
