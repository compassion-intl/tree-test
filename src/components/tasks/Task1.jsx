import React, { useEffect, useState } from "react";
// import NavItems from "../../data/info2";
import SideNav from "../sidenav/SideNav";
import "../sidenav/SideNav.css";
import API from "../db/API";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const Task1 = () => {
  const [hasError, setErrors] = useState(false);
  const [navItems, setNavItems] = useState({});
  const [taskNum] = useState("Task 1");
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [taskText, setTaskText] = useState(
    "Where would you go to find out how to Sponsor a Child?"
  );
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(new Date().getTime());

  const toggle = () => setModal(!modal);
  const toggleAlert = () => setAlert(!alert);

  useEffect(() => {
    API.getNavItems()
      .then(e => {
        setNavItems(e);
      })
      .catch(err => setErrors(err));

    setModal(true);
  }, []);

  return (
    <>
      <Modal
        isOpen={modal}
        centered={true}
        onClosed={() => {
          setStartTime(new Date().getTime());
          setAlert(true);
        }}
      >
        <ModalHeader>Task 1</ModalHeader>
        <ModalBody>{taskText}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Begin {taskNum}
          </Button>
        </ModalFooter>
      </Modal>
      <div className="alert-container">
        <Alert color="info" isOpen={alert}>
          <h5>{taskNum}</h5>
          <p>{taskText}</p>
        </Alert>
      </div>
      <SideNav items={navItems} />
    </>
  );
};

export default Task1;
