import React, { useEffect, useState } from "react";
import "./Playlists.css";

function Playlists({ playlists }) {
  console.log(playlists);
  if (!playlists || playlists.length === 0) {
    return <div>No playlists found</div>;
  }
  return (
    <div className="albums-bar">
      {playlists.map((playlist) => {
        console.log(playlist.images[0].url);
        return (
          <div key={playlist.id} className="playlist-item">
            {playlist.images && playlist.images.length > 0 ? (
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                className="playlist-image"
              />
            ) : (
              <div> No Playlists </div>
            )}
            <p>{playlist.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Playlists;
