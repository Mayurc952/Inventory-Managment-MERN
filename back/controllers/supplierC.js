const express = require("express");
const supplier = require("../model/supplierM");

const add = async (req, res) => {
  const { name, material, email, phone, website } = req.body;

  if (!name || !material || !email || !phone || !website) {
    res.status(400).json(`plz fill the data`);
  }

  try {
    const perUser = await supplier.findOne({ email: email });
    console.log(perUser);

    if (perUser) {
      res.status(400).json(`this email is alrady present!`);
    } else {
      const addUser = new supplier({
        name,
        material,
        email,
        phone,
        website,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (err) {
    console.log(err);
  }
};

const getData = async (req, res) => {
  try {
    const userData = await supplier.find();
    res.status(201).json(userData);
    // console.log(userData);
  } catch (error) {
    console.log(error);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const updateUser = await supplier.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    console.log(updateUser);
    res.status(201).json(updateUser);
  } catch (err) {
    res.status(422).json(err);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteuser = await supplier.findByIdAndDelete({ _id: id });

    console.log(deleteuser);
    res.status(201).json(deleteuser);
  } catch (err) {
    console.log("error");
  }
};

exports.add = add;
exports.remove = remove;
exports.getData = getData;
exports.edit = edit;
