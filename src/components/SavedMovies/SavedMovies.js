import React from "react";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <section className="savedmovies">
        <SearchForm/>
        <MoviesCardList/>
    </section>
  )
}

export default SavedMovies