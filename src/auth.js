//  keep track of auth state - login and logout, when auth state changes data is sent to DB
import firebase from '@/firebase';
import store from '@/store';
import db from '@/db';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user){
      user = user.user;
    }
    //  this is object we write to db
    //  get these from the console log - we want to save this to DB
    const setUser = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    // so we can query by id
    db.collection('users').doc(setUser.id).set(setUser);
      store.commit('auth/setUser', setUser);
  } else {
      store.commit('auth/setUser', null);
  }
});
