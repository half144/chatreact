import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const useCreateChat = () => {
  const createChat = async ({ user, targetUser }) => {
    try {
      const docData = {
        users: [user, targetUser],
      };
      const docRef = await addDoc(collection(db, "chats"), docData);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return {
    createChat,
  };
};

export default useCreateChat;
