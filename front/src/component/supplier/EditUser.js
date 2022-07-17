import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
 
  const [inp, setInp] = useState({
    name: "",
    material: "",
    email: "",
    phone: "",
    website: "",
  });

  const setData = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setInp((preVal) => {
      return {
        ...preVal, 
        [name]: value,
      };
    });
  };
  const { id } = useParams("");
  console.log(id);

  const getuser = async () => {
    const res = await fetch(`http://localhost:5000/api/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    // console.log(data);

    if (res.status === 400 || !data) {
      console.log("error");
    } else {
      setInp(data);
      console.log("data recieved");
    }

  };
  
  useEffect(() => {
    getuser();
  },[]);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, material, email, phone, website } = inp;

    const res2 = await fetch(`http://localhost:5000/api/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        material,
        email,
        phone,
        website ,
      }),
    });
    const data2 = await res2.json();
    // console.log(data2);

    if (res2.status === 400 || !data2) {
      alert(`please fill the data`);
    } else {
      setInp(data2);
      history('/supplier')
      alert(`data upadated`);
    }
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 my-5">
        <h5 className=" mb-4">Edit Supplier Information</h5>
        <form >
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-2"
              style={{ width: 300 }}
              placeholder="Company Name"
              name="name"
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
              type="number"
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
          <button  type="submit" style={{ width: 300 }}
            onClick={updateuser} className="btn btn-warning btn-sm btn-block my-3">Update Supplier</button>
        </form>
      </div>
    </div>
  );
};



export default EditUser;
