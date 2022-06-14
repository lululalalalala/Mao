<template>
  <div class="the-cats-wrapper">
    <div class="search">
      <input type="search" placeholder="搜索" v-model="searchValue" />
      <button-sets @click="search">搜索</button-sets>
      <button-sets @click="addCat">新增</button-sets>
      <button-sets @click="deleteCheckedCat">批量删除</button-sets>
      <button-sets @click="orderedId">排序</button-sets>
    </div>
    <table-sets>
      <thead class="table-head">
        <tr>
          <td style="width: 30px">
            <input
              type="checkbox"
              name="checkbox"
              value=""
              v-model="allChecked"
              @change="allCheckedChange"
            />
          </td>
          <td style="width: 50px">序号</td>
          <td style="width: 100px">头像</td>
          <td style="width: 80px">名字</td>
          <td style="width: 50px">性别</td>
          <td style="width: 80px">品种</td>
          <td style="width: 120px">出生日期</td>
          <td style="width: 120px">到家日期</td>
          <td style="width: 100px">是否绝育</td>
          <td style="width: 100px">目前状态</td>
          <td style="width: 200px">描述</td>
          <td style="width: 150px">操作</td>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="(cat, index) in cats" :key="index">
          <td>
            <input
              type="checkbox"
              name="checkbox"
              value=""
              v-model="cat.checked"
              @change="checkedChange"
            />
          </td>
          <td :id="index + 1"></td>
          <td><img :src="cat.img" alt="猫" /></td>
          <td>{{ cat.name }}</td>
          <td>{{ cat.sex }}</td>
          <td>{{ cat.species }}</td>
          <td>{{ cat.birthDay }}</td>
          <td>{{ cat.arrivalDay }}</td>
          <td>{{ cat.neutering }}</td>
          <td>{{ cat.status }}</td>
          <td>{{ cat.description }}</td>
          <td>
            <div>
              <button-sets @click="edit(index)">编辑</button-sets>
              <button-sets @click="deleteCat(index)">删除</button-sets>
            </div>
          </td>
        </tr>
      </tbody>
    </table-sets>
    <dialog-sets
      v-if="dialogIsVisible"
      :title="addCats ? '请确认以下信息：' : '请修改以下信息：'"
      @close="addCat"
    >
      <template #default>
        <form class="cat-form" v-if="dialogIsVisible" @submit.prevent>
          <div>
            <label
              >头像：
              <input type="text" class="sets" v-model="cat.img" />
            </label>
            <label
              >名字：<input type="text" class="sets" v-model="cat.name"
            /></label>
            <label
              >性别：
              <select id="gender" name="gender" class="sets" v-model="cat.sex">
                <option value="公">公</option>
                <option value="母">母</option>
              </select>
            </label>
            <label
              >品种：<input type="text" class="sets" v-model="cat.species"
            /></label>
            <label
              >出生日期：<input type="text" class="sets" v-model="cat.birthDay"
            /></label>
            <label
              >到家日期：<input
                type="text"
                class="sets"
                v-model="cat.arrivalDay"
            /></label>
            <label
              >是否绝育：
              <select
                id="neutering"
                name="neutering"
                class="sets"
                v-model="cat.neutering"
              >
                <option value="是">是</option>
                <option value="否">否</option>
              </select>
            </label>
            <label
              >目前状态：
              <select
                id="status"
                name="status"
                class="sets"
                v-model="cat.status"
              >
                <option value="一切正常">一切正常</option>
                <option value="已回喵星">已回喵星</option>
              </select>
            </label>
            <label
              >描述：
              <textarea rows="3" class="sets" v-model="cat.description" />
            </label>
          </div>
        </form>
      </template>
      <template #actions>
        <button-sets v-if="addCats" class="pop-up-button" @click="confirm"
          >确认</button-sets
        >
        <button-sets v-else class="pop-up-button" @click="save"
          >保存</button-sets
        >
        <button-sets class="pop-up-button" @click="close">关闭</button-sets>
      </template>
    </dialog-sets>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allChecked: false,
      dialogIsVisible: false,
      addCats: true,
      searchValue: null,
      cats: [
        {
          checked: false,
          id: 1,
          img: require("./meme-pop-cat-cursor-close.png"),
          name: "希希",
          sex: "公",
          species: "高地",
          birthDay: "2020-07-31",
          arrivalDay: "2020-11-11",
          neutering: "是",
          status: "一切正常",
          description: "一号猫咪",
          operation: null,
        },
        {
          checked: false,
          id: 2,
          img: require("./woman_yelling_at_a_cat_meme_pointer-cat.png"),
          name: "壹壹",
          sex: "公",
          species: "狮子猫",
          birthDay: "2021-08-31",
          arrivalDay: "2021-10-30",
          neutering: "否",
          status: "一切正常",
          description: "二号猫咪",
          operation: null,
        },
        {
          checked: false,
          id: 3,
          img: require("./woman_yelling_at_a_cat_meme_pointer-cat.png"),
          name: "一一",
          sex: "公",
          species: "狮子猫",
          birthDay: "2020-05-14",
          arrivalDay: "2020-08-07",
          neutering: "是",
          status: "已回喵星",
          description: "三号猫咪",
          operation: null,
        },
      ],
      cat: {
        checked: false,
        id: null,
        img: require("./meme-pop-cat-pointer-open.png"),
        name: null,
        sex: null,
        species: null,
        birthDay: "2020-05-14",
        arrivalDay: "2020-08-07",
        neutering: true,
        status: false,
        description: null,
        operation: null,
      },
    };
  },
  methods: {
    addCat() {
      this.dialogIsVisible = !this.dialogIsVisible;
    },
    confirm() {
      if (this.cat.name) {
        this.cats.push(this.cat);
        this.dialogIsVisible = !this.dialogIsVisible;
      } else {
        alert("请输入宠物名字！");
      }
    },
    allCheckedChange() {
      // allChecked为true checked都为true 反之亦然
      this.cats.forEach((cat) => (cat.checked = this.allChecked));
    },
    checkedChange() {
      //计算勾选项个数
      let num = this.cats.filter((cat) => cat.checked).length;
      num === this.cats.length
        ? (this.allChecked = true)
        : (this.allChecked = false);

      //every() 返回true/false
      //this.allChecked = this.cats.every(cat => cat.check)
    },
    edit(index) {
      this.dialogIsVisible = !this.dialogIsVisible;
      this.addCats = false;
      //Object.assign 创建新数组 新地址
      let item = Object.assign({}, this.cats[index]);
      this.cat = item;
      this.idx = index;
    },
    save() {
      if (this.cat.name) {
        //替换
        this.cats.splice(this.idx, 1, this.cat);
        this.dialogIsVisible = !this.dialogIsVisible;
      }
    },
    deleteCat(index) {
      if (confirm("确定删除该猫咪吗？")) {
        //按照index删除
        this.cats.splice(index, 1);
      }
    },
    deleteCheckedCat() {
      if (this.allChecked) {
        if (confirm("警告！确定要删除所有猫咪吗？")) {
          this.cats = this.cats.filter((cat) => cat.checked === false);
        }
      } else {
        // 剔除掉checked = true的cat
        this.cats = this.cats.filter((cat) => cat.checked === false);
      }
    },
    close() {
      this.dialogIsVisible = !this.dialogIsVisible;
    },
    search() {
      this.searchValue
        ? alert("Sorry~搜索功能还在开发中")
        : alert("请输入搜索内容！");
    },
    orderedId() {
      let len = this.cats.length;
      let rows = document
        .getElementById("table-body")
        .getElementsByTagName("tr");
      for (let i = 0; i < len; i++) {
        rows[i].cells[1].innerText = i + 1;
      }
    },
  },
};
</script>

