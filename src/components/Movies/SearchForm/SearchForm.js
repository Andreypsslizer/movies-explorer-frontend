import React from "react";

function SearchForm() {
  return (
    <section className="searchform">
          <form action="#" name="login" className="searchform-inp">
            <input 
              id="search-input" 
              className="searchform-inp__input" 
              type="movie" name="name" 
              placeholder="      Фильм"
              minLength="2" 
              maxLength="200"
              required/>
            <button className="searchform-inp__button" type="submit">Найти</button>
          </form>
        <div className="searchform__check"><input type='checkbox' className='ios8-switch' id='checkbox-1'/>
        <label for='checkbox-1' className="lablsearch">Короткометражки</label></div>
    </section>
  )
}

export default SearchForm