import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { blogCreate } from "../../actions/blog";
import { readingCateogries } from "../../actions/categories";

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

export const Modals = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { categories } = useSelector((state) => state.categories);
  const [category, setCategories] = useState(categories);
  useEffect(() => {
    dispatch(readingCateogries());
  }, [dispatch]);

  // console.log( useSelector(state => state.auth))
  const [blogRegister, handlerBlog] = useForm({
    id_category: "1",
    name: "prueba blog",
    short_text: "lorem im",
    long_text: "julian9413000@gmail.com",
    image: "/souce/normal",
    slug: "/id",
    id_user: id,
  });

  const {
    id_category,
    name,
    short_text,
    long_text,
    image,
    slug,
    id_user,
  } = blogRegister;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(
      blogCreate(id_category, name, slug, short_text, long_text, image, id_user)
    );
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal} className="new_blog">
        +
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      {!category.length > 0 ? (
    <div>Porfavor registra una categoria antes de crear un post</div>
  ) : (
    <form onSubmit={handleSend}>
      <div className="row">
        <div className="col-md-12">
          <p>Categoriat</p>
          <select
            className="form-control"
            name="id_category"
            onChange={handlerBlog}
          >
            <option defaultChecked>
                  Selecciona una opción
                </option>
            {category.map((e) => {
              return (
                // console.log(e)
                <option key={e.name} value={e.id}>
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-12">
          <p>Titulo</p>
          <input
            className="form-control"
            name="name"
            onChange={handlerBlog}
            type="text"
          />
        </div>
        <div className="col-md-12">
          <p>Short Text</p>
          <textarea
            maxLength="200"
            className="form-control"
            name="short_text"
            onChange={handlerBlog}
          ></textarea>
        </div>
        <div className="col-md-12">
          <p>Long text</p>
          <textarea
            maxLength="600"
            className="form-control"
            name="long_text"
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
  )}
      </Modal>
    </div>
  );
};
