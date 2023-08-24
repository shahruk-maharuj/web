import React from "react";
import "../assets/css/login/Login.css";
import logo from "../assets/img/logo/shahruk.svg";

function Login() {
  return (
    <div className="sm_login">
      <div className="sm_loginBackground">
        <img className="sm_logo" src={logo} alt="logo" />
        <button className="sm_button">Sign in</button>
        <div className="sm_loginGradient" />
      </div>
      <div className="sm_loginBody">
        <>
          <h1>Best-Quality Platform for Islamic Documentaries & web series.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>Instantly stream movies, series, and documentaries that accurately represent the <br /> Muslim community, all curated by a highly skilled team of Muslim film fanatics.</h3>
        </>
      </div>
    </div>
  );
}

export default Login;
