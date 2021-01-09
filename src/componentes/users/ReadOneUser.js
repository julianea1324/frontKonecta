import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { readingUser, readingUserOne } from "../../actions/Users";
import { UpdateUser } from "./UpdateUser";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ReadOneUser = () => {
  let query = useQuery();
  const dispatch = useDispatch();
  const id = query.get("id");
  useEffect(() => {
    dispatch(readingUser());
    dispatch(readingUserOne(id));    
  }, [dispatch]);

  const { userActive } = useSelector((state) => state.users);
  const [active] = userActive;
  
  let name, email, phone, user_type, created_at;
  if (active) ({ name, email, phone, user_type, created_at } = active);

  return (
    <div>
      <UpdateUser idFound={id} />
      <div className="cont">
        <div className="row">
          <div className="col-md-12">
            <div className="post_full row">
              <div className="col-md-12 name">Nombre Usuario:{name}</div>
              <div className="col-md-12 long">Correo: {email}</div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 date">
                    Fecha de creacion: {created_at}
                  </div>
                  <div className="col-md-3 text">
                    Tipo de usuario:{" "}
                    {user_type === 1 ? "administrador" : "usuario"}
                  </div>
                  <div className="col-md-3 text">
                    Telefono:{" "}
                    {phone}
                  </div>
                </div>
              </div>
            </div>           
          </div>          
        </div>
      </div>
    </div>
  );
};
