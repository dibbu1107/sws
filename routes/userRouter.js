const express = require("express");
const user = require("../controllers/userController");

const userRouter = express.Router();

userRouter.get("/userdetails", user);

module.exports = userRouter;
