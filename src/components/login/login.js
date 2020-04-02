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
  Button,
  Input,
  Label
} from "reactstrap";
import "firebase/auth";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    modal: false,
    error: []
  };

  submit = e => {
    e.preventDefault();
    login(this.state.email, this.state.password)
      .then(user => {
        this.props.onLogin(user);
        this.props.history.push("/task-1");
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
          <Form className="login-form" id="login-form">
            <Label for="Email Address">Work Email</Label>
            <Input
              type="email"
              name="Email Address"
              placeholder="username@email.com"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <Label for="Password">Password</Label>
            <Input
              type="password"
              name="Password"
              placeholder="*******"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <Input type="submit" value="Login" onClick={e => this.submit(e)} />
            <p className="auth--message" style={{ textAlign: "center" }}>
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
