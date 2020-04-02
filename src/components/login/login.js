import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../login/LoginHandler";
import logo from "../../logo.svg";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Button
} from "reactstrap";
import "firebase/auth";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    error: []
  };

  submit = () => {
    login(this.state.email, this.state.password)
      .then(user => {
        this.props.onLogin(user);
        // this.props.history.push("/regulate");
      })
      .catch(error => {
        console.log(error.message);
        this.setState({ error: error.message });
        this.toggleModal();
      });
  };

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <>
        <div className="login-container">
          <Form className="login-form" onSubmit={this.submit}>
            <input
              control="input"
              type="email"
              label="Email Address"
              placeholder="username@email.com"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              control="input"
              type="password"
              label="Password"
              placeholder="*******"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Button content="Login" />
            <p className="auth--message">
              Not registered yet? <Link to="/register">Sign Up</Link>
            </p>
          </Form>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          centered={true}
        >
          <ModalHeader className="modal-head" toggle={this.toggleModal}>
            Login Error
          </ModalHeader>
          <ModalBody>
            <p>{this.state.error}</p>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
