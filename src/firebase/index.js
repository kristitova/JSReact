
import firebase from "firebase";


const config = {
    apiKey: "AIzaSyDiPptx3XBc4sSV15oi2QmFqcuffg2Rvmg",
    authDomain: "appreact-44a45.firebaseapp.com",
    databaseURL: "https://appreact-44a45-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "appreact-44a45",
    storageBucket: "appreact-44a45.appspot.com",
    messagingSenderId: "280062248469",
    appId: "1:280062248469:web:87275cd789e6a42fb1f01c"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref('root');
export const chatsRef = rootRef.child('chats');
export const messagesRef = rootRef.child('messages');
export const profileRef = rootRef.child('profile');