const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter");
const userRouter = require("./routes/userRouter");
const validateUser = require("./middleware/validateToken");
const validateBody = require("./middleware/validateBody");

const app = express();

mongoose.connect("mongodb://localhost:27017/shine", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

app.use(bodyParser.json());
let preAuth = [validateUser,validateBody];

db.on("error", console.error.bind(console.log("Db connection error")));
db.once("open", () => console.log("Db connected"));


app.use("/auth",preAuth[1], authRouter);
app.use(...preAuth);
app.use("/user", userRouter);

module.exports=app;
