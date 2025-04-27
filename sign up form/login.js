
// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDY94-YMG-fKZM_m7uULCss-_M7OVZ0Mac",
    authDomain: "signup-page-da22f.firebaseapp.com",
    projectId: "signup-page-da22f",
    storageBucket: "signup-page-da22f.appspot.com", // Corrected URL
    messagingSenderId: "933739896378",
    appId: "1:933739896378:web:79550e96e1a50a768a5f03",
    measurementId: "G-3SFD2XB2LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents the page from refreshing

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Firebase Signup Function
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signup successful!");
            window.location.href = "success.html"
            console.log("User signed up:", user);
        })
        .catch((error) => {
            alert(error.message);
            console.error("Error:", error.message);
        });
});
