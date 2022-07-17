import './Login.css';
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/reduxs";

export default function Signup() {
   const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/signup", {
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send http request
    sendRequest().then(() => history("/login"));
  };

  return (
    <div>
      <section className="login">
        <div className="login_box">
          <div className="left">
           
            <div className="contact">
              <form onSubmit={handleSubmit}>
                <h3 style={{fontFamily:"serif",color:"aqua"}}>SIGN UP</h3>
                <input type="text"
                name="name"
                onChange={handleChange}
                value={inputs.name}
                 placeholder="Enter Your Name" />

                <input type="email"
                name="email"
                onChange={handleChange}
                value={inputs.email}
                 placeholder="Enter Your Email" />
       

                <input  type="password"
                name="password"
                onChange={handleChange}
                value={inputs.password}
                 placeholder="Enter Your Password" />
               

                <button className="submit">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="right-text"  style={{fontFamily:"serif" }}>
             
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
}
