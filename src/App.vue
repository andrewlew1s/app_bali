<template>
  <div id="app">
    <Navbar class="Navbar"/>
    <Landing class="Landing"/>
    <Footer class="Footer"/>
    <router-view class="main container"/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Landing from './components/Landing.vue';

export default {

  components: {
    Navbar,
    Footer,
    Landing,
  },

};
</script>
