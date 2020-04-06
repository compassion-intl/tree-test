import React, { useState, useEffect } from "react";
import {
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Nav,
  Button,
  Table,
  Alert,
} from "reactstrap";
import classnames from "classnames";
import API from "../db/API";
import ExistingTable from "./ExistingTable";
import NewTable from "./NewTable";
import BothTable from "./BothTable";
import Summary from "./Summary";

const Admin = () => {
  const [hasError, setErrors] = useState(false);
  const [allTaskResults, setAllTaskResults] = useState({});
  const [existTaskResults, setExistTaskResults] = useState({});
  const [newTaskResults, setNewTaskResults] = useState({});
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    API.getAllTaskResults()
      .then((e) => {
        setAllTaskResults(e);
      })
      .catch((err) => setErrors(err));

    API.getExistTaskResults()
      .then((e) => {
        setExistTaskResults(e);
      })
      .catch((err) => setErrors(err));

    API.getNewTaskResults()
      .then((e) => {
        setNewTaskResults(e);
      })
      .catch((err) => setErrors(err));
  }, []);

  return (
    <>
      <div className="alert-container">
        <Alert color="secondary">
          <h5>Task Completion Summary</h5>
        </Alert>
      </div>

      {/* TABS AND TABLES */}

      <div id="admin-view">
        <Nav tabs>
          <NavItem style={{ cursor: "pointer" }}>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Existing Structure
            </NavLink>
          </NavItem>
          <NavItem style={{ cursor: "pointer" }}>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              New Structure
            </NavLink>
          </NavItem>
          <NavItem style={{ cursor: "pointer" }}>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Both Together
            </NavLink>
          </NavItem>
          <NavItem style={{ cursor: "pointer" }}>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Summary
            </NavLink>
          </NavItem>
        </Nav>

        {/* TAB CONTENT */}

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <ExistingTable existTaskResults={existTaskResults} />
          </TabPane>
          <TabPane tabId="2">
            <NewTable newTaskResults={newTaskResults} />
          </TabPane>
          <TabPane tabId="3">
            <BothTable allTaskResults={allTaskResults} />
          </TabPane>
          <TabPane tabId="4">
            <Summary allTaskResults={allTaskResults} />
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default Admin;
