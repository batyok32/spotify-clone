// import logo from './logo.svg';
import './App.css';
import Login from './Login'
import React, { useEffect, useState } from 'react'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify =new SpotifyWebApi();

function App() {

  // const [token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // takes token from url
    const hash = getTokenFromUrl();
    // clears url location
    window.location.hash="";

    const _token = hash.access_token; 
    if ((_token)) {
      dispatch({
        type:"SET_TOKEN",
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: "SET_USER",
          user: user,
        })
      })

      spotify.getUserPlaylists().then((playlists) =>{
        console.log("taken from sp:", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });
      });

      spotify.getPlaylist('37i9dQZF1DX12G1GAEuIuj').then(response => {
        console.log("response", response)
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
      });
      
    }
  }, [])


  return (
    <div className="app">
      {/* this is jsx */}
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
    
  );
}

export default App;
