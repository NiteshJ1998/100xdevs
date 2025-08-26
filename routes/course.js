const { Router } = require("express");

app.post("/cousrse/purchase", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

app.get("/course/preview ", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

module.exports = {
  createCourseRoutes: createCourseRoutes,
};
