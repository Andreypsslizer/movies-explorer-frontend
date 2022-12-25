import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Header from '../Header/Header';
import Main from "../Main/Main";
import Footer from '../Footer/Footer';
import Overlay from '../Overlay/Overlay';
import NotFound from '../NotFound/NotFound';

function App() {
  const [isLogged, setIsLogged] = useState(true);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const handleOpenBurgerMenu = () => {
    setIsBurgerOpened(true);
  };

  const closeAllPopups = () => {
    setIsBurgerOpened(false);
  };

  return (
    <div className="App">
      <Header
                isLogged={isLogged}
                isBurgerOpened={isBurgerOpened}
                onBurgerClick={handleOpenBurgerMenu}
                onClose={closeAllPopups}/>
      <Routes>
          <Route 
            path="/profile" 
            element={<Profile/>}
          />
          <Route 
            path="/saved-movies" 
            element={<SavedMovies/>}
          />
          <Route 
            path="/movies" 
            element={<Movies/>}
          />
          <Route 
            path="/sign-in" 
            element={<Login/>}
          />
          <Route
            path="/sign-up"
            element={<Register/>}
          />
          <Route
            path="/"
            element={<Main/>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Overlay
                isLogged={isLogged}
                isBurgerOpened={isBurgerOpened}
                handleClose={closeAllPopups}
              />
        <Footer />
    </div>
  );
}

export default App; 
