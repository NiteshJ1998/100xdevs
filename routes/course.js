const { Router } = require("express");

const CourseRouter = Router();
CourseRouter.post("/cousrse/purchase", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

CourseRouter.get("/course/preview ", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

module.exports = {
  CourseRouter: CourseRouter,
};
