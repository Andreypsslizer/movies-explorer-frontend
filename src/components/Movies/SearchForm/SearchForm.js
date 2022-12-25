import React from "react";

function SearchForm() {
  return (
    <section className="searchform">
        <div className="searchform-inp">
            <input className="searchform-inp__input" type="text" placeholder="      Фильм"/>
            <button className="searchform-inp__button">Найти</button>
        </div>
        <div className="searchform__check"><input type='checkbox' className='ios8-switch' id='checkbox-1'/>
        <label for='checkbox-1' className="lablsearch">Короткометражки</label></div>
    </section>
  )
}

export default SearchForm