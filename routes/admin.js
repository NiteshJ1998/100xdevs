const { Router } = require("express");

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

adminRouter.post("/course", function (req, res) {
  res.json({
    message: "Course created successfully",
  });
});

adminRouter.patch("/course", function (req, res) {
  res.json({
    message: "Course edited successfully",
  });
});

adminRouter.get("/course", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
