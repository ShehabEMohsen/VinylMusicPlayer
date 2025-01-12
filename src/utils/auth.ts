
const CLIENT_ID = "8d912fb75f43433b82af89f9de7f6f6b";
const REDIRECT_URI = "http://localhost:5174/";
const SCOPES = [
    "user-read-email",
    "user-read-private",
    "playlist-read-private",
    "playlist-read-collaborative",
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