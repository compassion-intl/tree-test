import React, { Component } from "react";
import { Link } from "react-router-dom";
import { register } from "./LoginHandler";
import "firebase/auth";
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

export default class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    modal: false,
    error: []
  };

  submit = e => {
    e.preventDefault();

    let userObject = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      role: "User"
    };
    register(userObject)
      .then(newUser => {
        this.props.onRegister(newUser);
      })
      .then(() => {
        this.props.history.push("/task-1");
      })
      .catch(error => {
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
        <div className="auth-container">
          <Form className="register-form" id="register-form">
            <Label for="Full Name">Full Name</Label>
            <Input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              onChange={e => this.setState({ username: e.target.value })}
            />
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
            <Input
              type="submit"
              value="Register"
              onClick={e => this.submit(e)}
            />
            <p className="auth-message" style={{ textAlign: "center" }}>
              Already registered? <Link to="/">Log In</Link>
            </p>
          </Form>
        </div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          centered={true}
        >
          <ModalHeader className="modal-head" toggle={this.toggleModal}>
            Registration Error
          </ModalHeader>
          <ModalBody>
            <p>{this.state.error}</p>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
