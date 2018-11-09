<template>
  <div id="app">
    <Navbar class="Navbar"/>
    <router-view class="main container"/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';

export default {

  components: {
    Navbar,
  },

};

</script>

<style lang="scss">
.button{
  margin-top: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
};
</style>
