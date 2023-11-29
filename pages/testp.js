import React, { useState } from "react";
import { LoginContext } from "./context/logincontext";
import Login from "@/components/test/login";
import Profile from "@/components/test/profile";

const Test = () => {
  const [name, setName] = useState("IAM");
  return (
    <LoginContext.Provider value={{ name, setName }}>
      <Login />
      <Profile />
    </LoginContext.Provider>
  );
};

export default Test;
