import React from "react";
import logo from "../../images/logo.svg";
import {Route, Routes} from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";




function Header({ isLogged, onBurgerClick }) {
    

  return (
    <header className="header">
      <Routes>
        <Route
          path="/movies"
          element={
            <div className="profile__header">
                <NavLink
                  to="/"
                  className="profile__header-link"
                >
                  <img className="profile__header-logo" alt="logo" src={logo}/>
                </NavLink>
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
                <NavLink
                  to="/"
                  className="profile__header-link"
                >
                  <img className="profile__header-logo" alt="logo" src={logo}/>
                </NavLink>
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
                <NavLink
                  to="/"
                  className="profile__header-link"
                >
                  <img className="profile__header-logo" alt="logo" src={logo}/>
                </NavLink>
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
            <div className="signin__header">
              <NavLink
                to="/"
                className="profile__header-link"
              >
                <img className="profile__header-logo" alt="logo" src={logo}/>
              </NavLink>
            </div>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <div className="signin__header">
              <NavLink
                to="/"
                className="profile__header-link"
              >
                <img className="profile__header-logo" alt="logo" src={logo}/>
              </NavLink>
            </div>
          }
        ></Route>
      </Routes>
    </header>
  );
}

export default Header;
