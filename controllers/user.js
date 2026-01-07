const user = require("../models/user");
const User = require("../models/UserAuth");
const express = require("express");

const getAllDbUser = async (req, res) => {
  try {
    const allDBUsers = await user.find({}); //this give you the promise
    return res.status(200).json(allDBUsers);
  } catch (error) {
    console.log("error:", error);
    return res.status(500).json({ error: "error" });
  }
};

const updateUser = async (req, res) => {
  await user.findByIdAndUpdate(req.params.id, { last_name: "kumar" });
  return res.status(201).json({ status: "success" });
};

const deleteUser = async (req, res) => {
  //   delete the existing data
  await user.findByIdAndDelete(req.params.id);
  return res.json({ status: "deleted" });
};

const createUser = async (req, res) => {
  if (
    !req.body.first_name ||
    !req.body.last_name ||
    !req.body.email ||
    !req.body.gender
  ) {
    return res.status(400).json({ msg: "All data is required ..." });
  }

  const result = await user.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    gender: req.body.gender,
  });

  console.log(result);

  return res.status(201).json({ msg: "success" });
};

const getDashboardInfo = async (req, res) => {
  return res.status(200).json({
    msg: "welcome to the dashboard",
  });
};

module.exports = {
  getAllDbUser,
  updateUser,
  deleteUser,
  createUser,
  getDashboardInfo,
};
