import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const useMessage = () => {
  const sendMessage = async ({ user, message, uid }) => {
    try {
      const docData = {
        user: user.uid,
        message,
        time: Date.now(),
      };
      const chatsRef = collection(db, "chats");
      await addDoc(collection(chatsRef, uid, "messages"), docData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return {
    sendMessage,
  };
};

export default useMessage;
