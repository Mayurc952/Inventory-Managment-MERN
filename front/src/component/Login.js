import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../store/reduxs";

export default function Login() {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [inputs, setInputs] = useState({
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
      .post("http://localhost:5000/api/login", {
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
    sendRequest()
      .then(() => dispatch(authActions.login()))
      .then(() => history("/user"));
  };

  return (
    <div>
      <section className="login">
        <div className="login_box">
          <div className="left">
          
            <div className="contact">
              <form onSubmit={handleSubmit}>
                <h3>SIGN IN</h3>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={inputs.email}
                  placeholder="USERNAME"
                />

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                  placeholder="PASSWORD"
                />

                <button className="submit">SUBMIT</button>
              </form>
            </div>
          </div>
          <div className="right">
            <div className="right-text" style={{color:"aqua"}}>
           
            </div>
            
          </div> 
        </div>
      </section>
    </div>
  );
}
