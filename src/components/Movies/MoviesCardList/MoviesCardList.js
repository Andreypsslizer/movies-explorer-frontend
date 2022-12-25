import React from "react";
import Card from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviescardlist">
        <ul className="moviescardlist__list">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </ul>
        <div className="moviescardlist__more"><button className="moviescardlist__more-button">Ещё</button></div>
    </section>
  )
}

export default MoviesCardList