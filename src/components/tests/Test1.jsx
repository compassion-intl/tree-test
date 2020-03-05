import React, {useEffect, Component} from "react";
import DropdownContainer from "../dropdown/DropdownContainer";
import members from "../../data/info"
import FamilyTree from "./FamilyTree";


export default class Test1 extends Component {
  render() {
    return (
      <>
        <h1>Task 1</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        <button>Begin</button>
        <hr></hr>
        <FamilyTree members={members} />
      </>
    );
  }
}