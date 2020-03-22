<template>
  <div id="navbar">
    <div class="module_left_css">
      <slot name="leftBottom"></slot>
    </div>
    <div class="module_css">
      <slot name="title"></slot>
    </div>
    <div class="module_right_css">
      <slot name="rightBottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  line-height: 44px;
  height: 44px;
}
.module_css {
  flex: 1;
  text-align: center;
}
.module_left_css {
  flex: 1;
  text-align: left;
}
.module_right_css {
  flex: 1;
  text-align: right;
}
</style>