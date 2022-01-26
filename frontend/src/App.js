import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { accessToken, logout, getCurrentUserProfile } from './spotify';
import { catchError } from './utils';
import { GlobalStyle } from './styles';
import styled from 'styled-components/macro';

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(void 0);
  const [profile, setProfile] = useState(void 0);
  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
      console.log(data);
    };
    catchError(fetchData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8080/login">
            Login in Spotify
          </a>
        ) : (
          <>
            <button onClick={logout}>Log Out</button>

            {profile && (
              <div>
                <h1>{profile.display_name}</h1>
                <p>{profile.followers.total} Followers</p>
                {profile.images.length && profile.images[0].url && (
                  <img src={profile.images[0].url} alt="Avatar" />
                )}
              </div>
            )}
          </>
        )}
      </header>
    </div>
  );
}

export default App;
