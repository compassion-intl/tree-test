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
  ModalFooter,
} from "reactstrap";

const Task2 = () => {
  // change taskText to the instructions given to the user for this task
  const [taskText, setTaskText] = useState(
    "You want to find out how Compassion uses the money given to them and if they are fiscally responsible."
  );

  // other state handlers
  const [hasError, setErrors] = useState(false);
  const [navItems, setNavItems] = useState({});
  const [taskNum] = useState("Task 2");
  const [startModal, setStartModal] = useState(false);
  const [endModal, setEndModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [doneButton, setDoneButton] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const initialState = () => window.sessionStorage.getItem("user") || null;
  const [userInfo, setUserInfo] = useState(initialState);

  const toggle = () => setStartModal(!startModal);
  const toggleAlert = () => setAlert(!alert);

  function toggleActiveTimer() {
    setIsActiveTimer(!isActiveTimer);
  }

  useEffect(() => window.sessionStorage.setItem("user", userInfo), [userInfo]);

  useEffect(() => {
    API.getNavItems()
      .then((e) => {
        setNavItems(e);
      })
      .catch((err) => setErrors(err));

    setStartModal(true);
    let clickedItemsArray = HF.foundTheItem();
    setClickedItems(clickedItemsArray);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActiveTimer) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActiveTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer, seconds]);

  let triggerFinish = () => {
    setEndModal(true);
    toggleActiveTimer();
    HF.submitTaskData(userInfo, seconds, clickedItems);
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
          <h4>{taskNum}</h4>
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
          <Button color="info" href="/task-3">
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

export default Task2;
