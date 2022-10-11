import {
  collection,
  query,
  onSnapshot,
  orderBy,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useGetChats = ({ displayName }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", displayName)
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let chats = [];
      querySnapshot.forEach((doc) => {
        const docWithUid = { ...doc.data(), uid: doc.id };
        console.log(docWithUid);
        chats = [...chats, docWithUid];
      });
      setChats(chats);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return {
    chats,
    loading,
  };
};

export default useGetChats;
