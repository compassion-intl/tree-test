import React, { useEffect, useState } from "react";
// import NavItems from "../../data/info2";
import SideNav from "../sidenav/SideNav";
import "../sidenav/SideNav.css";
import API from "../db/API";
import HF from "../db/HelperFunctions";
import {
  Alert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

const Task1 = () => {
  // change itemToFind to the name of what the user is searching for
  const itemToFind = "Ways to Donate";

  // change taskText to the instructions given to the user for this task
  const [taskText, setTaskText] = useState(
    "Where would you go to find out how to Sponsor a Child?"
  );

  // other state handlers
  const [hasError, setErrors] = useState(false);
  const [navItems, setNavItems] = useState({});
  const [taskNum] = useState("Task 1");
  const [startModal, setStartModal] = useState(false);
  const [endModal, setEndModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [doneButton, setDoneButton] = useState(false);

  const toggle = () => setStartModal(!startModal);
  const toggleAlert = () => setAlert(!alert);
  function toggleActiveTimer() {
    setIsActiveTimer(!isActiveTimer);
  }

  useEffect(() => {
    API.getNavItems()
      .then(e => {
        setNavItems(e);
      })
      .catch(err => setErrors(err));

    setStartModal(true);
    HF.foundTheItem(itemToFind);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActiveTimer) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActiveTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer, seconds]);

  let triggerFinish = () => {
    setEndModal(true);
    toggleActiveTimer();
    submitTaskData();
  };

  let submitTaskData = () => {
    // let elapsedTime;
    const taskData = {
      userId: "",
      section: 1,
      taskNumber: window.location.pathname.split("/")[1],
      timeToCompletion: seconds + 1
    };

    API.taskComplete(taskData);
  };

  return (
    <>
      <Modal
        key={"Start Modal"}
        isOpen={startModal}
        centered={true}
        onClosed={() => {
          toggleActiveTimer();
          setAlert(true);
        }}
      >
        <ModalBody>
          <h4>Task 1</h4>
          <p>{taskText}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Begin {taskNum}
          </Button>
        </ModalFooter>
      </Modal>
      <Modal key={"End Modal"} isOpen={endModal} centered={true}>
        <ModalBody>
          <h4>Task Complete</h4>
          <p>Thank you!</p>
        </ModalBody>
        <ModalFooter>
          <Button color="info" href="/task-2">
            Next Task
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
      <div className="finish-button-container">
        <input
          className="finish-button"
          value="DONE"
          type="submit"
          onClick={triggerFinish}
        ></input>
      </div>
    </>
  );
};

export default Task1;
