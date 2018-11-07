import firebase from '@/firebase';
import db from '@/db';
//  I am a module

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user){
    state.user = user;
    state.isLoggedIn = true;
  },
};

const actions = {
  async login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await firebase.auth().signInWithPopup(provider);
    //  this is object we write to db
    //  get these from the console log - we want to save this to DB

    const setUser={
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    }
    //so we can query by id
    db.collection('users').doc(setUser.id).set(setUser);
    commit('setUser',);
  },
};

export default{
  namespaced: true,
  state,
  actions,
  mutations,
};
