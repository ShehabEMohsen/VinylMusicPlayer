import React from "react";
import { getSpotifyAuthUrl } from "../utils/auth";

function Login() {
  const handleLogin = () => {
    window.location.href = getSpotifyAuthUrl();
  };

  return (
    <div>
      <h1 style={{ color: "white" }}>Spotify Player</h1>
      <button onClick={handleLogin}>Login with Spotify</button>
    </div>
  );
}

export default Login;
