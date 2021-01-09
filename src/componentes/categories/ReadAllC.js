import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { readingCateogries } from "../../actions/categories";
import { DeleteCategori } from "./DeleteCategori";


export const ReadAllC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readingCateogries());
      }, [dispatch]);
  const { categories } = useSelector((state) => state.categories);
  return (
    <div>
      {categories.map((e) => {
        return (          
            <div className="categorie_list row" key={e.name}>              
              <div className="col-md-12 name">{e.name}</div>              
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 date ">
                    Fecha creación: {e.created_at}
                  </div> 
                </div>
              </div>             
              <DeleteCategori id={e.id} iduser = {e.id_user} />
            </div>         
        );
      })}
    </div>
  );
};
