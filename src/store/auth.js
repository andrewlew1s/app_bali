import firebase from '@/firebase';
//  I am a module

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    if (user) {
    state.user = user;
    state.isLoggedIn = true;
  } else {
    state.user = {};
    state.isLoggedIn = false;
  }
},
};

const actions = {
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
  async logout() {
    await firebase.auth().signOut();
  },
};

export default{
  namespaced: true,
  state,
  actions,
  mutations,
};
