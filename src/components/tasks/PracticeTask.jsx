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

const Task1 = () => {
  // change taskText to the instructions given to the user for this task
  const [taskText, setTaskText] = useState(
    "You want to read about other people’s experiences sponsoring children and if they would recommend it."
  );

  // other state handlers
  const [hasError, setErrors] = useState(false);
  const [navItems, setNavItems] = useState({});
  const [taskNum] = useState("Practice Task");
  const [startModal, setStartModal] = useState(false);
  const [endModal, setEndModal] = useState(false);
  const [practiceModal, setPracticeModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  const [doneButton, setDoneButton] = useState(false);
  const [clickedItems, setClickedItems] = useState([]);
  const initialState = () => window.sessionStorage.getItem("user") || null;
  const [userInfo, setUserInfo] = useState(initialState);

  const toggle = () => setStartModal(!startModal);
  const togglePracticeModal = () => setPracticeModal(!practiceModal);
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

    setPracticeModal(true);
    let clickedItemsArray = HF.foundTheItem();
    setClickedItems(clickedItemsArray);
  }, []);

  useEffect(() => {
    let interval = null;
    if (isActiveTimer) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
    } else if (!isActiveTimer && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActiveTimer, seconds]);

  let triggerFinish = () => {
    setEndModal(true);
    toggleActiveTimer();
    // HF.submitTaskData(userInfo, seconds, clickedItems);
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
          <h4>Practice Task Complete!</h4>
          <p>Are you ready to begin tree testing?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="info" href="/task-1">
            Begin Tree Testing
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        key={"Practice Instructions"}
        isOpen={practiceModal}
        centered={true}
        size="lg"
      >
        <ModalBody>
          <h4>Tree Testing Instructions</h4>
          <h6 style={{ color: "red" }}>Please read carefully</h6>
          <p style={{ fontStyle: "italic", color: "grey" }}>
            Tree testing is a UX technique to help assess findability of
            different topics across the architecture of a website -
            <a href="https://youtu.be/P0WDO76300Q?t=28" target="_blank">
              Click to view a short video about tree testing
            </a>
          </p>

          <p style={{ fontWeight: "600" }}>The tests will work like this:</p>
          <p>
            1. A popup will deliver the task you are being asked to complete. It
            will place you in the context of a user in a specific situation.
          </p>
          <p>2. You will click 'Begin', and the task will start</p>
          <p>
            3. Click through the menu structure until you find the label for the
            page where you think the task's information would be located. Please
            be sure and click the label for the page.
          </p>
          <p>
            4. When you have clicked the page where you think it would be found,
            click "Done" at the bottom of the screen.
          </p>
          <p>
            5. The application will automatically take you to the next task.
            There are 10 total tasks, with one practice task before you begin.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color="info"
            onClick={() => {
              togglePracticeModal();
              toggle();
            }}
          >
            Begin Practice Task
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
