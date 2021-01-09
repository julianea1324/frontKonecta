import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../../actions/Users';



export const DeleteUsers = ({id}) => {
const dispatch = useDispatch();
const {userType } = useSelector((state) => state.auth);
const handleClick = () =>{
    dispatch(deleteUser(id))
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
