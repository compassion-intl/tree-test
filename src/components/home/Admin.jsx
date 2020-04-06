import React, { useState, useEffect } from "react";
import { TabContent, TabPane, Button, Table, Alert } from "reactstrap";
import API from "../db/API";

const Admin = () => {
  const [hasError, setErrors] = useState(false);
  const [taskResults, setTaskResults] = useState({});

  useEffect(() => {
    API.getTaskResults()
      .then((e) => {
        setTaskResults(e);
      })
      .catch((err) => setErrors(err));
  }, []);

  return (
    <>
      <div className="alert-container">
        <Alert color="secondary">
          <h5>Task Completion Summary</h5>
          <p>placeholder text</p>
        </Alert>
      </div>
      <Table size="sm">
        <thead>
          <tr>
            <th>Task #</th>
            <th>Structure</th>
            <th>Time to Completion</th>
            <th>Items Clicked</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {taskResults.length > 0
            ? taskResults.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.taskNumber.split("-")[1]}</th>
                    <td>{item.section.split(" ")[0]}</td>
                    <td>{`${item.timeToCompletion} seconds`} </td>
                    <td>
                      {item.itemsClicked.map((item, i) => {
                        return (
                          <React.Fragment key={i}>
                            {i + 1}. {item}
                            <br />
                          </React.Fragment>
                        );
                      })}
                    </td>
                    <td>{item.userId} </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </Table>
    </>
  );
};

export default Admin;
