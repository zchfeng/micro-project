import Vue from "vue";
import App from "./App.vue";
import actions from "./micro/actions";

Vue.config.productionTip = false;

let instance = null;

function render(props) {
  console.log(props, "render");
  actions.setActions(props);
  instance = new Vue({
    render: (h) => h(App),
  }).$mount("#appVue");
}

if (window.__POWERED_BY_QIANKUN__) {
  // TODO:使用_webpack_public_path_ 报错，需要用他的方式保存__POWERED_BY_QIANKUN__
  // _webpack_public_path_ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;s
} else {
  render();
}

export async function bootstrap(props) {}

export async function mount(props) {
  console.log(props, "111");
  render(props);
}

export async function unmount(props) {
  instance.$destroy();
}
