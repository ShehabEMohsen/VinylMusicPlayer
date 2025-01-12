import React from "react";
import { getSpotifyAuthUrl } from "../utils/auth";
import "./Login.css";

function Login() {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Spotify Vinyl</h1>
      <button className="login-button" onClick={handleLogin}>
        Login with Spotify
      </button>
    </div>
  );
}

export default Login;
