<template>
  <div id="TabBarItem" @click="actionPage">
    <div v-if="textColor">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="changeColor">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    textColor() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    changeColor() {
      return this.textColor ? { color: this.activeColor } : {};
    }
  },
  methods: {
    actionPage() {
      console.log("sd");

      this.$router.push(this.path);
    }
  },
  data() {
    return {
      active: true
    };
  }
};
</script>

<style>
#TabBarItem {
  flex: 1;
  text-align: center;
  height: 49px;
}
.title_css {
  color: activeColor;
}
</style>