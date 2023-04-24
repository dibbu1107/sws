const validateSchema = require("../schema/schema");

function validateBody(req, res, next) {
  if (!validateSchema[req.originalUrl]) {
    next();
  } else {
    const { error } = validateSchema[req.originalUrl].validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }
}

module.exports = validateBody;
