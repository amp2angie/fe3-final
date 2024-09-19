import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../Components/utils/global.context";

const Navbar = () => {

  const {state, dispatch} = useContext(ContextGlobal)

  const cambiarTema = (theme) => {
    dispatch({ type: 'CAMBIAR_TEMA', theme });
  };

  return (
    <nav>
      <ul>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/favs">Favoritos</Link></li>
        <li><Link to="/contact">Contactanos</Link></li>
      </ul>
      <button onClick={() => cambiarTema(!state.theme)}>{state.theme ? '🌙':'☀'}</button>
    </nav>
  )
}

export default Navbar