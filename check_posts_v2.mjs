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
        console.log("Attempting composite query (status='published', orderBy createdAt desc)...");
        try {
            const q = query(
                collection(db, "posts"),
                where("status", "==", "published"),
                orderBy("createdAt", "desc")
            );
            const querySnapshot = await getDocs(q);
            console.log(`Query successful! Found ${querySnapshot.size} published posts.`);
            querySnapshot.forEach(doc => {
                console.log(`- ${doc.data().title}`);
            });
        } catch (error) {
            console.error("\nQUERY FAILED!");
            console.error(error.message);
            if (error.message.includes("index")) {
                console.log("\n>>> ACTION REQUIRED: You need to create a Firestore Index.");
                console.log("Look for the URL in the error message above to create it with one click.");
            }
        }
    } catch (error) {
        console.error("General error:", error);
    }
}

checkPosts();
