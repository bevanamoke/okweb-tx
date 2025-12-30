import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGgtSPL3w0d-AoVme6tX6GLafBCJJesxU",
    authDomain: "oks-website.firebaseapp.com",
    projectId: "oks-website",
    storageBucket: "oks-website.firebasestorage.app",
    messagingSenderId: "683149147730",
    appId: "1:683149147730:web:ab64f75cf2d6ff000ae98b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkPosts() {
    try {
        const q = query(
            collection(db, "posts"),
            where("status", "==", "published"),
            orderBy("createdAt", "desc")
        );
        await getDocs(q);
        console.log("Success");
    } catch (error) {
        if (error.message.includes("https://console.firebase.google.com")) {
            const url = error.message.match(/https:\/\/console\.firebase\.google\.com[^\s]*/)[0];
            console.log("\n\nREQUIRED INDEX URL:\n" + url + "\n\n");
        } else {
            console.log(error.message);
        }
    }
}

checkPosts();
