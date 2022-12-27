import React from "react";


function Login() {
  

  return (
    <section className="register">
      <h3 className="register__hello">Рады видеть!</h3>
      <form action="#" name="login" className="login__form">
              <label className="login__label">E-mail</label>
                <input 
                id="email-input" 
                className="login__input" 
                type="email" name="email" 
                placeholder="Email"
                minLength="2" 
                maxLength="40" 
                required/>
                <span className="form__error login-input-error"></span>
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
              <button className="login__form-submit" type="submit">Войти</button>
            </form>
            <div className="register__hint">
                <p className="register__yet">Ещё не зарегистрированы?</p>
                <a className="log-in" href="http://localhost:3000/sign-up">Регистрация</a>
            </div>
    </section>
  );
}

export default Login;