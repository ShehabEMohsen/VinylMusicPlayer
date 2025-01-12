import React, { useEffect, useState } from "react";
import "./Vinyl.css";
import { Vibrant } from "node-vibrant/browser";
// import { Vibrant } from "node-vibrant/worker";
// import Cover from "../assets/cover.jpg";
// import Arm from "./Arm";

function Vinyl({ user, token }) {
  const [move, setMove] = useState(false);
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [domColor, setDomColor] = useState("#00000");
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 950);

  useEffect(() => {
    const checkPlaybackState = async () => {
      try {
        const response = await fetch("https://api.spotify.com/v1/me/player", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          console.error("Failed to fetch playback state.");
          return;
        }
        const data = await response.json();
        const isPlaying = data.is_playing;
        setMove(isPlaying);

        if (data.item) {
          setSongName(data.item.name);
          setArtistName(
            data.item.artists.map((artist) => artist.name).join(",")
          );
          setAlbumCover(data.item.album.images[0].url);

          Vibrant.from(data.item.album.images[0].url)
            .getPalette()
            .then((palette) => {
              if (palette.DarkVibrant) {
                setDomColor(palette.DarkVibrant.hex);
              }
            });
        }
      } catch (error) {
        console.error("Failed to fetch playback state:", error);
      }
    };

    const handleResize = () => {
      setIsScreenSmall(window.innerWidth <= 950);
    };
    window.addEventListener("resize", handleResize);
    checkPlaybackState();

    const interval = setInterval(checkPlaybackState, 1000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [token]);

  return (
    <div className="area">
      {/* {user?.display_name} */}
      {/* <img src={playlist[0].images[0].url} /> */}
      <img className="album-cover" src={albumCover} />
      <div
        className={`vinyl ${move ? "rotating" : "stopped"}`}
        onClick={() => setMove(!move)}
      >
        <div className="small-circle">
          <div className="small-circle">
            <div className="small-circle">
              <div className="small-circle">
                <div className="small-circle">
                  <div className="small-circle">
                    <div className="small-circle">
                      <div className="small-circle">
                        <div className="small-circle">
                          <div className="small-circle">
                            <div className="small-circle">
                              <div className="small-circle">
                                <div className="small-circle">
                                  <div className="small-circle">
                                    <div className="small-circle">
                                      <div className="small-circle">
                                        <div className="small-circle">
                                          <div className="small-circle">
                                            <div className="small-circle">
                                              <div className="small-circle">
                                                <div className="small-circle">
                                                  <div className="small-circle">
                                                    <div
                                                      className="small-image"
                                                      style={{
                                                        // backgroundImage: `url(${albumCover})`,
                                                        // backgroundColor:
                                                        //   domColor,
                                                        background:
                                                          isScreenSmall
                                                            ? `center no-repeat url(${albumCover})`
                                                            : domColor,
                                                      }}
                                                    >
                                                      <div className="song-name">
                                                        {songName ||
                                                          "No song playing"}
                                                      </div>
                                                      <div className="artist-name">
                                                        {artistName || "artist"}
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={move ? "arm  moving-arm" : "arm"}
        onClick={() => setMove(!move)}
      >
        <div className="pin"></div>
      </div>
    </div>
  );
}
export default Vinyl;
