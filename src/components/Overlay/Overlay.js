import React from 'react';
import Navigation from '../Navigation/Navigation';

function Overlay({ isLogged, isBurgerOpened, handleClose }) {
  return (
    <div className={`${isBurgerOpened ? 'overlay' : 'overlay overlay_hidden'}`}>
      <Navigation
        isLogged={isLogged}
        isBurgerOpened={isBurgerOpened}
        handleClose={handleClose}
      />
    </div>
  );
}

export default Overlay;