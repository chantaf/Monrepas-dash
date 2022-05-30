import {initializeApp} from 'firebase/app';
import {getStorage, setStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKIxsIwE9VJPSBYGKsFhsZFrbUsttJz7Y",
  authDomain: "foodmine-7feec.firebaseapp.com",
  projectId: "foodmine-7feec",
  storageBucket: "foodmine-7feec.appspot.com",
  messagingSenderId: "126291747708",
  appId: "1:126291747708:web:2b4403541824af2d5dfaf9",
  measurementId: "G-E2CTLCDEP4"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);