import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareAutosize from 'vue-textarea-autosize' 
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareAutosize);

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCz5UYKDcWv7anN2pf51NQ6TMMndNjcPCA",
  authDomain: "calendar-e6ec9.firebaseapp.com",
  databaseURL: "https://calendar-e6ec9-default-rtdb.firebaseio.com",
  projectId: "calendar-e6ec9",
  storageBucket: "calendar-e6ec9.appspot.com",
  messagingSenderId: "514786467179",
  appId: "1:514786467179:web:8edf1f1724be3882b9402e"
};
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
