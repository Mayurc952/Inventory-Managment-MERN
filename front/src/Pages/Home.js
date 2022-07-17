import React from "react";
import baground from "../imgpro/intvph.PNG";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${baground})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          backgroundAttachment: "scroll",
        }}
      >
        <br />
        <div>
          <h1 style={{ color: "white", marginTop: "20%", marginLeft: "2%" }}>
            Welcome entrepreneur!
          </h1>
          <p style={{ color: "white", marginLeft: "2%" }}>
            We are Providing Best In Material For you..
            <br />
            Explore Our Quality Items Now, Order Your First Product.
          </p>
          <div>
            <button
              className="or"
              onClick={() => {
                navigate("/Product");
              }}
              style={{ marginLeft: "2%", color: "blue" }}
            >
              Order Now!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
