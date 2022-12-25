import React from "react";
import student from "../../../images/student.png"

function AboutMe() {
  return (
    <section className="resume">
        <h3 className="resume__header">Студент</h3>
        <div className="resume__info">
        <img className="resume__info-pic" alt="my photography" src={student}/>
        <div className="resume__info-block">
          <h1 className="resume__info-head">Andrei Kovzik</h1>
          <p className="resume__info-text">Фронтенд-разработчик, 23 лет</p>
          <p className="resume__info-biography">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a href="https://github.com/" className="resume__info-link">Github</a>
        </div>
      </div>
      <div className="resume__links">
        <p className="resume__link">Статичный сайт<span>↗</span></p>
        <p className="resume__link">Адаптивный сайт<span>↗</span></p>
        <p className="resume__link">Одностраничное приложение<span>↗</span></p>
      </div>
    </section>
  );
}

export default AboutMe;
