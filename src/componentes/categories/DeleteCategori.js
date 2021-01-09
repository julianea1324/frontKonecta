import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCategori } from '../../actions/categories';


export const DeleteCategori = ({id,iduser}) => {
const dispatch = useDispatch();
const {userType } = useSelector((state) => state.auth);
const handleClick = () =>{
    dispatch(deleteCategori(id))
}

    return (
        <>
            {userType===1 ?  (
        <div className="delete" onClick={handleClick}>
        Eliminar
    </div>
      ) : (
        <div></div>
      )}
        </>
        
    )
}
