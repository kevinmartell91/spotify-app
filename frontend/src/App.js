import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {accessToken, logout} from "./spotify";


function App() {

  const [token, setToken] = useState(void 0);
  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a
            className="App-link"
            href="http://localhost:8080/login"
          >
            Login in Spotify
          </a>
        ) : (
          <> 
            <h1> Logged in! </h1>
            <button onClick={logout}>Log out</button>
          </>
          )}
      </header>
    </div>
  );
}

export default App;
