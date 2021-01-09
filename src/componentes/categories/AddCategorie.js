import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch,useSelector } from "react-redux";

import { createCategori } from "../../actions/categories";

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

export const AddCategorie = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
 
  // console.log( useSelector(state => state.auth))
  const [CategorieRegister, handlerBlog] = useForm({    
    name:'',   
  });

  const {name} = CategorieRegister

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(createCategori(name));
    setIsOpen(false);
  };
  const {userType } = useSelector((state) => state.auth);
  return (
    <div>
       {userType===1 ?  (
        <button onClick={openModal} className="new_blog">
        +
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
                name="name"
                onChange={handlerBlog}
                type="text"
              />
              
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
