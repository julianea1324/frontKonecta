import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCommentaries } from "../../actions/commentaries";
import { useForm } from "../../hooks/useForm";
import { ReadCommentaries } from "./ReadCommentaries";
import './../../assets/scss/commentary.scss'
export const Commentarie = ({ idPost }) => {
  const dispatch = useDispatch();
  const { id,userName } = useSelector((state) => state.auth);
  const [commentarieCreate, handlerCommentaries] = useForm({
    uName:userName,
    id_post: idPost,
    long_text: "long text",
    id_user: id,
  });

  const { id_post, long_text, id_user,uName} = commentarieCreate;

  const handleSend = (e) => {
    e.preventDefault();
    dispatch(createCommentaries(id_post, id_user, long_text,uName));
    
  };
  return (
    <div>
      <h3>Comentarios</h3>
      <ReadCommentaries idPost={idPost}/>
      <form onSubmit={handleSend}>
        <div className="row">
          <div className="col-md-12 textarea_comment">
            <textarea
              maxLength="600"
              className="form-control "
              name="long_text"
              onChange={handlerCommentaries}
            ></textarea>
          </div>
          <div className="col-md-12 btn-comment_cont">
            <button type="submit" className="btn btn-outline-primary btn-block btn_comment">
              <i className="far fa-save"></i>
              <span> Comentar</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
