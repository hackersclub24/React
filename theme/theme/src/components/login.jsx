import React, { UseState, UseContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    // const [user, setUser] = UseContext(UserContext);
    const handlesubmit = () =>{

    }
  return <div>
    <h1>Login</h1>
    <input type="text" placeholder="username"/>
    <input type="text" placeholder="password"/>
    <button onClick={handlesubmit}>Login</button>
    </div>;
}

export default Login;
