const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const REDIRECT_URI = `${import.meta.env.VITE_REDIRECT_URI}`;
const SCOPES = [
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-state",
]

export const getSpotifyAuthUrl = (): string => {
    const scope = encodeURIComponent(SCOPES.join(" "));
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${scope}`;
};

export const getAccessTokenFromUrl = (): string | null => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get("access_token");
}