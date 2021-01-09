import React from "react";
import "./login.css";
import { useDispatch } from "react-redux";
import { useForm } from "./../../hooks/useForm";
import { startLogin,startRegister } from "../../actions/auth";
import Swal from 'sweetalert2'
export const LoginScreen = () => {
  const dispatch = useDispatch();

  const [formLoginValues, handleLoginInputChange] = useForm({
    lEmail: "test@test.com",
    lPassword: "123456",
  });


  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName:'Test',
    rPhone:'123456',
    rUserType: '1',
    rEmail: "test@test.com",
    rPassword: "123456",
    rRepassword: "123456"
  });

  const {rName,rPassword,rPhone,rEmail,rRepassword} = formRegisterValues
  const { lEmail, lPassword } = formLoginValues;
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLogin(lEmail, lPassword));
  };
  const handleRegister = e =>{
    e.preventDefault();

    if(rPassword !== rRepassword){
        Swal.fire('error','Las contraseñas deben ser iguales')
    }
    dispatch(startRegister(rName,rEmail,rPassword,rRepassword,rPhone)); 
  }

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="lEmail"
                value={lEmail}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="lPassword"
                value={lPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="rName"
                onChange={handleRegisterInputChange}
                value={rName}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="rEmail"
                onChange={handleRegisterInputChange}
                value={rEmail}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="phone"
                name="rPhone"
                onChange={handleRegisterInputChange}
                value={rPhone}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="rPassword"
                onChange={handleRegisterInputChange}
                value={rPassword}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="rRepassword"
                onChange={handleRegisterInputChange}
                value={rRepassword}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
