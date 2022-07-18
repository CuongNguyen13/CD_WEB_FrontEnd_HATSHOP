import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
 
// Initialize Firebase
const app = initializeApp ({
    apiKey: "AIzaSyCTFk5d6WUZr9zNSKw4FXDzCWFFe-dKcNA",
    authDomain: "web-hatshop.firebaseapp.com",
    projectId: "web-hatshop",
    storageBucket: "web-hatshop.appspot.com",
    messagingSenderId: "926882073260",
    appId: "1:926882073260:web:70aadd0c4f33f8bc48ad09",
    measurementId: "G-20XLRMNM52"
});
 
// Firebase storage reference
const storage = getStorage(app);
export default storage;