const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "User created successfully",
  });
});

userRouter.post("/login", function (req, res) {
  res.json({
    message: "User logged in successfully",
  });
});

userRouter.get("/purchase", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

module.exports = {
  userRouter: userRouter,
};
