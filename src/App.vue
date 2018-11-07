<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="dropdown navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/#/" style="font-weight:bold;">
            <span>Bali Guide</span>
        </a>
        <div class="navbar-burger burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <div class="navbar-menu" v-bind:class="{ 'is-active' : showNav }">
          <div class="navbar-start">
              <a class="navbar-item">
                  <span><i class="mdi mdi-24px mdi-library-books"></i>Locations</span>
              </a>
              <a class="navbar-item">
                  <span><i class="mdi mdi-24px mdi-comment-text-outline"></i>Hotels</span>
              </a>
              <a class="navbar-item">
                  <span><i class="mdi mdi-24px mdi-account-multiple"></i> People</span>
              </a>
              <div class="navbar-item has-dropdown is-hoverable" @click="showSubMenu()">
                  <a class="navbar-link"><span><i class="mdi mdi-24px mdi-view-list"></i> Restaurants</span></a>
                  <div class="navbar-dropdown is-hidden-touch">
                      <a class="navbar-item" href=""><span><i class="mdi mdi-24px mdi-star"></i> Favorites</span></a>
                  </div>
              </div>
          </div>
          <div class="navbar-end">
            <a class="button is Danger" @click="login()">
                    Login with Google
            </a>
            <a class="button is-primary" @click="logout()">
                    Logout
            </a>
          </div>
      </div>
    </nav>
    <router-view class="main container"/>
  </div>
</template>

<script>


import { mapActions, mapState } from 'vuex';

export default {
  computed: mapState('auth', ['user', 'isLoggedIn']),
  methods: mapActions('auth', ['login', 'logout']),

};

</script>

<style lang="scss">
.button{
  margin-top: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
};
</style>
