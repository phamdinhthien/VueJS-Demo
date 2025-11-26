<template>
  <div id="app" class="container-fluid">
    <div class="icon_1"></div>
    <div class="icon_2"></div>
    <div class="icon_3"></div>
    <img :src="logo.imgSrc_1" alt="">
    <img :src="logo.imgSrc_2" alt="">
    <img :src="logo.imgSrc_3" alt="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logo: {
        imgSrc_1: require('./assets/ICON.svg'),
        imgSrc_2: require('./assets/ICON.svg'),
        imgSrc_3: require('./assets/ICON.svg'),
      }
    }
  },
  mounted() {
    console.log(this.logo.imgSrc_1);
  }
}
</script>

<style>
:root {
  --icon-ICON-url: url("~@/assets/ICON.svg");
}

.icon_1 {
  width: 24px;
  height: 24px;
  background: var(--icon-ICON-url) -623px -453px no-repeat;
}
.icon_2 {
  width: 24px;
  height: 24px;
  background: var(--icon-ICON-url) -264px -360px no-repeat;
}
.icon_3 {
  width: 24px;
  height: 24px;
  background: var(--icon-ICON-url) -385px -240px no-repeat;
}

.img {
  width: 100px;
}
</style>
