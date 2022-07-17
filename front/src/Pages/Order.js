import React, { useState } from "react";

const AddUser = () => {
  const [msg, setMsg] = useState("");
  const [inp, setInp] = useState({
    name: "",
    email: "",
    products: "",
    address: "",
    contact: "",
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
    const { name, email, products, address, contact } = inp;

    const res = await fetch("http://localhost:5000/api/addbuyer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        products,
        address,
        contact,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      alert("Product not found");
      console.log("error");
    } else {
      alert("Order Placed Successfully!");
      console.log("data added");
    }

    if (res) {
      const res2 = await fetch("http://localhost:5000/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          products,
        }),
      });
      // .then(res2 => setMsg(res2.data.respMesg));
      const data2 = await res2.json();
      console.log(data2);
    } else {
      console.error("email verification failed!");
    }
  };

  return (
    <div className="container">
      <div className="w-50 mx-auto  p-5 my-12">
        <h4 className="my-10">Please Confirm Your Details Agian!</h4>
        <p>Make Sure To Mentioned Product Type Correct</p>
        <form>
          <div className="form-group" my-15>
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-1"
              style={{ width: 300 }}
              name="name"
              placeholder="Company Name"
              value={inp.name}
              onChange={setData}
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-sm btn-sm my-1"
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
              className="form-control form-control-sm btn-sm my-1"
              style={{ width: 300 }}
              placeholder="Product Type"
              name="products"
              value={inp.products}
              onChange={setData}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-sm btn-sm my-1"
              style={{ width: 300 }}
              placeholder="Detail Address"
              name="address"
              value={inp.address}
              onChange={setData}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-sm btn-sm my-1"
              style={{ width: 300 }}
              placeholder="Phone No."
              name="contact"
              value={inp.contact}
              onChange={setData}
            />
          </div>

          <button
            type="submit"
            onClick={addinpdata}
            style={{ width: 300 }}
            className="btn btn-primary btn-sm btn-block my-14 mt-13"
          >
            Place Your Order
          </button>
          <h5 className="my-5">
            <h6>
              <strong>Kindley Check Your Mail For Details!</strong>
            </h6>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
