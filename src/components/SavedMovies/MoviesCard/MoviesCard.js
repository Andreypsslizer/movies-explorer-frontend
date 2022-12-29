import React from "react";
import image from "../../../images/cardimage.png"
import deletebt from "../../../images/delete.svg"


export default function MoviesCard() {
  
  return (
    <li className="card">
      <img
        className="card__image"
        src={image}
        alt="Обложка фильма"
      ></img>
      <div className="card__inf">
        <h3 className="card__title">33 слова о дизайне</h3>
        <button
            type="button"
            className="card__delete"
        ><img className="delete-button" alt="delete" src={deletebt}/></button>
      </div>
      <p className="card__duration">1ч42м</p>
    </li>
  );
}
