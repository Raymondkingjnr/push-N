"use client";

import { useEffect, useState } from "react";
import { getToken, isSupported } from "firebase/messaging";
import { messaging } from "../firebase/index";
import useNotiFicationStatus from "./useNotificationPermission";

const useFCMToken = () => {
  const permission = useNotiFicationStatus();
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        if (typeof window !== "undefined" && "serviceWorker" in navigator) {
          if (permission === "granted") {
            const isFCMSupported = await isSupported();
            if (!isFCMSupported) return;
            const fcmToken = await getToken(messaging(), {
              vapidKey:
                "BKDbM2sxBQkRJJ59PdUfQPpJJwvQRb9R1DoonCtgbCEA3BEt0qtkBUVShZOXmDbM9C16RQv_eStAcyWcmSEHNdY",
            });
            setFcmToken(fcmToken);
          }
        }
      } catch (error: any) {
        setError(
          error.message || "An error occurred while retrieving the token."
        );
      }
    };
    retrieveToken();
  }, [permission]);

  return { fcmToken, error };
};

export default useFCMToken;
