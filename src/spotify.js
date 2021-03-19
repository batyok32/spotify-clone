export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "b98cdc09445d4364b52fbfd48097bdcc";


// correct permissions or it will block you
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];


// Exporting token from url
export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
        // #accessToken=mysupersecretkey&name=sonny
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
} 

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;