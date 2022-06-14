<template>
  <div class="the-reminder-wrapper">
    <list-sets>
      <h3>提醒</h3>
      <li v-for="(reminder, index) in reminders" :key="index">
        <input
          class="checkbox"
          type="checkbox"
          @click="alterSelected(index)"
          :checked="reminder.selected"
          :value="reminder.content"
        />{{ reminder.content }}
      </li>
      <form @submit.prevent v-if="formIsVisible" class="form">
        <input v-model="reminder.content" />
      </form>
      <div class="buttons">
        <button-sets v-if="formIsVisible" @click="addReminder"
          >确认</button-sets
        >

        <button-sets v-else @click="alterFormVisibility">添加</button-sets>

        <button-sets @click="deleteReminder">删除</button-sets>
      </div>
    </list-sets>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formIsVisible: false,
      checkbox: [],
      reminders: [
        {
          selected: false,
          content: "带希希看医生",
        },
        {
          selected: false,
          content: "带壹壹绝育",
        },
      ],
      reminder: {
        selected: false,
        content: null,
      },
    };
  },
  methods: {
    alterFormVisibility() {
      this.formIsVisible = true;
    },
    alterSelected(index) {
      this.reminders[index].selected = !this.reminders[index].selected;
      console.log(this.reminders[index]);
    },
    addReminder() {
      if (this.reminder.content) {
        this.reminders.push(this.reminder);
        this.formIsVisible = false;
      } else {
        if (confirm("提醒内容不能为空！") === false) {
          this.formIsVisible = false;
        }
      }
    },
    deleteReminder() {
      this.reminders = this.reminders.filter(
        (reminder) => reminder.selected === false
      );
    },
  },
};
</script>

<style scoped>
.the-reminder-wrapper {
  width: 350px;
  position: relative;
  top: -1068px;
  left: 845px;
  text-align: center;
  backdrop-filter: blur(2px);
  border-radius: 30px;
}
.checkbox {
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), default !important;
  width: 15px;
  height: 15px;
  line-height: 15px;
}
ul {
  background: rgba(241, 241, 240, 0);
  border: 2px solid rgba(220, 29, 29, 0.6);
  box-shadow: 0 0 30px 0 rgba(220, 29, 29, 0.6);
}
h3 {
  color: rgba(255, 1, 1, 0.682);
}
li {
  margin-top: 20px;
  color: rgb(68, 64, 64);
  margin-bottom: 10px;
  color: rgba(220, 29, 29, 0.703);
  font-weight: bold;
}
.buttons button {
  margin: 20px 15px;
  height: 35px;
  line-height: 25px;
  text-align: center;
  color: rgba(220, 29, 29, 0.6);
  border: 1px solid rgba(220, 29, 29, 0.6);
}
.buttons button:hover {
  background: white;
  border: 2px solid rgba(220, 29, 29, 0.6);
  color: rgba(220, 29, 29, 0.8);
}
.form input,
input:focus {
  border: 1px solid rgba(220, 29, 29, 0.6);
  color: rgba(220, 29, 29, 0.8);
  outline: none;
  cursor: url("../../assets/ico/meme-pop-cat-pointer-open.ico"), default !important;
}
</style>
