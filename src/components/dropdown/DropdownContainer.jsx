import React, {useState, useEffect} from "react";
import { IoIosArrowForward } from 'react-icons/io';
import "../dropdown/Dropdown.css";
import DropdownItem from "../dropdown/DropdownItem";


const DropdownContainer = (props) => {
  
  useEffect(() => {
  
  });

      return (
        <>
          <div className="dd-container" id={props.id}>
            <div className="dd-inner-container" >
              <div className="dd-container-left" >
                <a href="#" >{props.name}</a>
              </div>
              <div className="dd-container-right" >
                <IoIosArrowForward className="arrow" />
              </div>
            </div>
          </div>
      </>
      );
};

export default DropdownContainer;