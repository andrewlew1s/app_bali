<template>
  <div class="home">
    <a class="button is-danger" @click="login()">Login with Google</a>
    <a class="button is-danger" @click="logout()">Logout with Google</a>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'home',
  methods: mapActions('auth', ['login', 'logout']),
};
</script>
