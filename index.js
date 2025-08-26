const express = requrie("express");
const { userRouter } = require("./routes/user");
const { CourseRouter } = require("./routes/course");

const app = express();

app.use(express.json());

const PORT = 3000;

app.use("/user", userRouter);
app.use("/course", CourseRouter);

createUserRoutes(app);
createCourseRoutes(app);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} PORT`);
});
