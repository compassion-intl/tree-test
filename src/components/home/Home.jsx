import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let saveUser = e => {
    e.preventDefault();
    sessionStorage.setItem("Name", name);
    sessionStorage.setItem("Email", email);
  };

  return (
    <>
      <Form id="signup-form">
        <FormGroup>
          <Label for="fullName">Full Name</Label>
          <Input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Type your name"
            onChange={e => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFullName">Work Email</Label>
          <Input
            placeholder="Username"
            id="workEmail"
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button onClick={e => saveUser(e)}>Submit</Button>
      </Form>
    </>
  );
};

export default Home;
