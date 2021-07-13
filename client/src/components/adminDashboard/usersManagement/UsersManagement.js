import React from "react";
import "../main/Main.css";
import { useSelector } from "react-redux";

const UsersManagement = () => {
  const { auth } = useSelector((state) => state);
  return (
    <div className="main_admin">
      <div className="main__container">
        <div className="main__title">
          <div className="main__greeting">
            <h1>Hello {auth.user.username}</h1>
            <p>Welcome to your Admin Dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
