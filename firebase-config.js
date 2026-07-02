const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT-default-rtdb.firebaseio.com',
  projectId: 'YOUR_PROJECT',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'YOUR_SENDER_ID',
  appId: 'YOUR_APP_ID'
};

window.firebaseConfig = firebaseConfig;

function getFirebaseApp() {
  if (window.firebase && window.firebase.apps && window.firebase.apps.length) {
    return window.firebase.apps[0];
  }
  return null;
}
