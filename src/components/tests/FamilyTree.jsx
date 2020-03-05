import React, {Component} from 'react';
import DropdownContainer from "../dropdown/DropdownContainer";

export default class FamilyTree extends Component {

    hasChildren(member) {
        return member.children;
    }

    render(){

        const level = this.props.level || 0;

        return <>
        {
            this.props.members.map((member, i) => {
                return <div className="dd-container" id={member.id}>
                    <DropdownContainer {...member} key={this.props.id}/>
                    {
                        this.hasChildren(member) && <FamilyTree members={member.children} key={this.props.id}/>
                    }
                </div>
            })
        }
        </>
    }
}