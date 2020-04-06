import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";

const ExistingTable = (props) => {
  const [prevProps, setPrevProps] = useState(props);
  useEffect(() => {
    setPrevProps(props);
  }, [props]);
  return (
    <>
      <Table size="sm" hover>
        <thead>
          <tr>
            <th>Task #</th>
            <th>Time to Completion</th>
            <th>Items Clicked</th>
            <th>User</th>
          </tr>
        </thead>
        <tbody>
          {prevProps.existTaskResults.length > 0
            ? prevProps.existTaskResults.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.taskNumber.split("-")[1]}</td>
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

export default ExistingTable;
