import {  fetchContoken, fetchtoken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { types } from "../types/types";


export const readingUser = () => {
  return async (dispatch) => {
      try {
         const  resp = await fetchContoken('readUsers')
         const body = await resp.json()
    
        //  const post = readBlog(body)       
         dispatch(userRead(body))
      } catch (error) {
        console.log(error)
      }
  };
};




export const updateUser =(id, email, user_type, phone, created_at) =>{
  console.log(id, email, user_type, phone, created_at)
  return async(dispatch)=>{
    try {
      const resp = await fetchContoken(`updateUser`,{id, email, user_type, phone},'POST')
      const body = await resp.json()
      const obgect = {id, email, user_type, phone, created_at}
      dispatch(userUpdate(obgect))
      Swal.fire("Flicidades", "Su post fue actualizado correctamente");
    } catch (error) {
      console.log(error)
      Swal.fire("error", error);
    }
  }
}

export const deleteUser = (id) => {
  return async(dispatch) =>{
    try {
      const  resp = await fetchContoken(`deleteUser`,{id},'POST')
      const body = await resp.json()
      Swal.fire("Elimninado", `El usuario ${id} se ha eliminado correctamente.`);
      dispatch(userDelete(id))      
    } catch (error) {
      console.log(error)
    }
  }
}
export const readingUserOne = (users) => {
  return async (dispatch) => {
    try {
       const  resp = await fetchContoken(`readUser?id=${users}`)
       const body = await resp.json()
       localStorage.setItem('activepost',users)
       localStorage.setItem('active',JSON.stringify(body))
      //  const post = readBlog(body)          
       dispatch(userOneRead(body))
    } catch (error) {
      console.log(error)
    }
};
};

const userRead = (posts) =>({
    type: types.userRead,
    payload: posts,
})
const userOneRead = (post) =>({
  type: types.userOneRead,
  payload: post
})

const userDelete = (id) =>({
  type: types.userDelete,
  payload:id
})
const userUpdate = (post) =>({
  type: types.userUpdate,
  payload:post,
})