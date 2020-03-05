import React, {useState, useEffect} from "react";
import { IoIosArrowForward } from 'react-icons/io';
import "../dropdown/Dropdown.css";
import DropdownItem from "../dropdown/DropdownItem";


const DropdownContainer = (props) => {

  if(props.type === 1) {
      return (
        <>
            <div className="dd-inner-container" >
              <div className="dd-container-left" >
                <a href="#" >{props.name}</a>
              </div>
              <div className="dd-container-right" >
                <IoIosArrowForward className="arrow" />
              </div>
            </div>
      </>
      );
  } else {
    return(
      <>
        <div className="dd-inner-container" >
          <div className="dd-container-left" >
            <a href="#" >{props.name}</a>
          </div>
        </div>
      </>
    )
  }
};

export default DropdownContainer;