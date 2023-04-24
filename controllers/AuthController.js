const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    const { name, email, username, password } = req.body;
    const userdetail = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (userdetail) {
      res.status(403).json({
        msg: "user already exists",
      });
      return;
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    const user = new User({ name, email, username, password: hashedPwd });
    await user.save();
    return res.status(200).json({
      msg: "user signup successfully",
    });
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
      success: false,
    });
  }
}

async function login(req, res) {
  try {
    const { emailOrUserName, password } = req.body;
    const userdetail = await User.findOne({
      $or: [{ email: emailOrUserName }, { username: emailOrUserName }],
    });
    if (userdetail) {
      const match = bcrypt.compare(password, userdetail.password);
      if (!match) {
        res.status(400).json({
          msg: "invalid username password",
          success: false,
        });
        return;
      }

      const token = jwt.sign({ email: emailOrUserName }, "seceretKey",{ expiresIn: '1h' });

      res.status(200).json({
        msg: "logged in successfully",
        token: token,
        success: true,
      });
      return;
    } else {
      res.status(400).json({
        msg: "invalid username password",
        success: false,
      });
      return;
    }
  } catch (error) {
    res.status(400).json({
      error: `${error}`,
      success: false,
    });
  }
}

module.exports = {
  signup,
  login,
};
