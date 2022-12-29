import React from "react";


function Register() {
  

  return (
    <section className="register">
      <h3 className="register__hello">Добро пожаловать!</h3>
      <form action="#" name="login" className="login__form">
        <label className="login__label">Имя</label>
            <input 
                id="name-input" 
                className="login__input" 
                type="name" name="name" 
                placeholder="Vitalii"
                minLength="2" 
                maxLength="40"
                required/>
                <span className="form__error login-input-error"></span>
              <label className="login__label">E-mail</label>
                <input 
                id="email-input" 
                className="login__input" 
                type="email" name="email" 
                placeholder="Email"
                minLength="2" 
                maxLength="40" 
                required/>
                <span className="form__error email-input-error"></span>
              <label className="login__label">Пароль</label>
                <input 
                id="password-input" 
                className="login__input" 
                type="password" 
                name="password" 
                placeholder="Password" 
                minLength="2" 
                maxLength="200" 
                required/>
                <span className="form__error password-input-error"></span>
              <button className="login__form-submit" type="submit">Зарегестрироваться</button>
            </form>
            <div className="register__hint">
                <p className="register__yet">Уже зарегистрированы?</p>
                <a className="log-in" href="/sign-in">Войти</a>
            </div>
    </section>
  );
}

export default Register;