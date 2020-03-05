import React, {useEffect, Component} from "react";
import DropdownContainer from "../dropdown/DropdownContainer";
import members from "../../data/info2"
import FamilyTree from "./FamilyTree";

// let info = require('../../data/info.json');
// let categoryList = info.data;





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



// const Test1 = () => {

//   useEffect (() => {
//       categoryList.map(category => {
//         // if type1 and not a child of anything
//         if(category.type === 1 && category.childOf === null) {
//           return (<DropdownContainer key={category.id} name={category.name} id={`ddc-${category.id}`}/>)
//         }
//         // if type 2 and not a child of anything
//         else if(category.type === 2 && category.childOf === null) {
//           return (<DropdownItem key={category.id} name={category.name}/>)
//         }
//         // if its a childOf (no matter what type)
//         else if(category.childOf !== null) {
//           console.log("subcat", category.childOf);
          
//           let foundParentObject = categoryList.find(cat => cat.id === category.childOf);
//           let foundParentObjectDiv = document.getElementById(`ddc-${foundParentObject.id}`);
//           console.log(foundParentObjectDiv)
//           // let newNode = document.createElement(<DropdownItem />);
//           // foundParentObjectDiv.parentNode.insertBefore(newNode, foundParentObjectDiv.nextSibling)
//         }
//       })
//     }
//   )

//   return (
//     <div className="test-container">
//         <h1>Task 1</h1>
//         <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
//         <button>Begin</button>
//         <hr></hr>
//         {
//           // Map over all JSON category objects and create dropdown things based on two groups - 1. DropdownContainers and 2. Dropdown Items
//           categoryList.map(category => {
//             // if type1 and not a child of anything
//             if(category.type === 1 && category.childOf === null) {
//               return (<DropdownContainer key={category.id} name={category.name} id={`ddc-${category.id}`}/>)
//             }
//             // if type 2 and not a child of anything
//             else if(category.type === 2 && category.childOf === null) {
//               return (<DropdownItem key={category.id} name={category.name}/>)
//             }
//             // if its a childOf (no matter what type)
//             else if(category.childOf !== null) {
//               console.log("subcat", category.childOf);
              
//               let foundParentObject = categoryList.find(cat => cat.id === category.childOf);
//               let foundParentObjectDiv = document.getElementById('ddc-1');
//             }
//           })
//         }
//     </div>
//   );
// };

// export default Test1;