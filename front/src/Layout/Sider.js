import React from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  LogoutOutlined,
  ContainerOutlined,
  MailOutlined,
  HomeOutlined,
  CreditCardTwoTone,
  TeamOutlined,
  CreditCardOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";


class Sider extends React.Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Button
            type="primary"
            style={{ marginBottom: 15, textAlign: "center" }}
          ></Button>

          <Menu.Item key="1" icon={<HomeOutlined />}>
            <NavLink to="/user">Home </NavLink>
          </Menu.Item>

          <Menu.Item key="2" icon={<ContainerOutlined />}>
            <NavLink to="/Supplier">Supplier </NavLink>
          </Menu.Item>

          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            <NavLink to="/Product">Product List </NavLink>
          </Menu.Item>

          <Menu.Item key="4" icon={<TeamOutlined/>}>
            <NavLink to="/buyer">Customers List</NavLink>
          </Menu.Item>

          <Menu.Item key="5" icon={<CreditCardOutlined />}>
            <NavLink to="/order">Order Page </NavLink>
          </Menu.Item>

          <Menu.Item key="6" icon={<MailOutlined />}>
            <NavLink to="/contact">Contact Us </NavLink>
          </Menu.Item>

          <Menu.Item key="7" icon={<ContactsOutlined/>}>
            <NavLink to="/about">About Us </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sider;
