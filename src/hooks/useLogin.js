// react
import { useState } from "react";

import toast from "react-hot-toast";

import { useDispatch } from "react-redux";

const useLogin = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const signInWithEmail = async (email, password) => {
    setIsPending(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userInfo = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      };

      toast.success("Login successful!");
      setIsPending(false);
      dispatch(login(userInfo));
    } catch (error) {
      const errorMessage = error.message;
      toast.error(errorMessage);
      setIsPending(false);
    }
  };

  return { signInWithEmail, isPending };
};

export { useLogin };
