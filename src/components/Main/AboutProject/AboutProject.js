import React from "react";

function AboutProject() {
  return (
    <section className="about">
        <h3 className="about__header">О проекте</h3>
        <div className="about__block">
            <div className="about__block-small">
                <h4 className="about__block-header">Дипломный проект включал 5 этапов</h4>
                <p className="about__block-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="about__block-small">
                <h4 className="about__block-header">На выполнение диплома ушло 5 недель</h4>
                <p className="about__block-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className="about__time">
            <div className="about__time-back">1 неделя</div>
            <div className="about__time-front">4 недели</div>
        </div>
    </section>
  );
}

export default AboutProject;
