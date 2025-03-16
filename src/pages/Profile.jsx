import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  function Logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <div>
        <h2>Name : {user.fullname}</h2>
        <h2>email : {user.email}</h2>
      </div>

      <Button onClick={Logout} type="default">
        Log out
      </Button>
    </div>
  );
};

export default Profile;
