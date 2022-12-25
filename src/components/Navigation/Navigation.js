import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ isLogged, isBurgerOpened, handleClose }) {
  return (
    <>
      {isLogged ? (
        <div
          className={`${
            isBurgerOpened ? 'navigation' : 'navigation navigation_hidden'
          }`}
        >
          <button
            className="navigation__close-btn"
            onClick={handleClose}
          ></button>
          <nav className="navigation__menu">
            <ul className="navigation__list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'link navigation__list-item navigation__list-item_active'
                      : 'link navigation__list-item'
                  }
                >
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'link navigation__list-item navigation__list-item_active'
                      : 'link navigation__list-item'
                  }
                  to="/movies"
                >
                  Фильмы
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'link navigation__list-item navigation__list-item_active'
                      : 'link navigation__list-item'
                  }
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </NavLink>
              </li>
            </ul>
          </nav>
          <ul className="navigation__profile">
            <NavLink className="link navigation__profile-link" to="/profile">
              Аккаунт
            </NavLink>
          </ul>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Navigation;