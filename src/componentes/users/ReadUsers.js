import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {DeleteUsers} from './DeleteUsers'

import {  readingUser } from "../../actions/Users";

export const ReadUsers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readingUser());
      }, [dispatch]);
  const { users } = useSelector((state) => state.users);
  return (
    <div>
      {users.map((e) => {
        return (          
            <div className="posts_list row" key={e.name}>
            <Link to={`/user?id=${e.id}`} className="col-md-12" key={e.id}>
            <div className="col-md-12 name">{e.name}</div>            
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 date ">
                  Fecha creación: {e.created_at}
                </div>
                <div className="col-md-3 text">Tipo usuario: {e.user_type===1 ? 'administrador' : 'usuario'}</div>
                
              </div>
            </div>
            </Link>
            <DeleteUsers id={e.id} />
          </div>        
        );
      })}
    </div>
  );
};
