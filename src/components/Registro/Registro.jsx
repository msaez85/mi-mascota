import React, { useState,} from "react";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle, MdMailOutline, MdKey ,MdVisibility ,MdVisibilityOff} from "react-icons/md";
import { FaEye, FaEyeSlash } from "react-icons/fa"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


import "./registro.css";

const Registro = () => {

//cambios de estado
  const [resp, setResp] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
  const [value, setValue] = useState({
    usuario: "",
    email: "",
    password1: "",
    password2: "",
  });

 
//funcion para tomar los valores del form y hacer una copia en un array
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

//funcion para validar mail y passwords
  const handleSumbit = (e) => {
    e.preventDefault();

    if (!validateEmail(value.email)) {
      setEmailError("Ingrese un correo electrónico válido");
      return;
    }

    if (value.password1 !== value.password2) {
      setPasswordError("Las contraseñas no coinciden");
      return;
    }

    setResp(value);
    setShowModal(true);
    clearForm();
  };

//funcion para limpiar formulario (el e.target.reset no me funcionaba)
  const clearForm = () => {
    setValue({
      usuario: "",
      email: "",
      password1: "",
      password2: "",
    });
    setEmailError("");
    setPasswordError("");
  };

//validacion de mail mediante expresiones regulares
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };



  return (
    <>
      <h3 style={{ textAlign: "center", marginTop: "2rem" }}>Registro</h3>

      <Form onSubmit={handleSumbit} className="registro-usuario">
        <div className="img-registro d-flex justify-content-center align-items-center">
            <img src="https://img.icons8.com/?size=512&id=124077&format=png" alt="imagenregistro" 
            style={{ width: "120px", height: "120px" }}/>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <div className="input-registro">
            <MdAccountCircle />
            <Form.Control
            minLength={4}
            maxLength={20}
              required
              type="text"
              name="usuario"
              id="usuario"
              value={value.usuario}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <div className="input-registro">
            <MdMailOutline />
            <Form.Control
              required
              type="email"
              name="email"
              id="email"
              value={value.email}
              onChange={handleChange}
            />
          </div>
          <Form.Text className="text-danger">{emailError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <div className="input-registro">
            <MdKey />
            <Form.Control
              required
              type={showPassword1 ? "text" : "password"}
              name="password1"
              id="password1"
              value={value.password1}
              onChange={handleChange}
            />
            <Button className="boton-password"
            variant="secondary"
            onClick={() => setShowPassword1(!showPassword1)}
        >
            {showPassword1 ? <MdVisibilityOff /> : <MdVisibility />}
        </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingrese su contraseña nuevamente</Form.Label>
          <div className="input-registro">
            <MdKey />
            <Form.Control
              required
              type={showPassword2 ? "text" : "password"}
              name="password2"
              id="password2"
              value={value.password2}
              onChange={handleChange}
            />
            <Button className="boton-password"
            variant="secondary"
            onClick={() => setShowPassword2(!showPassword2)}
        >
            {showPassword2 ? <MdVisibilityOff /> : <MdVisibility />}
        </Button>
          </div>
          <Form.Text className="text-danger">{passwordError}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            label="Acepto terminos y condiciones"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>
      </Form>
{/* modal con funcion para redigir a login */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Registro Exitoso</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Su usuario fue guardado exitosamente , presione Iniciar Sesion para acceder a su cuenta.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              navigate("/login");
            }}
          >
            Iniciar Sesion
          </Button>
        </Modal.Footer>
      </Modal>

      <h3>{Object.values(resp)}</h3>
    </>
  );
};

export default Registro;