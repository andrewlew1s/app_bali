import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCj8AMSboeRU9LwMtGRXvExcCcd-yprI7g',
  authDomain: 'bali-guide-8c890.firebaseapp.com',
  databaseURL: 'https://bali-guide-8c890.firebaseio.com',
  projectId: 'bali-guide-8c890',
  storageBucket: 'bali-guide-8c890.appspot.com',
  messagingSenderId: '1082509829529',
};

firebase.initializeApp(config);

export default firebase;
