import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { Router } from "react-router-dom";
import { updateblog } from "../../actions/blog";

import { useForm } from "../../hooks/useForm";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
  },
};
Modal.setAppElement("#root");

export const UpdateBlog = ({ idFound, id_user }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  //   const {id} = useSelector(state => state.auth)
  const { posts } = useSelector((state) => state.blog);
  const { id: idUser,userType } = useSelector((state) => state.auth);
 
  const itsme = id_user == idUser ? true : false;

  const arr = posts.filter(function (e) {
    return e.id == idFound;
  });
  const [array] = arr;
  let id = "a",
    name = "a",
    short_text = "a",
    long_text = "a",
    created_at = "";
  if (array) {
    ({ id, name, short_text, long_text, created_at } = array);
  }

  //   console.log( useSelector(state => state.postActve))
  const [blogRegister, handlerBlog] = useForm({
    uid: id,
    uname: name,
    ushort_text: short_text,
    ulong_text: long_text,
  });

  const { uid, uname, ushort_text, ulong_text } = blogRegister;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(updateblog(uid, ushort_text, ulong_text, uname, created_at));
    setIsOpen(false);
  };
  return (
    <div>
      {itsme || userType===1 ?  (
        <button onClick={openModal} className="new_blog">
          Editar
        </button>
      ) : (
        <div></div>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSend}>
          <div className="row">
            <div className="col-md-12">
              <p>Titulo</p>
              <input
                className="form-control"
                value={uname}
                name="uname"
                onChange={handlerBlog}
                type="text"
              />
            </div>
            <div className="col-md-12">
              <p>Short Text</p>
              <textarea
                maxlength="200"
                value={ushort_text}
                className="form-control"
                name="ushort_text"
                onChange={handlerBlog}
              ></textarea>
            </div>
            <div className="col-md-12">
              <p>Long text</p>
              <textarea
                maxlength="600"
                className="form-control"
                value={ulong_text}
                name="ulong_text"
                onChange={handlerBlog}
              ></textarea>
            </div>
            <div className="col-md-12">
              <button
                type="submit"
                className="btn btn-outline-primary btn-block"
              >
                <i className="far fa-save"></i>
                <span> Guardar</span>
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};