<style scoped>
.the-cats-wrapper {
  height: 100%;
  width: 100%;
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
  margin-left: 230px;
}
.search {
  padding-top: 20px;
  margin-left: 30px;
}
.search input {
  margin-right: 10px;
}
.search button {
  margin-right: 10px;
}
.search button:hover {
  background: radial-gradient(rgba(255, 0, 157, 0.301), transparent);
  border: 1px solid rgba(255, 0, 157, 0.301);
}
tbody tr:nth-child(even) {
  background: rgb(243, 243, 172);
}
tbody tr:hover {
  background: rgba(255, 0, 157, 0.301);
}
td {
  height: 35px;
  border-collapse: collapse;
  border: 1px solid rgba(255, 0, 157, 0.24);
}
thead td {
  height: 40px;
  font-weight: bold;
  background: radial-gradient(rgba(255, 0, 157, 0.301), transparent);
  border-collapse: collapse;
  border: 1px solid rgba(255, 0, 157, 0.24);
  position: sticky;
  top: 0;
}
td input {
  width: 20px;
  height: 20px;
}
tbody div {
  width: 180px;
  margin: 0 auto;
  padding: 0;
}
table button:first-child {
  margin-right: 10px;
}
td input {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
.cat-form {
  width: 300px;
  margin: 0 auto;
  margin-top: 25px;
}
.cat-form label {
  color: rgba(255, 0, 157, 0.445);
  font-weight: bold;
  margin-bottom: 15px;
  display: block;
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
}
.cat-form input {
  text-indent: 6px;
  height: 30px;
  line-height: 40px;
  width: 200px;
  color: rgba(255, 0, 157, 0.63);
  border: 1px solid rgba(255, 0, 157, 0.301);
  border-radius: 8px;
  font-size: 14px;
  background: rgb(243, 239, 204);
  margin-top: 8px;
}
.cat-form textarea {
  text-indent: 6px;
  width: 200px;
  color: rgba(255, 0, 157, 0.63);
  border: 1px solid rgba(255, 0, 157, 0.301);
  border-radius: 8px;
  font-size: 14px;
  background: rgb(243, 239, 204);
  margin-top: 8px;
  resize: none;
  font-family: sans-serif;
}
.cat-form input:hover,
textarea:hover {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
.cat-form input:focus,
textarea:focus {
  outline: none;
  background: rgb(243, 243, 172);
}
.pop-up-button {
  width: 150px;
  height: 50px;
  margin-top: -10px;
}
.table-head {
  position: static;
}
the-cats-wrapper dialog {
  margin-top: -50px;
}
select {
  background: rgb(243, 239, 204);
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid rgba(255, 0, 157, 0.301);
  font-size: 14px;
  color: rgba(255, 0, 157, 0.525);
}
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
label select {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), default !important;
  outline: none;
}
</style>
