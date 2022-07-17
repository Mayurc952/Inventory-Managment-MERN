const products = require("../model/producM");
const express = require("express");

const addproduct = async (req, res) => {
  const { name, product_type, price, quantity } = req.body;

  if (!name || !product_type || !price || !quantity) {
    res.status(400).json(`plz fill the data`);
  }

  try {
    const preuser = await products;
    console.log(preuser);

    if (preuser) {
      const addUser = new products({
        name,
        product_type,
        price,
        quantity,
      });
      await addUser.save();
      res.status(200).json(addUser);
      //   console.log(addUser);
    }
  } catch (err) {
    console.log(err);
  }
};

const getproduct = async (req, res) => {
  try {
    const userData = await products.find();
    res.status(200).json(userData);
    // console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

const removeproduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await products.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log("error");
  }
};

exports.addproduct = addproduct;
exports.getproduct = getproduct;
exports.removeproduct = removeproduct;


