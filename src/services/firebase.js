import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc,serverTimestamp, onSnapshot, query, orderBy } from 'firebase/firestore';




// Firebase configuration. Could be inserted into .env 
const firebaseConfig = {
  apiKey: "AIzaSyAU0ORCW9R-FrbUGohOqH5zxVuwYN_Tknc",
  authDomain: "fir-shard.firebaseapp.com",
  projectId: "fir-shard",
  storageBucket: "fir-shard.appspot.com",
  messagingSenderId: "438696152766",
  appId: "1:438696152766:web:6524ce8abdb9707d66d8ef"
};

// Initializes Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Allows for login via Google
async function loginWithGoogle() {
    try {
        // generates google credentials
        const provider = new GoogleAuthProvider();
        // returns Firebase Authentication
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

async function sendMessage(roomId, user, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(roomId, callback) {
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(messages);
        }
    );
}

export { loginWithGoogle, sendMessage, getMessages };