const express = require("express");
const conatct = require("../model/Contact");

const contact = async (req, res, next) => {
  const { name, email, message } = req.body;

  const user = new conatct({
    name,
    email,
    message,
  });

  try {
    await user.save();
    console.log(user)
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ message: user });
};

exports.contact = contact;
