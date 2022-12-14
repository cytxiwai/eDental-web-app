import React, { useState } from "react";
import "../layout.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "antd";
function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: "Home",
      path: "/loginHome",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-copy-2-line",
    },
    {
      name: "Apply Dentist Account",
      path: "/apply-doctor",
      icon: "ri-hospital-line",
    }
  ];
  const guestMenu = [
    {
      name: "Guest Home",
      path: "/",
      icon: "ri-home-4-line",
    },
    {
      name: "Register/Login",
      path: "/login",
      icon: "ri-key-2-line ",
    }
  ];
  const doctorMenu = [
    {
      name: "Home",
      path: "/loginHome",
      icon: "ri-home-4-line",
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "ri-file-copy-2-line",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "ri-user-line",
    },
  ];
  const adminMenu = [
    {
      name: "Home",
      path: "/loginHome",
      icon: "ri-home-line",
    },
    {
      name: "Users",
      path: "/admin/userslist",
      icon: "ri-user-line",
    },
    {
      name: "Dentists",
      path: "/admin/doctorslist",
      icon: "ri-user-star-line",
    },
    {
      name: "Profile",
      path: "/profile",
      icon: "ri-user-line",
    },
  ];

  const menuToBeRendered = user?.isAdmin ? adminMenu : user?.isDoctor ? doctorMenu : user?._id ? userMenu : guestMenu;
  const role = user?.isAdmin ? "Admin" : user?.isDoctor ? "Doctor" : user?._id ? "User" : "Guest";
  return (
    <div className="main">
      <div className="d-flex layout">
        <div className="sidebar">
          <div className="sidebar-header">

            {/*<h1 className="logo">eDental</h1>*/}
            <img className="logo-img logo" src={require("../image/FVLogo.png")} width={100} alt="logo" />
            <h1 className="role">{role}</h1>
          </div>

          <div className="menu">
            {menuToBeRendered.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${isActive && "active-menu-item"
                    }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate("/login");
              }}
            >
              <i className="ri-logout-circle-line"></i>
              {!collapsed && <Link to="/login">Logout</Link>}
            </div>
          </div>
        </div>

        <div className="content">
          <div className="header d-flex">
            {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            <div className="d-flex align-items-center px-4">eDental</div>
            <div className="d-flex align-items-center px-4">
            <button className="primary-button me-2 my-2 full-width-button"
                   onClick={() => navigate("/search")}
            >Search Dentist</button>

              <Badge
                count={user?.unseenNotifications.length}
                onClick={() => navigate("/notifications")}
              >
                <i className="ri-notification-line header-action-icon px-3"></i>
              </Badge>

              <Link className="anchor mx-2" to="/profile">
                {user?.name}
              </Link>

            </div>
          </div>

          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
