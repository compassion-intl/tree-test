import React from "react";


const DropdownItem = (props) => {
  return (
    <div className="dd-item">
      <a href="#">{props.name}</a>
   </div>
  );
};

export default DropdownItem;