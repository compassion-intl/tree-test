import React, { Component } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "../dropdown/Dropdown.css";

export default class DropdownContainer extends Component {
  //   componentDidMount = () => {
  //     let parentDivs = document.querySelectorAll(".dd-container"),
  //       i;
  //     for (i = 1; i < parentDivs.length; i++) {
  //       parentDivs[i].classList.add("hide");
  //     }
  //   };

  revealContents = event => {
    // console.log(event.currentTarget)
    if (event.currentTarget.classList.contains(`dd-inner-container`)) {
      //Grab all children of clicked node
      let children = event.currentTarget.parentNode.children;

      // for every child except the first one, hide or show
      for (var i = 1; i < children.length; i++) {
        if (children.item(i).classList.contains("hide")) {
          children.item(i).classList.remove("hide");
        } else {
          children.item(i).classList.add("hide");
        }
        console.log(children.item(i));
      }
    }
  };

  render() {
    // add top-level category names here so they show immediately
    if (
      (this.props.type === 1 && this.props.name === "Sponsor a Child") ||
      (this.props.type === 1 && this.props.name === "Ways to Donate")
    ) {
      return (
        <>
          <div
            className="dd-inner-container"
            id={`dd-item-${this.props.id}`}
            key={this.props.id}
            onClick={e => this.revealContents(e)}
          >
            <div className="dd-container-left">
              <a href="#">{this.props.name}</a>
            </div>
            <div className="dd-container-right">
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
        </>
      );
    } else if (
      (this.props.type === 1 && this.props.name !== "Sponsor a Child") ||
      (this.props.type === 1 && this.props.name !== "Ways to Donate")
    ) {
      return (
        <>
          <div
            className="dd-inner-container"
            id={`dd-item-${this.props.id}`}
            onClick={e => this.revealContents(e)}
            key={this.props.id}
          >
            <div className="dd-container-left">
              <a href="#">{this.props.name}</a>
            </div>
            <div className="dd-container-right">
              <IoIosArrowForward className="arrow" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="dd-inner-container">
            <div className="dd-container-left">
              <a href="#">{this.props.name}</a>
            </div>
          </div>
        </>
      );
    }
  }
}
