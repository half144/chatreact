import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/config";
import { useEffect, useState } from "react";

export const useAuthetication = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const clearError = setTimeout(() => {
      setError("");
    }, 1000);

    return () => clearInterval(clearError);
  }, [error]);

  const register = async ({ username, email, pass }) => {
    try {
      setLoading(true);
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(user.user, {
        displayName: username,
      });
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async ({ email, pass }) => {
    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, pass);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    signOut(auth);
  };
  return {
    auth,
    error,
    register,
    login,
    logout,
    loading,
  };
};
