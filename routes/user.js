const { Router } = require("express");

const userRouter = Router();

Router.post("/signup", function (req, res) {
  res.json({
    message: "User created successfully",
  });
});

Router.post("/login", function (req, res) {
  res.json({
    message: "User logged in successfully",
  });
});

Router.get("/purchases", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

module.exports = {
  userRouter: userRouter,
};
