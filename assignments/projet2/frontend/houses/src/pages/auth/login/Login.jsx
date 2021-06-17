import {useContext, useEffect, useRef, useState} from "react";
import React from "react"
import "./login.css";
import GoogleLogin from 'react-google-login'
import {useDispatch, useSelector} from "react-redux";
import { Redirect } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";


export default function Login() {

  const dispatch = useDispatch()
  const isFetching = useSelector(state => state.auth.isFetching)
  const [user, setUser] = useState({});
  const email = useRef();
  const password = useRef();

  const responseGoogle = (response) => {
    console.log(response);
    return <Redirect to={this.state.redirect} />
  }

  const handleClick = async (e) =>  {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", { email: email.current.value, password: password.current.value });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setUser(res.data)

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }

  };

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user))
  },[user])

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Login</h3>
          <span className="loginDesc">
            To view different houses.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
            <div>
              <GoogleLogin
                  clientId="377053875187-09dfb5s9voilhfsoqrqf5tf3251foj9q.apps.googleusercontent.com"
                  buttonText="Login"
                  cookiePolicy={'single_host_origin'}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
