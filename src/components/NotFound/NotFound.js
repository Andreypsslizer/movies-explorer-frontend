import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const moveBack = () => navigate(-1);
  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button onClick={moveBack} className="link not-found__button">
        Назад
      </button>
    </div>
  );
}

export default NotFound;