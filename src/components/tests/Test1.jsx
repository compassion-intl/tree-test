import React from "react";
import DropdownContainer from "../dropdown/DropdownContainer";
import DropdownItem from "../dropdown/DropdownItem";

let info = require('../../data/info.json');
let categoryList = info.data;

const Test1 = () => {
  return (
    <div className="test-container">
        <h1>Test 1</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <button>Begin</button>
        <hr></hr>
        {
          categoryList.map(category => {
            if(category.type === 1 && category.childOf === null) {
              return (<DropdownContainer key={category.id} name={category.name} id={category.id}/>)
            }
            if(category.type === 2 && category.childOf === null) {
              return (<DropdownItem key={category.id} name={category.name}/>)
            }
            if(category.childOf !== null) {
              console.log("found")
            }
          })
        }
    </div>
  );
};

export default Test1;