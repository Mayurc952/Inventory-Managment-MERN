import React from "react";
import "antd/dist/antd.css";
import { PageHeader, Button } from "antd";
import { RedditOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import ButtonGroup from "antd/lib/button/button-group";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { authActions } from "../store/reduxs";
axios.defaults.withCredentials = true;
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  
  const sendLogoutReq = async () => {
    const res = await axios.post("http://localhost:5000/api/logout", null, {
      withCredentials: true,
    });
    if (res.status === 200) {
      return res;
    }
    return new Error("Unable TO Logout. Please try again");
  };
  const handleLogout = () => {
    sendLogoutReq().then(() => dispatch(authActions.logout()));
  };

  const [value, setValue] = useState();

  return (
    <div>
      <div
        className="site-page-header-ghost-wrapper" 
      >
        <PageHeader
          icon={<RedditOutlined />}
          title="PRISHA "
          subTitle="Electrical/Electronics Appliances Manufacturer"
          extra={[
            <ButtonGroup onChange={(e, val) => setValue(val)} value={value}>
              {!isLoggedIn && (
                <div>
                  <NavLink to="/Login">
                    <Button>Login</Button>
                  </NavLink>

                  <NavLink to="/Signup">
                    {" "}
                    <Button type="primary">Signup </Button>
                  </NavLink>
                </div>
              )}
              {isLoggedIn && (
                <NavLink to="/Logout">
                  {" "}
                  <Button type="primary" onClick={handleLogout}>
                    Logout{" "}
                  </Button>
                </NavLink>
              )}
            </ButtonGroup>,
          ]}
         
        ></PageHeader>
      </div>
    </div>
  );
};
// }
export default Header;
