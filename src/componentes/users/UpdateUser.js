import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../actions/Users";

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

export const UpdateUser = ({ idFound }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  const { userType } = useSelector((state) => state.auth);
  const arr = users.filter(function (e) {
    return e.id == idFound;
  });
  const [array] = arr;
  let id = "a",
   email = "a",
    user_type = "a",
    phone = "a",
    created_at = "";
  if (array) {
    ({ id, email, user_type, phone, created_at } = array);
  }

  const [userRegister, handlerUser] = useForm({
    uid: id,
    uemail: email,
    uuser_type: user_type,
    uphone: phone,
  });

  const { uid, uemail, uuser_type, uphone } = userRegister;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleSend = (e) => {
    e.preventDefault();
    dispatch(updateUser( uid, uemail, uuser_type, uphone, created_at));
    setIsOpen(false);
  };
  return (
    <div>
      {userType===1 ?  (
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
              <p>Email</p>
              <input
                className="form-control"
                value={uemail}
                name="uemail"
                onChange={handlerUser}
                type="text"
              />
            </div>
            <div className="col-md-12">
              <p>Tipi usuario: (1: administrador, 2 + usuario corriente)</p>
              <input
                className="form-control"
                value={uuser_type}
                name="uuser_type"
                onChange={handlerUser}
                type="text"
              />
            </div>
            <div className="col-md-12">
              <p>Telefono:</p>
              <input
                className="form-control"
                value={uphone}
                name="uphone"
                onChange={handlerUser}
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
