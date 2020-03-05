import React, {Component} from "react";
import DropdownContainer from "../dropdown/DropdownContainer";
import DropdownItem from "../dropdown/DropdownItem";

let info = require('../../data/info2.json');
let categoryList = info.data;

export default class Test1 extends Component {


    render() {
        return (
            // <div className="test-container">             
            //     {
            //         children.map(cat => {
            //                 <div key={cat.id} className="dd-container" id={cat.id} name={cat.name}>
            //                     {
            //                         cat.children && <Test1 children={cat.children} />
            //                     }
            //                 </div>
            
            //         })
            //     }
            // </div>
            <DropdownItem children={categoryList[0].children} />
        );
    }
};

