import React from "react";
import "antd/dist/antd.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  const [userData, setUserdata] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:5000/api/getproduct", {
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
      <div className="w-75 mx-auto p-5 my-2">
        <h5 className=" mb-4">
          {" "}
            <button type="button" disabled='true' className="btn btn-success btn-sm">
            Products Stocks
            </button>
        </h5>
        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th scope="col">Index</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Type</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           
            {userData.map((element, index) => {
              return(
                <>
              <tr>
                 <th scope="row">{index + 1}</th> 

                <td>{element.name}</td>
                <td>{element.product_type}</td>
                <td>{element.price}</td>
                <td>{element.quantity}</td>
                <td>
   

                  <Link
                    className="btn btn-success m-2 btn-sm"
                    to={`/order`}
                  >
                    Buy Stock
                  </Link>
                 
                </td>
              </tr>
              </>
              )
              })}  
          </tbody>
        </table>
      </div>
      <h6 style={{display:'flex',justifyContent:'center',alignContent:'end'}}><strong>Note:-You Have To Order Product Stockwise</strong></h6>
    </div>
  );
};

