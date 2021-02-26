import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAOjwAKyEQq-GCtzoQfXwO2od1JIetLTZU',
  authDomain: 'reauth-aac74.firebaseapp.com',
  projectId: 'reauth-aac74',
  storageBucket: 'reauth-aac74.appspot.com',
  messagingSenderId: '475453822307',
  appId: '1:475453822307:web:d370b7b440793dd195af56',
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
