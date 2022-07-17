import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h3 style={{color: "black", marginTop:"5%",alignContent:"center"}}>
        <strong>About Us</strong>
      </h3>
      <div className="main">
        <div className="image"></div>
        <div>
          <p>
          Launched in 2003, PRISHA is unique in its community-based approach to search marketing demand. Virtually all of our contributed products come from real online marketing experts, both independent and in-house. PRISHA is owned by Alpha Brand Products.
          We are tried to make a simple inventory application,
            <br />
            If you have any issue please feel free to contact us.
            <br />
          </p>

          <p>
            <strong>
              We are delivering wide range of electrical products,
              <br />
              we can do enquiry or any other information <br />
              you can direct contact to our conatct person.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
