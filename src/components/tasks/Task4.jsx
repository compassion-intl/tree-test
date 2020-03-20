import React, { useEffect, useState } from "react";
import NavItems from "../../data/info2";
import SideNav from "../sidenav/SideNav";
import "../sidenav/SideNav.css";
import API from "../db/API";

const Task4 = () => {
  const [hasError, setErrors] = useState(false);
  const [navItems, setNavItems] = useState({});

  useEffect(() => {
    API.getNavItems()
      .then(e => {
        setNavItems(e);
      })
      .catch(err => setErrors(err));
  });
  return <SideNav items={navItems} />;
};

export default Task4;
