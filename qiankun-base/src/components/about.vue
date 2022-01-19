<template>
  <div class="about">
    <p>{{ count }}</p>
    <el-button type="primary" @click="onBtnClick">主要按钮</el-button>
  </div>
</template>

<script>
import actions from "../mico/actions";
export default {
  name: "about",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted: function () {},
  methods: {
    onBtnClick: function () {
      actions.setGlobalState({ count: this.count });
      this.count++;
    },
  },
};
</script>

<style scoped></style>
