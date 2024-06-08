// "use client";

// import { generateToken, messaging } from "./firebase";
// import { onMessage, MessagePayload } from "firebase/messaging";
// import toast from "react-hot-toast";
// import { useEffect } from "react";

// type NotificationPayload = {
//   notification?: {
//     body?: string;
//   };
// };

// const Notification = () => {
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       // Only run in the browser
//       generateToken();
//       onMessage(messaging, (payload: MessagePayload & NotificationPayload) => {
//         console.log(payload);
//         const body = payload.notification?.body;
//         if (body) {
//           toast(body);
//         } else {
//           toast.error("notification body is undefined");
//         }
//       });
//     }
//   }, []);

//   return <h1> </h1>;
// };

// export default Notification;
