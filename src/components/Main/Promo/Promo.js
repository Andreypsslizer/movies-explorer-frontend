import React from "react";
import world from "../../../images/world.png"
import logo from "../../../images/logo.svg";
import { Link } from 'react-router-dom';

function Promo() {
  return (
    <div className="promo">
      <div className="promo__header">
      <img className="logo" alt="logo" src={logo}/>
      <div className="promo__link-acc">
      <ul className="navigation__btns">
          <li className="navigation__btns-item">
            <Link
              to="/sign-up"
              className="navigation__btn navigation__btn_register"
            >
              Регистрация
            </Link>
          </li>
          <li className="navigation__btns-item">
            <Link
              to="/sign-in"
              className="navigation__btn navigation__btn_login"
            >
              Войти
            </Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="promo__info">
        <img className="promo__info-pic" alt="web world" src={world}/>
        <div className="promo__info-block">
          <h1 className="promo__info-head">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__info-text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__info-more">Узнать больше</button>
        </div>
      </div>
    </div>
  );
}

export default Promo;
