import React from "react";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";

const BuyersDetail = () => {
  const [userData, setUserdata] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api/getbuyer", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      // console.log("data recieved");
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div className="container">
      <div className="w-75 mx-auto  p-5 my-15">
        <h5 className=" mb-4">
          <button
            disabled="true"
            type="button"
            className="btn btn-primary btn-sm my-15"
          >
            List Of Buyers
          </button>
        </h5>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Index</th>
              <th scope="col">Company Name</th>
              <th scope="col">Email</th>
              <th scope="col">Product Name</th>
              <th scope="col">Address</th>
              <th scope="col">Phone No.</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((element, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index + 1}</th>

                    <td>{element.name}</td>
                    <td>{element.email}</td>
                    <td>{element.products}</td>
                    <td>{element.address}</td>
                    <td>{element.contact}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyersDetail;
