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
import { GlobalStyle } from './styles';
import styled from 'styled-components/macro';
import {
  Login,
  Profile,
  TopArtists,
  TopTracks,
  Playlists,
  Playlist,
} from './pages';

const StyledLogoutButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-md);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: var(--white);
  font-size: var(--fz-sm);
  font-weight: 700;
  border-radius: var(--border-radius-pill);
  z-index: 10;
  @media (min-width: 768px) {
    right: var(--spacing-lg);
  }
`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [token, setToken] = useState(void 0);

  useEffect(() => {
    setToken(accessToken);
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {!token ? (
          <Login />
        ) : (
          <>
            {/* <StyledLogoutButton onClick={logout}>Log Out</StyledLogoutButton> */}
            <Router>
              <ScrollToTop />
              <Routes>
                <Route exact path="/" element={<Profile />}></Route>
              </Routes>
              <Routes>
                <Route
                  exact
                  path="/top-artist"
                  element={<TopArtists />}
                ></Route>
              </Routes>
              <Routes>
                <Route exact path="/top-tracks" element={<TopTracks />}></Route>
              </Routes>
              <Routes>
                <Route exact path="/playlists" element={<Playlists />}></Route>
              </Routes>
              <Routes>
                <Route
                  exact
                  path="/playlists/:id"
                  element={<Playlist />}
                ></Route>
              </Routes>
            </Router>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
