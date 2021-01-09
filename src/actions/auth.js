import { fetchtoken,fetchContoken } from "../helpers/fetch";
import { types } from "./../types/types";
import Swal from 'sweetalert2'

export const startLogin = (email, password) => {
  return async (dispatch) => {
    const resp = await fetchtoken("auth/login", { email, password }, "POST");
    const body = await resp.json();
    console.log(body);
    if (body.error === undefined) {
      console.log("ok");
      localStorage.setItem("token", body.access_token);
      localStorage.setItem("checking", false);
      dispatch(
        login({
          id: body.user.id,
          userName: body.user.name,
          userType: body.user.user_type,
          token: body.access_token
        })
      );
    }else{
        Swal.fire('error', body.error)    
    }
  };
};
export const startLogout = () =>{
  return async(dispatch) =>{
    localStorage.clear();
    dispatch(Logout());
  }
}

export const startRegister = (name,email,password,password_confirmarion,phone,user_type=1) =>{
    return async(dispatch) => {
    const resp = await fetchtoken("auth/register", { name,email,password,password_confirmarion,phone,user_type}, "POST");
    const body = await resp.json();
    console.log(body === '{"email":["The email has already been taken."]}');
    if(body === '{"email":["The email has already been taken."]}'){
      Swal.fire('Error', 'El correo ya existe') 
    }else if (body.error === undefined) {
      Swal.fire('Registro completo', 'Te registraste correctamente!') 
    }else{
        Swal.fire('error', body.error)    
    }
    }

}

export const startChecking =()=>{
  return async(dispatch) => {   
    try {
      const resp = await fetchContoken("auth/refresh");
    const body = await resp.json();
    if (body.error === undefined) {     
      localStorage.setItem("token", body.access_token);
      localStorage.setItem("checking", false);
      dispatch(
        login({
          id: body.user.id,
          userType: body.user.user_type,
          userName: body.user.name,
          token: body.access_token
        })
      );
    }else{      
        Swal.fire('error', body.error)  
        dispatch(checkingFinish())  
        localStorage.setItem("token", body.access_token);
    }
    } catch (error) {
      console.log(error)
    }
    
  }
}
const Logout = () => ({type:types.authLogout})
const checkingFinish = () =>({types: types.authChekingFinish})
const login = (user) => ({
  type: types.authLogin,
  payload: user,
});
