function emptyAction() {
  console.warn("不能为空");
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  setActions(actions) {
    this.actions = actions;
  }

  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();
export default actions;
