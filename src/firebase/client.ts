// import { initializeApp } from "firebase/app";

// import { db } from './firebaseConfig';
// import { collection, getDocs } from 'firebase/firestore';
// import type { Friend } from '../types/Friend';

// export const getFriends = async (): Promise<Friend[]> => {
//     const friendsCollection = collection(db, 'friends');
//     const friendsSnapshot = await getDocs(friendsCollection);
//     return friendsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Friend));
// };

// quie esto y funciono
// const firebaseConfig = {
//     apiKey: "AIzaSyA-cMGESxpmrNOHGoXA1_YzuiTSrbIsVr8",
//     authDomain: "my-auth-domain",
//     projectId: "test-cacab",
// };

// export const app = initializeApp(firebaseConfig);

import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import type { Friend } from '../types/Friend';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Verifica si ya existe una instancia de la aplicación Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Inicializa Firestore
const db = getFirestore(app);

export const getFriends = async (): Promise<Friend[]> => {
    try {
        const friendsCollection = collection(db, 'friends');
        const friendsSnapshot = await getDocs(friendsCollection);
        return friendsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Friend));
    } catch (error) {
        console.error("Error fetching friends: ", error);
        return [];
    }
};