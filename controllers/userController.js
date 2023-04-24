const User = require("../model/User");

async function userdetail(req, res) {
  try {
    const userdata = await User.findOne(
      {
        $or: [{ email: req.user }, { username: req.user }],
      },
      ["email", "username", "name"]
    );

    if (!userdata) {
      return res.status(401).json({
        msg: "unauthorized user",
        success: false,
      });
    }

    return res.status(200).json({
      data: userdata,
      msg: "Data fetched successfully",
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      error: `${error}`,
      success: false,
    });
  }
}

module.exports = userdetail;
