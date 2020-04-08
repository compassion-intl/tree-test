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
  NavbarText,
} from "reactstrap";
import { MdPerson, MdAssignment, MdBuild } from "react-icons/md";
import { AiOutlineBranches } from "react-icons/ai";
import "./nav.css";
import { logout, getUserFromSessionStorage } from "../login/LoginHandler";

class NavBar extends Component {
  state = {
    isOpen: false,
    userInfo: [],
    // userId: JSON.parse(window.sessionStorage.getItem("user")).email
  };

  checkIfAdmin = () => {
    if (this.state.userInfo !== [] && this.state.userInfo !== null) {
      if (this.state.userInfo.role === "Admin") {
        return (
          <NavLink className="nav-link" href="/admin">
            Admin
          </NavLink>
        );
      }
    }
  };

  componentDidMount = () => {
    this.setState({ userInfo: getUserFromSessionStorage() });
  };

  toggle = () => this.setState({ isOpen: !this.state.isOpen });
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" id="main-nav">
          <NavbarBrand
            href="/"
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: ".95rem",
              fontWeight: "600",
            }}
          >
            <AiOutlineBranches style={{ marginRight: "5px" }} />
            Tree Testing
          </NavbarBrand>
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
            </Nav>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Section 2 Tasks
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-6">
                      Task 6
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-7">
                      Task 7
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-8">
                      Task 8
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-9">
                      Task 9
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className="nav-link" href="/task-10">
                      Task 10
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>{this.checkIfAdmin()}</NavItem>
            </Nav>
            <NavbarText style={{ paddingLeft: "30px", fontSize: ".7rem" }}>
              {this.state.userId !== null ? (
                <>
                  {this.state.userInfo !== null &&
                  this.state.userInfo !== {} ? (
                    <p>
                      <MdPerson
                        style={{ marginRight: "10px", color: "#b3b3b3" }}
                      />
                      {this.state.userInfo.email}
                      <span
                        onClick={() => {
                          sessionStorage.removeItem("Name");
                          sessionStorage.removeItem("Email");
                        }}
                      >
                        <a
                          href="/"
                          style={{ paddingLeft: "20px" }}
                          onClick={logout}
                        >
                          Logout
                        </a>
                      </span>
                    </p>
                  ) : (
                    <></>
                  )}
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
