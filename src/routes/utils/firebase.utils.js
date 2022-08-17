import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import{
getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: 'AIzaSyCTlFDeMDIiK457mj3-sW3YQqsikI9wquA',
  authDomain: 'crown-db-51d0e.firebaseapp.com',
  projectId: 'crown-db-51d0e',
  storageBucket: 'crown-db-51d0e.appspot.com',
  messagingSenderId: '335231275333',
  appId: '1:335231275333:web:cedd7d730ea49e29a8ee2c'
}

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)



export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) =>{
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)

  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }

  }
  return userDocRef




}
