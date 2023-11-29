import { React, useContext } from "react";
import { LoginContext } from "@/pages/context/logincontext";
const Login = () => {
  const { name } = useContext(LoginContext);
  return <div>{name}</div>;
};

export default Login;
