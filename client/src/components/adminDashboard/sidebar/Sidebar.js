import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/authAction";
import "./Sidebar.css";
import React, { useState } from "react";
import Main from "../main/Main";
import AdminManagement from "../adminManagement/AdminManagement";
import Spam from "../spamManagement/Spam";
import UsersManagement from "../usersManagement/UsersManagement";


const Sidebar = () => {
  const dispatch = useDispatch();
    const [adminMenu, setAdminMenu] = useState(1);


  return (
    <>
      {adminMenu === 1 && <Main />}
      {adminMenu === 2 && <AdminManagement />}
      {adminMenu === 3 && <Spam />}
      {adminMenu === 4 && <UsersManagement />}

      <div className="sidebar_responsive" id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>Campus Connect</h1>
          </div>
          <i className="fa fa-times" id="sidebarIcon" aria-hidden="true"></i>
        </div>

        <div className="sidebar__menu">
          <div
            className={`sidebar__link ${adminMenu === 1 && "active_menu_link"}`}
            onClick={() => setAdminMenu(1)}
          >
            <i className="fa fa-th"></i>
            <a href="#">Dashboard</a>
          </div>
          <h2>ADMIN CONTROL</h2>
          <div
            className={`sidebar__link ${adminMenu === 2 && "active_menu_link"}`}
            onClick={() => setAdminMenu(2)}
          >
            <i className="fa fa-lock" aria-hidden="true"></i>
            <a href="#">Admin Management</a>
          </div>
          <div
            className={`sidebar__link ${adminMenu === 3 && "active_menu_link"}`}
            onClick={() => setAdminMenu(3)}
          >
            <i className="fa fa-ban"></i>
            <a href="#">Spams Management</a>
          </div>
          <div
            className={`sidebar__link ${adminMenu === 4 && "active_menu_link"}`}
            onClick={() => setAdminMenu(4)}
          >
            <i className="fa fa-wrench"></i>
            <a href="#">Users Management</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-archive"></i>
            <a href="#">xyz</a>
          </div>
          <div className="sidebar__link">
            <i className="fa fa-handshake-o"></i>
            <a href="#">xyz</a>
          </div>

          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <Link to="/" onClick={() => dispatch(logout())}>
              Log out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
