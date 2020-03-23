import React from "react";

class SideNav extends React.Component {
  renderItem(i = null) {
    var children = [];

    for (let j = 0; j < this.props.items.length; j++) {
      if (this.props.items[i].navId === this.props.items[j].childOf) {
        children.push(j);
      }
    }

    var childrenMarkup = [];

    for (let j = 0; j < children.length; j++) {
      childrenMarkup.push(this.renderItem(children[j]));
    }

    document.addEventListener("click", function(e) {
      if (e.target.closest("dd-container-link")) {
        e.preventDefault();
        return;
      }
    });

    return (
      <div className="dd-inner-container" key={this.props.items[i].navId}>
        <a
          className="dd-container-link"
          href={i}
          onClick={event => {
            this.reveal(event);
          }}
        >
          <div className="dd-container-title">{this.props.items[i].name}</div>
          {children.length > 0 && (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="arrow"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
            </svg>
          )}
        </a>
        {children.length > 0 && (
          <div className="dd-container-child hide" id={i}>
            {childrenMarkup}
          </div>
        )}
      </div>
    );
  }

  render() {
    var nav = [];

    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].childOf === 0) {
        var item = this.renderItem(i);
        nav.push(item);
      }
    }

    return <section className="dd-container">{nav}</section>;
  }

  reveal(e) {
    e.preventDefault();

    var child = e.target
      .closest(".dd-inner-container")
      .querySelector(".dd-container-child");

    if (child) {
      switch (child.classList.contains("hide")) {
        case true:
          child.classList.remove("hide");
          break;

        default:
          child.classList.add("hide");
          break;
      }
    }
  }
}

export default SideNav;
