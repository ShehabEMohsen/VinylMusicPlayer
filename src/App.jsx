import { useEffect, useState } from 'react'
import './App.css'
import Vinyl from './components/Vinyl'
import Login from './components/Login'
import { getAccessTokenFromUrl } from './utils/auth';

function App() {
  const [token, setToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [playlists, setPlaylists] = useState([]);

  useEffect(()=>{
    if(token){
      fetch("https://api.spotify.com/v1/me",{
        headers:{
          Authorization: `Bearer ${token}`,
        },
      }).then ((response) =>{
        if (!response.ok){
          throw new Error("Failed to fetch information");
        }
        return response.json();
      }).then((data)=>{
        // console.log("User info: ",data);
        setUserInfo(data);

        fetch(`https://api.spotify.com/v1/users/${data.id}/playlists`,{
          headers:{
            Authorization: `Bearer ${token}`,
          },
        }).then((response)=>{
          if(!response.ok){
            throw new Error("Failed to fetch playlists");
          }
          return response.json();
        }).then((playlistsData)=>{
          // console.log("Playlists: ", playlistsData);
          setPlaylists(playlistsData.items||[]);
        }).catch((error)=>{
          // console.error("Error fetching playlists: ", error);
        })
      }).catch((error) =>{
        // console.error("Error: ",error)
      })
    }
    // console.log(playlists)
    const accessToken = getAccessTokenFromUrl();
    if(accessToken){
      // console.log("Access Token: ",accessToken)
      setToken(accessToken);
      window.history.pushState({},"","/");
    }
  },[token]);

  return (
    <>
      {/* <Vinyl/> */}
      {token ? (
  <div>
    <Vinyl user={userInfo} token={token} />
    {/* <Playlists playlists={playlists} /> */}
  </div>
) : (
  <Login />
)}
    </>
  )
}

export default App
