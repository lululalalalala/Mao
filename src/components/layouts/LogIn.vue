<template>
  <div class="log-in-wrapper">
    <section>
      <h1>猫咪管理系统</h1>
      <span>欢迎回来!</span>
      <div class="login">
        <h2>管理员登录</h2>
        <div>
          <div>
            <label>
              <svg aria-hidden="true" class="user">
                <use xlink:href="#icon-maomao"></use>
              </svg>
              <input type="text" placeholder="账号" v-model="adminAccount" />
            </label>
          </div>
          <div>
            <label>
              <svg aria-hidden="true" class="pwd">
                <use xlink:href="#icon-maoliang1"></use>
              </svg>
              <input type="password" placeholder="密码" v-model="adminPwd" />
            </label>
          </div>
          <button type="button" @click="logIn">登录</button>
          <button @click="alterContentVisibility">账号提示</button>
          <div v-if="contentIsVisible" class="hidden">
            <span
              >管理员账号：
              <em>admin1</em>
              或 <em>admin2</em> 或 <em>admin3</em> 或 <em>admin4</em></span
            >
            <span>密码都是：<em>123456</em></span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminAccount: "admin1",
      adminPwd: "123456",
      contentIsVisible: false,
    };
  },
  methods: {
    logIn() {
      if (
        (this.adminAccount === "admin1" ||
          this.adminAccount === "admin2" ||
          this.adminAccount === "admin3" ||
          this.adminAccount === "admin4") &&
        this.adminPwd === "123456"
      ) {
        this.$router.push("/home");
      } else if (
        (this.adminAccount !== "admin1" ||
          this.adminAccount !== "admin2" ||
          this.adminAccount !== "admin3" ||
          this.adminAccount !== "admin4") &&
        this.adminPwd === "123456"
      ) {
        alert("账号错误，请输入正确的账号");
      } else if (
        (this.adminAccount === "admin1" ||
          this.adminAccount === "admin2" ||
          this.adminAccount === "admin3" ||
          this.adminAccount === "admin4") &&
        this.adminPwd !== "123456"
      ) {
        alert("密码错误，请输入正确的密码");
      } else {
        alert("账号和密码错误，请输入正确的账号和密码");
      }
    },
    alterContentVisibility() {
      this.contentIsVisible = !this.contentIsVisible;
    },
  },
};
</script>

<style scoped>
.log-in-wrapper {
  width: 100%;
  height: 1080px;
  cursor: url("../../assets/ico/meme-pop-cat-cursor-close.ico"), default !important;
  padding-top: 170px;
  background: url("../../assets/12.png") no-repeat 50%;
  background-position-y: 550px;
}
section {
  width: 500px;
  margin: 0 auto;
  box-shadow: 0 0 20px 0 rgba(255, 0, 157, 0.493);
  text-align: center;
  box-sizing: border-box;
  background: #ad9aaa3a;
  border-radius: 15px;
}
h1 {
  font-size: 28px;
  color: rgba(255, 0, 157, 0.473);
  padding-top: 20px;
}
span {
  margin-top: -10px;
  display: block;
  margin-bottom: 10px;
  color: rgba(255, 0, 157, 0.4);
  font-size: 16px;
  font-weight: bold;
}
.login {
  border-top: 1px solid rgba(255, 0, 157, 0.37);
}
h2 {
  font-size: 21px;
  color: rgba(255, 0, 157, 0.473);
}
input {
  border: 1px solid rgba(255, 0, 157, 0.301);
  border-radius: 3px;
  margin-bottom: 8px;
  height: 23px;
  color: rgba(255, 0, 157, 0.527);
  font-weight: bold;
  text-indent: 21px;
  margin-left: -20px;
}
input:hover {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
input:focus {
  border: 1px solid white;
  outline: none;
  background: rgb(243, 243, 172);
}
input::placeholder {
  color: rgba(255, 0, 157, 0.342);
}
svg:hover {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), pointer !important;
}
button {
  display: inline-block;
  text-decoration: none;
  margin: 15px auto;
  margin-bottom: 25px;
  width: 86px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  font-size: 16px;
  color: rgba(255, 0, 157, 0.371);
  background: rgba(243, 243, 172, 0.466);
  font-weight: bold;
  border: 1px solid rgba(255, 0, 157, 0.301);
  margin-right: 10px;
}
button:hover {
  cursor: url("../../assets/ico/woman_yelling_at_a_cat_meme_pointer-cat.ico"),
    default;
  outline: none;
  border: 1px solid yellow;
  color: rgba(255, 0, 157, 0.527);
  background: rgba(255, 255, 0, 0.424);
}
h3 {
  line-height: 0;
}
.user {
  position: relative;
  top: 4px;
  width: 15px;
  height: 15px;
}
.pwd {
  position: relative;
  top: 4px;
  width: 15px;
  height: 15px;
}
.hidden span {
  color: #435a64;
  font-weight: lighter;
  text-align: left;
  text-indent: 39px;
}
em {
  font-weight: bold;
  color: #e56c8f;
}
</style>
