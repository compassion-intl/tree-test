import React, { Component } from "react";
import DropdownContainer from "../dropdown/DropdownContainer2";

export default class NavContainer extends Component {
  render() {
    const navItems = [];
    let level = 1;
    let categories = this.props.categories;

    for (var i = 0; i < categories.length; i++) {
      if (categories[i].childOf === null) {
        let x = i + 1;
        navItems.push(
          <section
            className="dd-container"
            id={`ddc-${categories[i].id}`}
            key={categories[i].id}
            level={level}
          >
            <DropdownContainer
              key={categories[i].id * 46}
              id={categories[i].id}
              name={categories[i].name}
              type={categories[i].type}
              childOf={categories[i].childOf}
            />
            {categories.map((category, j) => {
              let randNum = j;
              if (category.childOf === x) {
                return (
                  <React.Fragment key={randNum++}>
                    <DropdownContainer
                      key={j}
                      id={category.id}
                      name={category.name}
                      type={category.type}
                      childOf={category.childOf}
                    />
                  </React.Fragment>
                );
              }
            })}
          </section>
        );
      }
    }
    return <React.Fragment>{navItems}</React.Fragment>;
  }
}
