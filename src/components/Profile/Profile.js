import React from "react";


function Profile() {
  

  return (
    <section className="profile">
        <h3 className="profile__hello">Привет, Виталий!</h3>
        <form action="#" name="login" className="profile__form">
        <div className="form__input">
            <label for="name-input" className="profile__label"> Имя </label>
            <input 
                id="name-input" 
                className="profile__input" 
                type="name" name="name" 
                placeholder="Vitalii"
                minLength="2" 
                maxLength="40"/>
            </div>
            <div className="form__input">
                <label for="email-input" className="email__label"> E-mail </label>
                <input 
                id="email-input" 
                className="profile__input" 
                type="email" 
                name="email" 
                placeholder="pochta@yandex.ru"
                minLength="2" 
                maxLength="40"/>
            </div>
            </form>
            <button className="profile__form-submit" type="submit">Редактировать</button>
            <button className="profile__exit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
