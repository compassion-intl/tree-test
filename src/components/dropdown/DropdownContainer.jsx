import React from "react";
import { IoIosArrowForward } from 'react-icons/io';
import "../dropdown/Dropdown.css";
import {revealContents} from "../../HelperFunctions";


const DropdownContainer = (props) => {

  // add very first category names here so they show immediately
  if((props.type === 1 && props.name === 'Sponsor a Child') || (props.type === 1 && props.name === 'Ways to Donate')) {
      return (
        <>
            <div className="dd-inner-container" id={`dd-item-${props.id}`} onClick={(e) => revealContents(e)}>
              <div className="dd-container-left" >
                <a href="#" >{props.name}</a>
              </div>
              <div className="dd-container-right" >
                <IoIosArrowForward className="arrow" />
              </div>
            </div>
      </>
      );
  } 
  else if((props.type === 1 && props.name !== 'Sponsor a Child') || (props.type === 1 && props.name !== 'Ways to Donate')) {
    return (
      <>
          <div className="dd-inner-container newName" id={`dd-item-${props.id}`} onClick={(e) => revealContents(e)}>
            <div className="dd-container-left" >
              <a href="#" >{props.name}</a>
            </div>
            <div className="dd-container-right" >
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
    </>
    );
  }
  else {
    return(
      <>
        <div className="dd-inner-container newName" >
          <div className="dd-container-left" >
            <a href="#" >{props.name}</a>
          </div>
        </div>
      </>
    )
  }
};

export default DropdownContainer;