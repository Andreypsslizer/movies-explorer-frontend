import React from "react";
import Card from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="moviescardlist">
        <ul className="moviescardlist__list">
          <Card/>
          <Card/>
          <Card/>
        </ul>
    </section>
  )
}

export default MoviesCardList