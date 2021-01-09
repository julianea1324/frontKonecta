import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog } from '../../actions/blog';

export const DeleteBlog = ({id,iduser}) => {
const dispatch = useDispatch();
const { id:id_user,userType } = useSelector((state) => state.auth);
const handleClick = () =>{
    dispatch(deleteBlog(id))
}
const itsme = iduser == id_user ? true : false;
console.log(iduser)
    return (
        <>
            {itsme || userType===1 ?  (
        <div className="delete" onClick={handleClick}>
        Eliminar
    </div>
      ) : (
        <div></div>
      )}
        </>
        
    )
}
