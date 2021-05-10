import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file

const config = {
    apiKey: "AIzaSyAaSxOyKJzlIU0TbsITahQA03YCMcFdjsA",
    authDomain: "instagram-fc1cf.firebaseapp.com",
    projectId: "instagram-fc1cf",
    storageBucket: "instagram-fc1cf.appspot.com",
    messagingSenderId: "163013987350",
    appId: "1:163013987350:web:919c162c9047e667faf937"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (ONLY ONCE!!!!)
// seedDatabase(firebase);

console.log('firebase', firebase);

export { firebase, FieldValue };