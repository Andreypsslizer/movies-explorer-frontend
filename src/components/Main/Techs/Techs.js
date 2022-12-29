import React from "react";

function Techs() {
  return (
    <section className="techs"><div className="techs-page">
        <h3 className="techs__header">Технологии</h3>
        <div className="techs__block">
            <h4 className="techs__block-header">7 технологий</h4>
            <p className="techs__block-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__ul">
          <ul className="techs__list">
            <li className="techs__item">
              <p className="techs__description">HTML</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">CSS</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">JS</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">React</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">Git</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">Express.js</p>
            </li>
            <li className="techs__item">
              <p className="techs__description">mongoDB</p>
            </li>
          </ul>
        </div>
        </div>
    </section>
  );
}

export default Techs;
