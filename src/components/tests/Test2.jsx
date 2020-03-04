import React from "react";
import DropdownContainer from "../dropdown/DropdownContainer";
import DropdownItem from "../dropdown/DropdownItem";

const Test2 = () => {
  return (
    <div className="test-container">
        <h1>Test 2</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <button>Begin</button>
        <hr></hr>
        <DropdownContainer />
          <DropdownItem />
        <DropdownContainer />
        <DropdownContainer />
    </div>
  );
};

export default Test2;