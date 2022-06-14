import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

// Components
import LeftMenu from "./components/layouts/LeftMenu";
import LogIn from "./components/layouts/LogIn";
import TheAdmins from "./components/layouts/TheAdmins";
import TheCats from "./components/layouts/TheCats";
import MoreInfo from "./components/layouts/MoreInfo";
import ToDoList from "./components/layouts/ToDoList";
import TheReminder from "./components/layouts/TheReminder";
import AbnormalBehaviors from "./components/layouts/AbnormalBehaviors";
import CatAward from "./components/layouts/CatAward";

// UI
import TableSets from "./components/UI/TableSets";
import ButtonSets from "./components/UI/ButtonSets";
import InputSets from "./components/UI/InputSets";
import ListSets from "./components/UI/ListSets";
import DialogSets from "./components/UI/DialogSets";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: LeftMenu,
      children: [
        {
          path: "/home",
          name: "home",
          components: {
            default: ToDoList,
            catAward: CatAward,
            reminder: TheReminder,
            abnormalBehaviors: AbnormalBehaviors
          },
        },
        { path: "admin", name: "admin", component: TheAdmins },
        { path: "cat", name: "cat", component: TheCats },
        { path: "404", name: "moreInfo", component: MoreInfo },
      ],
    },
    { path: "/login", name: "login", component: LogIn },
  ],
  linkActiveClass: "active",
});

app.use(router);

app.component("table-sets", TableSets);
app.component("button-sets", ButtonSets);
app.component("input-sets", InputSets);
app.component("list-sets", ListSets);
app.component("dialog-sets", DialogSets);

app.mount("#app");
