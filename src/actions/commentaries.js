import { fetchContoken, fetchtoken } from "../helpers/fetch";
import Swal from "sweetalert2";
import { types } from "../types/types";



export const createCommentaries = (id_post,id_user,long_text,userName) => {
  return async (dispatch) => {
    console.log(id_post,id_user,long_text,userName)
    const resp = await fetchContoken(
      "createCommentary",
      { id_post,id_user,long_text,userName },
      "POST"
    );
    const body = await resp.json();
    // console.log(body)
    if (body.error === undefined) {
        dispatch(createComment(body.commentaries))
      Swal.fire("Flicidades", "Su comentario fue creado correctamente");
    } else {
      Swal.fire("Error", "Error al crear el blog");
    }
  };
};

export const deleteCommentary= (id) => {
  return async (dispatch) => {
    try {
      const resp = await fetchContoken(`deletCommentary`, { id }, "POST");
      const body = await resp.json();
      Swal.fire("Elimninado", `El comentario ${id} se ha eliminado correctamente.`);
        dispatch(deleteComment(id))
    } catch (error) {
      console.log(error);
    }
  };
};
export const readCommentaries = (id) => {
  return async (dispatch) => {
    try {
     
      const resp = await fetchContoken(`readCommentaries?id=${id}`);
      const body = await resp.json();     
      dispatch(readComment(body))
    } catch (error) {
      console.log(error);
    }
  };
};


const readComment = (commentaries) =>({
  type: types.commentRead,
  payload:commentaries
})

const createComment = (commentaries) =>({
  type: types.commentCreate,
  payload:commentaries
})

const deleteComment = (id) =>({
  type: types.commentDelete,
  payload:id
})