const express = require("express");
const nodemailer = require('nodemailer');


const email = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "electrprisha55@gmail.com",
      pass: "hpyhvlsyoduiouqa",
    },
  });

  var mailOptions = {
    from: "electrprisha55@gmail.com", // sender address
    to:`${req.body.email}`, // list of receivers
    name:`${req.body.name}`, // Subject line
    products: `${req.body.products}`,
    html: `
        <div>
        <strong>Your Order Has Placed Sucessfully!</strong>
        <h3>Order Details</h3>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>name: ${req.body.name}</li>
            <li>products: ${req.body.products}</li>
        </ul>
        <h4>Our Team Will Reach To You For Further Proccess! Thank You...</h4>
        `
  };

 
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

exports.email = email;
