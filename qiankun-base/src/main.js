import { start, registerMicroApps } from "qiankun";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);
Vue.config.productionTip = false;

const apps = [
  {
    name: "vueApp",
    entry: "//localhost:8082",
    container: "#vue",
    activeRule: "/vue",
    props: { a: 1 },
  },
  {
    name: "reactApp",
    entry: "//localhost:20000",
    container: "#react",
    activeRule: "/react",
  },
];

registerMicroApps(apps);

start({
  prefetch: false,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
