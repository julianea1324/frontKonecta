import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../actions/auth";
import "./../assets/scss/header.scss";
export const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  const { userName } = useSelector((state) => state.auth);
  return (
    <div className="header">
      <div className="content">
        <div className="user">{userName}</div>
        {userName ? (
          <div className="menu">
        
        <a className="Inicio" href="/">
              Inicio
            </a>
            <a className="Inicio" href="/readCategories">
              Categorias
            </a>
            <a className="Inicio" href="/users">
              Usuarios
            </a>
            <div className="logout" onClick={handleLogout}>
              Logout
            </div>
          </div>
        ) : (
          <div></div>
        )}    
      </div>
    </div>
  );
};
