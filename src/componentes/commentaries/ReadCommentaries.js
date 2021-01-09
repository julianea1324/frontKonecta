import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { readCommentaries } from '../../actions/commentaries';
import { DeleteComment } from './DeleteComment';


export const ReadCommentaries = ({idPost}) => {
    const { commentaries } = useSelector((state) => state.commentaries);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(readCommentaries(idPost));
    }, [dispatch]);   

    return (
        <div>
            {
                commentaries.map(e=>{
                    return(
                        <div className="row commentary">
                            <div className="col-md-12 title "><p><b>Creado por: </b>{e.userName}</p><p><b>Fecha Creación: </b>{e.created_at}</p></div>
                            <div className="col-md-12 cont">{e.long_text}</div>
                            <div className="col-md-12">
                            <DeleteComment id={e.id} iduser = {e.id_user} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
