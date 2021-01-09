import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { readingBlog } from "../../actions/blog";
export const ListBlog = () => {
  const {posts}  = useSelector(state => state.blog)  
  const dispatch = useDispatch(); 
  useEffect(() => {   
    dispatch(readingBlog());    
  }, [dispatch]);
    return (
        <div>
          {posts.map((e) => {
            return (
            
              <Link to={`/readOneBlog?id=${e.id}`} key={e.id}>
              <div className="posts_list row" >
                <div className="col-md-12 name">{e.name}</div>                
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-6 date">{e.created_at}</div>                    
                    <div className="col-md-3 text">Categoria: {e.category}</div>
                  </div>             
                </div>
              </div>
              </Link>
            );
          })}
        </div>
      );
}
