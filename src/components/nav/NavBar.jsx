import React, { useState, useEffect } from "react";
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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  let userEmail = sessionStorage.getItem("Email");

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md" id="main-nav">
        <NavbarBrand href="/">Usability Testing</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
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
          {/* <NavbarText>
            {`Location: ${
              window.location.pathname.split("/")[1] !== ""
                ? window.location.pathname.split("/")[1]
                : "Home"
            }`}
          </NavbarText> */}
          <NavbarText style={{ paddingLeft: "30px" }}>
            {userEmail !== "" && userEmail !== null ? (
              <>
                <p>
                  {userEmail}
                  <span
                    onClick={() => {
                      sessionStorage.removeItem("Name");
                      sessionStorage.removeItem("Email");
                    }}
                  >
                    <a href="/" style={{ color: "blue", paddingLeft: "20px" }}>
                      Logout
                    </a>
                  </span>
                </p>
              </>
            ) : (
              <a href="/" style={{ color: "blue" }}>
                Login
              </a>
            )}
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
