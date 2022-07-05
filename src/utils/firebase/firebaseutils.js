import { initializeApp } from 'firebase/app'

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

import {
    getFirestore ,
    doc , 
    getDoc , 
    setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCSWBDUFbrLnQRVDl66HODmaXsQfiygwKM",
    authDomain: "reactjs-ecommerce-website.firebaseapp.com",
    projectId: "reactjs-ecommerce-website",
    storageBucket: "reactjs-ecommerce-website.appspot.com",
    messagingSenderId: "721839142165",
    appId: "1:721839142165:web:c480025ca2fc089a62a51c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const db = getFirestore()

export const auth = getAuth()

export const signInWithGooglePopup = () =>  signInWithPopup(auth, provider)

export const signInWithGooleRedirect = () => signInWithRedirect(auth , provider)

export const createUserDocumentFromAuth = async (authuser , additionalInformation ) => {
    if(!authuser) return
    const userDocRef = doc(db ,'users' , authuser.uid)

    const snapshot = await getDoc(userDocRef)

    if(!snapshot.exists()){
        const {displayName , email} = authuser
        const createdAt = new Date()

        try {
         await setDoc(userDocRef , {
             displayName , 
             email  ,
             createdAt ,
             ...additionalInformation
         })   
        } catch (error) {
            console.log(error.message)
        }
    }

    return userDocRef
}

export const crateAuthUserWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return

    return await createUserWithEmailAndPassword(auth,  email , password)
}


export const signinWithEmailAndPassword = async (email , password) => {
    if(!email || !password) return

    return await signInWithEmailAndPassword(auth , email , password)
} 

export const SignUserOut = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth , callback)
