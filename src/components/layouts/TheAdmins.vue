<template>
  <div class="the-admins-wrapper">
    <div class="search">
      <input type="search" placeholder="搜索" v-model="searchValue" />
      <button-sets @click="search">搜索</button-sets>
      <button-sets @click="addAdmin">新增</button-sets>
      <button-sets @click="deleteCheckedAdmin">批量删除</button-sets>
      <button-sets @click="orderedId">排序</button-sets>
    </div>
    <table-sets id="table">
      <thead>
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
          <td style="width: 30px" @click="orderedId">序号</td>
          <td style="width: 70px">头像</td>
          <td style="width: 70px">账号</td>
          <td style="width: 70px">角色</td>
          <td style="width: 100px">电话</td>
          <td style="width: 100px">邮箱</td>
          <td style="width: 150px">描述</td>
          <td style="width: 60px">密码</td>
          <td style="width: 100px">操作</td>
        </tr>
      </thead>
      <tbody id="table-body">
        <tr v-for="(admin, index) in admins" :key="index">
          <td>
            <input
              type="checkbox"
              name="checkbox"
              value=""
              v-model="admin.checked"
              @change="checkedChange"
            />
          </td>
          <td name="adminId" :id="index + 1">{{ admin.id }}</td>
          <td><img :src="admin.img" alt="管理员" /></td>
          <td>{{ admin.account }}</td>
          <td>{{ admin.role }}</td>
          <td>{{ admin.phone }}</td>
          <td>{{ admin.email }}</td>
          <td>{{ admin.description }}</td>
          <td>
            <div class="password">
              <div>
                <span v-if="pwdIsVisible">{{ admin.password }}</span>
                <span v-else>***</span>
              </div>
              <button-sets @click="alterPwdVisibility(index)"
                >查看密码</button-sets
              >
            </div>
          </td>
          <td>
            <div>
              <button-sets @click="edit(index)">编辑</button-sets>
              <button-sets @click="deleteAdmin(index)">删除</button-sets>
            </div>
          </td>
        </tr>
      </tbody>
    </table-sets>
    <dialog-sets
      v-if="formIsVisible"
      :title="addAdmins ? '请确认以下信息：' : '请修改以下信息：'"
      @close="addAdmin"
    >
      <template #default>
        <form class="admin-form" v-if="formIsVisible" @submit.prevent>
          <label
            >头像：
            <input v-model="admin.img" />
          </label>
          <label
            >账号：
            <input v-model="admin.account" />
          </label>
          <label
            >密码：
            <input v-model="admin.password" />
          </label>
          <label
            >电话：
            <input v-model="admin.phone" />
          </label>
          <label
            >邮箱：
            <input v-model="admin.email" />
          </label>
          <label
            >描述：
            <textarea rows="3" v-model="admin.description" />
          </label>
        </form>
      </template>
      <template #actions>
        <button-sets v-if="addAdmins" class="pop-up-button" @click="confirm"
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
      formIsVisible: false,
      addAdmins: true,
      searchValue: null,
      // accountInput: "",
      // passwordInput: "",
      // phoneInput: "",
      // emailInput: "",
      // descriptionInput: "",
      idx: null,
      admins: [
        {
          checked: false,
          id: null,
          account: "admin1",
          password: "123456",
          pwdIsVisible: false,
          role: "管理员",
          img: require("./woman_yelling_at_a_cat_meme_cursor-woman.png"),
          phone: "18915464612",
          email: "admin1@cats.com",
          description: "1号管理员",
        },
        {
          checked: false,
          id: null,
          account: "admin2",
          password: "123456",
          pwdIsVisible: false,
          role: "管理员",
          img: require("./woman_yelling_at_a_cat_meme_cursor-woman.png"),
          phone: "15215464612",
          email: "admin2@cats.com",
          description: "2号管理员",
        },
        {
          checked: false,
          id: null,
          account: "admin3",
          password: "123456",
          pwdIsVisible: false,
          role: "管理员",
          img: require("./woman_yelling_at_a_cat_meme_cursor-woman.png"),
          phone: "18915468912",
          email: "admin3@cats.com",
          description: "3号管理员",
        },
        {
          checked: false,
          id: null,
          account: "admin4",
          password: "123456",
          pwdIsVisible: false,
          role: "管理员",
          img: require("./woman_yelling_at_a_cat_meme_cursor-woman.png"),
          phone: "13615464612",
          email: "admin4@cats.com",
          description: "4号管理员",
        },
      ],
      admin: {
        checked: false,
        id: null,
        account: null,
        password: "",
        pwdIsVisible: false,
        role: "管理员",
        img: require("./woman_yelling_at_a_cat_meme_cursor-woman.png"),
        phone: "",
        email: "",
        description: "",
      },
    };
  },
  methods: {
    allCheckedChange() {
      // allChecked为true checked都为true 反之亦然
      this.admins.forEach((admin) => (admin.checked = this.allChecked));
    },
    checkedChange() {
      //计算勾选项个数
      let num = this.admins.filter((admin) => admin.checked).length;
      num === this.admins.length
        ? (this.allChecked = true)
        : (this.allChecked = false);

      //every() 返回true/false
      //this.allChecked = this.admins.every(admin => admin.check)
    },
    alterPwdVisibility(index) {
      console.log(index);
    },
    addAdmin() {
      //显示dialog
      this.formIsVisible = !this.formIsVisible;
      this.addAdmins = true;
    },
    confirm() {
      if (this.admin.account) {
        this.admins.push(this.admin);
        this.formIsVisible = !this.formIsVisible;
      } else {
        alert("请输入管理员账号！");
      }

      // const enteredAccount = this.$refs.accountInput.value;
      // const enteredPassword = this.$refs.passwordInput.value;
      // const enteredPhone = this.$refs.phoneInput.value;
      // const enteredEmail = this.$refs.emailInput.value;
      // const enteredDescription = this.$refs.descriptionInput.value;

      // const newAdmin = {
      //   checked: false,
      //   id: this.admins.length + 1,
      //   account: enteredAccount,
      //   password: enteredPassword,
      //   role: "管理员",
      //   status: true,
      //   phone: enteredPhone,
      //   email: enteredEmail,
      //   description: enteredDescription,
      // };
      // this.admins.push(newAdmin);
      // this.formIsVisible = !this.formIsVisible;
    },
    edit(index) {
      this.formIsVisible = !this.formIsVisible;
      this.addAdmins = false;
      //Object.assign 创建新数组 新地址
      let item = Object.assign({}, this.admins[index]);
      this.student = item;
      this.idx = index;
    },
    save() {
      if (this.admin.account) {
        //替换
        this.admins.splice(this.idx, 1, this.admin);
        this.formIsVisible = !this.formIsVisible;
      }
    },
    deleteAdmin(index) {
      if (confirm("确定删除该管理员吗？")) {
        this.admins.length <= 1
          ? alert("请至少保留一位管理员！")
          : //按照index删除
            this.admins.splice(index, 1);
      }
    },
    deleteCheckedAdmin() {
      if (this.allChecked) {
        if (confirm("警告！确定要删除所有管理员吗？")) {
          this.admins = this.admins.filter((admin) => admin.checked === false);
        }
      } else {
        // 剔除掉checked = true的admin
        this.admins = this.admins.filter((admin) => admin.checked === false);
      }
    },
    close() {
      this.formIsVisible = !this.formIsVisible;
    },
    search() {
      this.searchValue ? this.searchFunction() : alert("请输入搜索内容！");
    },
    orderedId() {
      let len = this.admins.length;
      let rows = document
        .getElementById("table-body")
        .getElementsByTagName("tr");
      for (let i = 0; i < len; i++) {
        rows[i].cells[1].innerText = i + 1;
      }
    },
    searchFunction() {
      alert("Sorry~搜索功能还在开发中");
    },
  },
};
</script>

<style scoped>
.the-admins-wrapper {
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
.password {
  margin: 0 auto;
  width: 80px;
}
.admin-form {
  width: 200px;
  margin: 0 auto;
  margin-top: 25px;
}
.admin-form label {
  color: rgba(255, 0, 157, 0.445);
  font-weight: bold;
  margin-bottom: 15px;
  display: block;
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
}
.admin-form input {
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
.admin-form textarea {
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
.admin-form input:hover,
textarea:hover {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
.admin-form input:focus,
textarea:focus {
  outline: none;
  background: rgb(243, 243, 172);
}
.pop-up-button {
  width: 150px;
  height: 50px;
  margin-top: -10px;
}
.password div {
  position: relative;
  top: 20px;
  left: -50px;
}
.password button {
  margin-top: 30px;
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
</style>
