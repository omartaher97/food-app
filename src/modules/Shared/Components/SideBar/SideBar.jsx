import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import toggler from "../../../../assets/images/3.png";

export default function SideBar() {
  const [IsCollapsed, setIsCollapsed] = useState(true);
  const toggelCollapse = () => {
    setIsCollapsed(!IsCollapsed);
  };

 let navigate=useNavigate();

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
              icon={<i class="fa-solid fa-user"></i>}
              component={<Link to="/dashboard/users" />}
            >
              {" "}
              Users
            </MenuItem>
            <MenuItem
              icon={<i class="fa-solid fa-receipt"></i>}
              component={<Link to="/dashboard/recipes" />}
            >
              {" "}
              Recipes
            </MenuItem>
            <MenuItem
              icon={<i class="fa fa-list-alt" aria-hidden="true"></i>}
              component={<Link to="/dashboard/categories" />}
            >
              {" "}
              Categories
            </MenuItem>
              

            <MenuItem
             icon={<i class="fa fa-key" aria-hidden="true"></i>}
             component={<Link to="/changepass" />}
            > Change password</MenuItem>


            <MenuItem
             icon={<i class="fa fa-sign-out" aria-hidden="true"></i>}
             component={<Link to="/login" />}
            > Logout</MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
