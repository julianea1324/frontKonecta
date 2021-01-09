import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { readingBlog } from "../../actions/blog";
import { DeleteBlog } from "./DeleteBlog";

export const ReadBlog = () => {
  const { posts } = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readingBlog());
    
  }, [dispatch]);

  return (
    <div>
      {posts.map((e) => {
        return (          
            <div className="posts_list row">
              <Link to={`/readOneBlog?id=${e.id}`} className="col-md-12" key={e.id}>
              <div className="col-md-12 name">{e.name}</div>
              <div className="col-md-12">{e.short_text}</div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 date ">
                    Fecha creación: {e.created_at}
                  </div>
                  <div className="col-md-3 text">Creado por: {e.user}</div>
                  <div className="col-md-3 text">Categoria: {e.category}</div>
                </div>
              </div>
              </Link>
              <DeleteBlog id={e.id} iduser = {e.id_user} />
            </div>
         
        );
      })}
    </div>
  );
};
