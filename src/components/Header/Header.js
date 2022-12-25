import React from "react";
import logo from "../../images/logo.svg";
import {Route, Routes} from "react-router-dom";
import Navigation from "../Navigation/Navigation";




function Header({ isLogged, onBurgerClick }) {
    

  return (
    <header className="header">
      <Routes>
        <Route
          path="/movies"
          element={
            <div className="profile__header">
                <img className="logo" alt="logo" src={logo}/>
                <Navigation isLogged={isLogged} />
                {isLogged && (
                <div className="header__burger" onClick={onBurgerClick}>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                </div>
                )}
            </div>
          }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <div className="profile__header">
                <img className="logo" alt="logo" src={logo}/>
                <Navigation isLogged={isLogged} />
                {isLogged && (
                <div className="header__burger" onClick={onBurgerClick}>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                </div>
                )}
            </div>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <div className="profile__header">
                <img className="logo" alt="logo" src={logo}/>
                <Navigation isLogged={isLogged} />
                {isLogged && (
                <div className="header__burger" onClick={onBurgerClick}>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                  <div className="header__burger-line"></div>
                </div>
                )}
            </div>
          }
        ></Route>
        <Route
          path="/sign-in"
          element={
            <div className="signin__header"><img className="logo" alt="logo" src={logo}/></div>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <div className="signin__header"><img className="logo" alt="logo" src={logo}/></div>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
