"use client";

import { useEffect, useState } from "react";
import { messaging } from "../firebase/index";
import {
  MessagePayload,
  NotificationPayload,
  onMessage,
} from "firebase/messaging";
import useFCMToken from "./useFCMToken";
import { toast } from "react-toastify";

const useFCM = () => {
  const fcmToken = useFCMToken();
  // const [messages, setMessages] = useState<MessagePayload[]>([]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const fcmMessaging = messaging();
      const unSubscribe = onMessage(
        fcmMessaging,
        (payload: MessagePayload & NotificationPayload) => {
          // setMessages((messages) => [...messages, payload]);
          console.log(payload);
          const body = payload.notification?.body;
          if (body) {
            toast(body);
          } else {
            toast("notification body is undefined");
          }
        }
      );
      return () => unSubscribe();
    }
  }, [fcmToken]);

  return { fcmToken };
};

export default useFCM;
