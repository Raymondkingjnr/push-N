import { FirebaseOptions, initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyA_E4bGA4tWE_aCopqhxgBM5GEu1U5WO4g",
  authDomain: "fir-push-notification-cc0b4.firebaseapp.com",
  projectId: "fir-push-notification-cc0b4",
  storageBucket: "fir-push-notification-cc0b4.appspot.com",
  messagingSenderId: "54129139933",
  appId: "1:54129139933:web:8dc7c2e9fcb50484e5fb34",
  measurementId: "G-S8NJCGM60K",
};

const app = initializeApp(firebaseConfig);

export const messaging = () => getMessaging(app);

export default app;

// export const generateToken = async () => {
//   const permission = await Notification.requestPermission();

//   console.log(permission);

//   if (permission === "granted") {
//     const token = await getToken(messaging, {
//       vapidKey:
//         "BKDbM2sxBQkRJJ59PdUfQPpJJwvQRb9R1DoonCtgbCEA3BEt0qtkBUVShZOXmDbM9C16RQv_eStAcyWcmSEHNdY",
//     });
//     console.log(token);
//   }
// };
