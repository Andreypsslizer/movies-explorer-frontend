import React from "react";
import {Route, Routes} from "react-router-dom"

function Footer() {
  return (
      <Routes>
      <Route
          path="/movies"
          element={
            <section className="footer">
            <p className="footer__ps">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links">
              <p className="footer__links-year"><span>&copy;</span>2022</p>
              <div className="footer__links-a">
                  <a 
                    className="footer__links-a-yandex" 
                    href="https://practicum.yandex.ru/profile/web/" 
                    target="_blank" 
                    rel="noreferrer">
                      Яндекс.Практикум
                    </a>
                  <a 
                    className="footer__links-a-yandex" 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noreferrer">
                      Github
                    </a>
              </div>
            </div>
            </section>
            }
        ></Route>
        <Route
          path="/"
          element={
            <section className="footer">
            <p className="footer__ps">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links">
              <p className="footer__links-year"><span>&copy;</span>2022</p>
              <div className="footer__links-a">
                  <a 
                    className="footer__links-a-yandex" 
                    href="https://practicum.yandex.ru/profile/web/" 
                    target="_blank" 
                    rel="noreferrer">
                      Яндекс.Практикум
                    </a>
                  <a 
                    className="footer__links-a-yandex" 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noreferrer">
                      Github
                    </a>
              </div>
            </div>
            </section>
            }
        ></Route>
        <Route
          path="/saved-movies"
          element={
            <section className="footer">
            <p className="footer__ps">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__links">
              <p className="footer__links-year"><span>&copy;</span>2022</p>
              <div className="footer__links-a">
                  <a
                    className="footer__links-a-yandex"
                    href="https://practicum.yandex.ru/profile/web/" 
                    target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                  <a 
                    className="footer__links-a-yandex" 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noreferrer">
                    Github
                  </a>
              </div>
            </div>
            </section>
            }
        ></Route>
      </Routes>
  );
}

export default Footer;
