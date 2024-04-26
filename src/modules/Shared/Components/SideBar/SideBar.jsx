import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import toggler from "../../../../assets/images/3.png";

export default function SideBar() {
  const [IsCollapsed, setIsCollapsed] = useState(true);
  const toggelCollapse = () => {
    setIsCollapsed(!IsCollapsed);
  };

  return (
    <>
      <div className="sidebar-container">
        <Sidebar collapsed={IsCollapsed}>
          <Menu>
            <MenuItem
              onClick={toggelCollapse}
              icon={<img src={toggler} alt="toggler icon" />}
            >
              {" "}
            </MenuItem>

            <MenuItem
              icon={<i className="fa fa-home" aria-hidden="true"></i>}
              component={<Link to="/dashboard" />}
            >
              {" "}
              Home
            </MenuItem>
            <MenuItem
              icon={<i className="fa fa-home" aria-hidden="true"></i>}
              component={<Link to="/dashboard/users" />}
            >
              {" "}
              Users
            </MenuItem>
            <MenuItem
              icon={<i className="fa fa-home" aria-hidden="true"></i>}
              component={<Link to="/dashboard/recipes" />}
            >
              {" "}
              Recipes
            </MenuItem>
            <MenuItem
              icon={<i className="fa fa-home" aria-hidden="true"></i>}
              component={<Link to="/dashboard/categories" />}
            >
              {" "}
              Categories
            </MenuItem>
            <MenuItem> Change password</MenuItem>
            <MenuItem> Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
