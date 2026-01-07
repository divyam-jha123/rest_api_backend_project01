const User = require("../models/UserAuth");
const bcrypt = require("bcrypt");
const { setUser } = require("../service/auth");

const handleuserSignup = async (req, res) => {
  const { userName, Email, password } = req.body;

  try {
    // need to hash the password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      userName: userName,
      Email: Email,
      password: hashedPassword,
    });

    return res.status(200).json({
      msg: "signed up successfuly",
      user: { user },
    });
  } catch {
    return res.status(400).json({
      error: "something breaks",
    });
  }
};

const handleuserLogin = async (req, res) => {
  try {
    const { Email, password } = req.body;

    const user = await User.findOne({
      Email: Email,
    });

    if (!user) {
      return res.status(404).json({
        msg: "user not found, signup",
      });
    }

    const userInfo = await User.findOne({
      Email: Email,
    });

    if (await bcrypt.compare(password, userInfo.password)) {
      // creating token
      const tokens = setUser(user);
      return res.status(200).json({
        msg: "Login success",
        user: userInfo,
        token: tokens,
      });
    } else {
      return res.json("not allowed");
    }
  } catch (err){
    return res.status(400).json({
        msg: "something breaks",
        error: err,
        
    });
  }
};

const getAllUserAuthData = async (req, res) => {
  const AllUsersData = await User.find({});
  return res.status(200).json(AllUsersData);
};

module.exports = { handleuserSignup, handleuserLogin, getAllUserAuthData };
