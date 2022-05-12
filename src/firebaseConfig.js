
import firestore, { getFirestore } from 'firebase/firestore';
import auth, { getAuth } from 'firebase/auth';

import { initializeApp } from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth'

export const firebaseConfig = {
    apiKey: "AIzaSyA2T6jBKdUq09otQPwSW77ayWGyvza4F1I",
    authDomain: "sandbox-4d8e0.firebaseapp.com",
    projectId: "sandbox-4d8e0",
    storageBucket: "sandbox-4d8e0.appspot.com",
    messagingSenderId: "348161285704",
    appId: "1:348161285704:web:383edaaad59a50ff92027d",
    measurementId: "G-ZLYKMCP55E"
  };

  

export const app = initializeApp(firebaseConfig);

export const auth1 = getAuth(app)
export const firestore1 = getFirestore(app)

console.log ('good things')



// export function Content (){
//   const productRef = firestore.collection ('products')
//   const query = productRef.orderBy('createdAt').limit(10)

//   const products = useCollectionData (query, {idField: 'id'})
//   return <div>
//     { products && products.map ( product => <div> { product } </div> ) }
//   </div>
// }