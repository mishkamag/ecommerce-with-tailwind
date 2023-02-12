import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase.config";

const AuthContext = React.createContext({
  user: {},
  login: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const loginHandler = async (email, password, navigate, setError) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      if (email === "admin@test.com" || email === "slomtadze90@gmail.com") {
        setError(false);
        navigate("../admin/home");
      } else {
        navigate("../user");
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const logoutHandler = () => {
    signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  const contextValue = {
    user: user,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
