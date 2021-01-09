import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { readingBlogONe } from "../../actions/blog";
import { Commentarie } from "../commentaries/Commentarie";
import { UpdateBlog } from "../modal/UpdateBlog";
import { ListBlog } from "./ListBlog";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const ReadOneBlog = ({ location }) => {
  let query = useQuery();
  const dispatch = useDispatch();
  const id = query.get("id");
  // const id = id ? id : localStorage.getItem("activepost");
  useEffect(() => {
    dispatch(readingBlogONe(id));
  }, [dispatch]);

  const { postActve } = useSelector((state) => state.blog);
  const [active] = postActve;
  let name, long_text, created_at, id_user;
  if (active) ({ name, long_text, created_at, id_user } = active);

  return (
    <div>
      <UpdateBlog idFound={id} id_user={id_user} />
      <div className="cont">
        <div className="row">
          <div className="col-md-9">
            <div className="post_full row">
              <div className="col-md-12 name">{name}</div>
              <div className="col-md-12 long">{long_text}</div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6 date">
                    Fecha de creacion: {created_at}
                  </div>
                </div>
              </div>
            </div>
            <Commentarie idPost={id} />
          </div>
          <div className="col-md-3">
            <ListBlog />
          </div>
        </div>
      </div>
    </div>
  );
};
