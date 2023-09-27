import { createApp } from 'vue'
import App from './App.vue'

//Dependencias de firebase
import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_IT8wMNdzcX3vEhncAPhBrAie7FovkKM",
    authDomain: "fir-auth-29aae.firebaseapp.com",
    projectId: "fir-auth-29aae",
    storageBucket: "fir-auth-29aae.appspot.com",
    messagingSenderId: "1020378740420",
    appId: "1:1020378740420:web:5dc37d0833c2acd67c3b91"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
//initialize firebase auth
const auth = getAuth()

createApp(App).mount('#app')
