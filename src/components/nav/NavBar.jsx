import React, { useState, useEffect, Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "./nav.css";
import {
  logout,
  getUserFromLocalStorage,
  getUser
} from "../login/LoginHandler";

class NavBar extends Component {
  state = {
    isOpen: false,
    userInfo: [],
    userId: JSON.parse(window.localStorage.getItem("user")).email
  };

  componentDidMount = () => {
    this.setState({ userInfo: getUserFromLocalStorage() });
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" id="main-nav">
          <NavbarBrand href="/">Usability Testing</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Section 1 Tasks
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-1">
                      Task 1
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-2">
                      Task 2
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-3">
                      Task 3
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-4">
                      Task 4
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-5">
                      Task 5
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink className="nav-link" href="/admin">
                  Admin
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText style={{ paddingLeft: "30px" }}>
              {this.state.userId !== null ? (
                <>
                  <p>
                    {this.state.userId}
                    <span
                      onClick={() => {
                        sessionStorage.removeItem("Name");
                        sessionStorage.removeItem("Email");
                      }}
                    >
                      <a
                        href="/"
                        style={{ color: "blue", paddingLeft: "20px" }}
                        onClick={logout}
                      >
                        Logout
                      </a>
                    </span>
                  </p>
                </>
              ) : (
                <></>
              )}
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
