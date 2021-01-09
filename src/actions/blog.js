import {  fetchContoken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { types } from "../types/types";
export const blogCreate = (
  id_category,
  name,
  slug,
  short_text,
  long_text,
  image = "/image",
  id_user
) => {
  return async (dispatch) => {
    const resp = await fetchContoken(
      "createBlog",
      { id_category, name, slug, short_text, long_text, image, id_user },
      "POST"
    );
    const body = await resp.json();
    if (body.error === undefined) {
      dispatch(createBlog(body.blog))
      Swal.fire("Flicidades", "Su post fue creado correctamente");
    } else {
      Swal.fire("Error", "Error al crear el blog");
    }
  };
};

export const readingBlog = () => {
  return async (dispatch) => {
      try {
         const  resp = await fetchContoken('readBlog')
         const body = await resp.json()
      
        //  const post = readBlog(body)       
         dispatch(loadBlog(body))
      } catch (error) {
        console.log(error)
      }
  };
};

export const updateblog =(id,short_text,long_text,name,created_at) =>{
 
  return async(dispatch)=>{
    try {
      const resp = await fetchContoken(`updateBlog`,{id,short_text,long_text,name},'POST')
      const body = await resp.json()
      const obgect = {id,short_text,long_text,name,created_at}
     
      dispatch(updateBlog(obgect))
      Swal.fire("Flicidades", "Su post fue actualizado correctamente");
    } catch (error) {
      console.log(error)
      Swal.fire("error", error);
    }
  }
}

export const deleteBlog = (id) => {
  return async(dispatch) =>{
    try {
      const  resp = await fetchContoken(`deleteBlog`,{id},'POST')
      const body = await resp.json()
      Swal.fire("Elimninado", `El post ${id} se ha eliminado correctamente.`);
      dispatch(deleteBlogs(id))      
    } catch (error) {
      console.log(error)
    }
  }
}
export const readingBlogONe = (blog) => {
  return async (dispatch) => {
    try {
       const  resp = await fetchContoken(`readBlogOne?id=${blog}`)
       const body = await resp.json()
       localStorage.setItem('activepost',blog)
       localStorage.setItem('active',JSON.stringify(body))
      //  const post = readBlog(body)          
       dispatch(loadBlogOne(body))
    } catch (error) {
      console.log(error)
    }
};
};

const loadBlog = (posts) =>({
    type: types.readingBlog,
    payload: posts,
})
const loadBlogOne = (post) =>({
  type: types.readingOneBlog,
  payload: post
})
const createBlog = (post) =>({
  type: types.createBlog,
  payload:post
})
const deleteBlogs = (id) =>({
  type: types.blogDelete,
  payload:id
})
const updateBlog = (post) =>({
  type: types.blogUpdate,
  payload:post,
})

