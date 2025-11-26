<template>
  <div id="app" class="container-fluid">
    <img :src="logo.imgSrc_1" alt="Logo" />
    <img :src="logo.imgSrc_2" alt="Logo" />
    <img :src="logo.imgSrc_3" alt="Logo" />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      logo: {
        imgSrc_1: require('./assets/logo.png'),
        imgSrc_2: require('./assets/logo.png'),
        imgSrc_3: require('./assets/logo.png'),
      }
    }
  }
}
</script>

<style>

</style>
