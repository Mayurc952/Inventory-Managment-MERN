import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";

const AddUser = () => {
  let history = useNavigate();
  const [inp, setInp] = useState({
    name: "",
    material: "",
    email: "",
    phone: "",
    website: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setInp((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();
    const { name, material, email, phone, website } = inp;

    const res = await fetch("http://localhost:5000/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        material,
        email,
        phone,
        website,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      alert("error");
      console.log("error");
    } else {
      alert("data added");
      history("/supplier");
      console.log("data added");
    }
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 my-5">
        <h5 className=" mb-4">Add a Supplier</h5>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              name="name"
              placeholder="Company Name"
              value={inp.name}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company material"
              name="material"
              value={inp.material}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company E-mail"
              name="email"
              value={inp.email}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Contact no."
              name="phone"
              value={inp.phone}
              onChange={setData}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Website"
              name="website"
              value={inp.website}
              onChange={setData}
            />
          </div>
          <button
            type="submit"
            onClick={addinpdata}
            style={{ width: 300 }}
            className="btn btn-primary btn-sm btn-block my-3"
          >
            Add supplier
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
