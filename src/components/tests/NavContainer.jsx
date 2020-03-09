import React, {Component} from 'react';
import DropdownContainer from "../dropdown/DropdownContainer";

export default class NavContainer extends Component {

    hasChildren(category) {
        return category.children;
    }

    render(){

        const level = this.props.level || 0;

        return <>
        {
            this.props.categories.map((category, i) => {
                return <div className="dd-container" id={`ddc-${category.id}`} key={category.id}>
                    <DropdownContainer {...category} key={this.props.id}/>
                    {
                        this.hasChildren(category) && <NavContainer categories={category.children} key={this.props.id}/>
                    }
                </div>
            })
        }
        </>
    }
}