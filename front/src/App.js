import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Sider from "./Layout/Sider";
import { Supplier } from "./component/supplier/Main";
import AddUser from "./component/supplier/AddUser";
import EditUser from "./component/supplier/EditUser";
import Footer from "./Layout/Footer";
import { Product } from "./component/Product";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import BuyersDetail from "./component/BuyersDetail";
import About from "./Pages/About";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <>
      <div className="project_container">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <div className="sider">{isLoggedIn && <Sider />}</div>
          <div className="detail">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Landing />} />
              {isLoggedIn && <Route path="user" element={<Home />} />}{" "}
              {isLoggedIn && <Route path="/Supplier" element={<Supplier />} />}{" "}
              {isLoggedIn && (
                <Route path="/Supplier/add" element={<AddUser />} />
              )}{" "}
              {isLoggedIn && (
                <Route path="/Supplier/edit/:id" element={<EditUser />} />
              )}{" "}
              {isLoggedIn && <Route path="/Product" element={<Product />} />}
              {isLoggedIn && <Route path="/order" element={<Order />} />}
              {isLoggedIn && <Route path="/buyer" element={<BuyersDetail />} />}
              {isLoggedIn && <Route path="/contact" element={<Contact />} />}
              {isLoggedIn && <Route path="/about" element={<About />} />}
              <Route path="/logout" element={<Landing/>} />
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
