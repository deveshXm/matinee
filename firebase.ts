// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBrOqCwoldsTrI80oKaoHoo1UuaMf7dSgM',
  authDomain: 'matinee-600dc.firebaseapp.com',
  projectId: 'matinee-600dc',
  storageBucket: 'matinee-600dc.appspot.com',
  messagingSenderId: '694659104765',
  appId: '1:694659104765:web:2835f6f54f23ad73d9a394',
  measurementId: 'G-0NKVQ6EJ8G',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
