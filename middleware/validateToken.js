const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, "seceretKey");

    if (!decoded) {
      return res.status(401).json({
        msg: "unauthorized access",
        success: false,
      });
    }
    req.user = decoded.email;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: "unauthorized access",
      error: `${error}`,
      success: false,
    });
  }
}

module.exports = validateToken;
