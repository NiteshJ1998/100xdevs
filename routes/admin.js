const { Router } = require("express");
const { admin } = require("../db");

const adminRouter = Router();

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "User created successfully",
  });
});

adminRouter.post("/login", function (req, res) {
  res.json({
    message: "User logged in successfully",
  });
});

adminRouter.post("/", function (req, res) {
  res.json({
    message: "Course created successfully",
  });
});

adminRouter.patch("/", function (req, res) {
  res.json({
    message: "Course edited successfully",
  });
});

adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
