<template>
  <div class="home">
    <nav-bar class='navbar_css'>
      <div slot="leftBottom">左</div>
      <div slot="title">首页</div>
      <div slot="rightBottom">右</div>
    </nav-bar>
    <router-view />
    <tab-bar>
      <tab-bar-item path="/homePage">
        <img slot="item-icon" src="~assets/img/首页.png" />
        <img slot="item-icon-active" src="~assets/img/采购计划.png" />
        <div slot="item-title" class="tabbar_title">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Purchase">
        <img slot="item-icon" src="~assets/img/采购计划.png" />
        <img slot="item-icon-active" src="~assets/img/收藏.png" />
        <div slot="item-title" class="tabbar_title">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/Radio">
        <img slot="item-icon" src="~assets/img/play.png" />
        <img slot="item-icon-active" src="~assets/img/首页.png" />
        <div slot="item-title" class="tabbar_title">视频</div>
      </tab-bar-item>
      <tab-bar-item path="/ProFile">
        <img slot="item-icon" src="~assets/img/商家.png" />
        <img slot="item-icon-active" src="~assets/img/采购计划.png" />
        <div slot="item-title" class="tabbar_title">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBarItem from "components/common/TabBar/TabBarItem";
import TabBar from "components/common/TabBar/index";
import NavBar from "components/common/NavBar/index";

export default {
  name: "Home",
  components: {
    TabBarItem,
    TabBar,
    NavBar
  }
};
</script>
<style>
img {
  width: 20px;
  height: 20px;
}
.tabbar_title {
  font-size: 13px;
}
.navbar_css{
  background-color: #ff8198;
}
</style>
