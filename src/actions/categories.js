import { fetchContoken, fetchtoken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { types } from "../types/types";



export const createCategori = (name) => {
  return async (dispatch) => {
    console.log(name)
    const resp = await fetchContoken(
      "createCategory",
      { name },
      "POST"
    );
    const body = await resp.json();
    // console.log(body)
    if (body.error === undefined) {
        dispatch(createCategory(body.categories))
      Swal.fire("Flicidades", "Su categoria fue creada correctamente");
    } else {
      Swal.fire("Error", "Error al crear la categoria");
    }
  };
};

export const deleteCategori= (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchContoken(`deletCategory`, { id }, "POST");
      const body = await resp.json();
      console.log(id)
      Swal.fire("Elimninado", `la categoria ${id} se ha eliminado correctamente.`);
        dispatch(deleteCategories(id))
    } catch (error) {
      console.log(error);
    }
  };
};
export const readingCateogries = () => {
    return async (dispatch) => {
      try {
         const  resp = await fetchContoken(`readCategories`)
         const body = await resp.json()        
        //  const post = readBlog(body)         
      dispatch(readCategorie(body))
      } catch (error) {
        console.log(error)
      }
  };
  };


const readCategorie = (categories) =>({
    type: types.readingCategories,
    payload: categories
  })

const createCategory = (categories) =>({
  type: types.createCategories,
  payload:categories
})

const deleteCategories = (id) =>({
  type: types.deleteCategories,
  payload:id
})