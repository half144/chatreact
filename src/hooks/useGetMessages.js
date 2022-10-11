import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useGetMessages = (uid) => {
  const chatsRef = collection(db, "chats");
  const q = query(collection(chatsRef, uid, "messages"), orderBy("time"));
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages = [...messages, doc.data()];
      });
      setMessage(messages);
    });

    return () => unsubscribe();
  }, []);

  return {
    message,
  };
};

export default useGetMessages;
