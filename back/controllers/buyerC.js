const express = require("express");
const buyers = require("../model/BuyerM");
const product = require('../model/producM')

const addbuyer = async (req, res) => {
  const { name, email, products, address, contact } = req.body;

  if (!name || !email || !products || !address || !contact) {
    res.status(400).json(`plz fill the data`);
  }

  try {
    const correctUser = await product.findOne({product_type:products});
    if (correctUser) {
      const addUser = new buyers({
        name,
        email,
        products,
        address,
        contact,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    } else {
      res.status(400).json(`Product not Found!`);
    }
  } catch (err) {
    console.log(err);
  }
};

const getBuyer = async (req, res) => {
  try {
    const userData = await buyers.find();
    res.status(201).json(userData);
    // console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

const removeBuyer = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await buyers.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log("error");
  }
};

exports.addbuyer = addbuyer;
exports.getBuyer = getBuyer;
exports.removeBuyer = removeBuyer;
