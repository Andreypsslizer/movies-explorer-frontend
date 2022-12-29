import React from "react";

function AboutMe() {
  return (
    <section className="resume">
        <h3 className="resume__header">Студент</h3>
        <div className="resume__info">
        <div className="resume__info-pic"></div>
        <div className="resume__info-block">
          <h1 className="resume__info-head">Andrei Kovzik</h1>
          <p className="resume__info-text">Фронтенд-разработчик, 23 лет</p>
          <p className="resume__info-biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/" className="resume__info-link"  target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
      <div className="resume__links">
        <a href="https://github.com/Andreypsslizer/how-to-learn" className="resume__link"  target="_blank" rel="noreferrer">Статичный сайт<span>↗</span></a>
        <a href="https://github.com/Andreypsslizer/russian-travel" className="resume__link"  target="_blank" rel="noreferrer">Адаптивный сайт<span>↗</span></a>
        <a href="https://github.com/Andreypsslizer/mesto" className="resume__link"  target="_blank" rel="noreferrer">Одностраничное приложение<span>↗</span></a>
      </div>
    </section>
  );
}

export default AboutMe;
