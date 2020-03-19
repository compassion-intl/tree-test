import React, { Component } from "react";
import DropdownContainer from "../dropdown/DropdownContainer2";

export default class NavContainer extends Component {
  render() {
    const navItems = [];
    let level = 0;
    let categories = this.props.categories;

    // Go through and find parent nodes with no children. Then, loop through those and find children. Then, loop through those and find children. Then, etc.

    for (let i = 0; i < categories.length; i++) {
      level = 1;
      // Check if object has children. If not, it is a top-level parent node.
      if (!categories[i].childOf) {
        let x = i + 1;
        navItems.push(
          <section
            className="dd-container"
            id={`ddc-${categories[i].id}`}
            key={categories[i].id}
            level={level}
          >
            <DropdownContainer
              key={`Parent-${categories[i].id}`}
              id={categories[i].id}
              name={categories[i].name}
              type={categories[i].type}
              childOf={categories[i].childOf}
              level={level}
            />
            {/* Check through all of the categories again, checking if object.childOf === current parent */}
            {categories.map((category, j) => {
              let newLevel = 2;
              if (category.childOf === x) {
                return (
                  <React.Fragment key={j++}>
                    <DropdownContainer
                      key={j}
                      id={category.id}
                      name={category.name}
                      type={category.type}
                      childOf={category.childOf}
                      level={newLevel}
                    />
                  </React.Fragment>
                );
              }
            })}
          </section>
        );
      } else {
      }
    }
    return <React.Fragment>{navItems}</React.Fragment>;
  }
}
