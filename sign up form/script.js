// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

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

// Wait for the DOM to load before adding event listener
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");
    const submitButton = document.getElementById("submit");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents the page from refreshing

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation checks
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return;
        }

        if (!email.match(/^\S+@\S+\.\S+$/)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        // Firebase Signup Function
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                alert("Signup successful!");
                window.location.href="login.html"
                console.log("User signed up:", user);
            })
            .catch((error) => {
                alert(error.message);
                console.error("Error:", error.message);
            });
    });
});


try {
    localStorage.setItem("test", "testValue");
    console.log("Local Storage is accessible!");
    localStorage.removeItem("test");
} catch (e) {
    console.warn("Local Storage is blocked!", e);
}
