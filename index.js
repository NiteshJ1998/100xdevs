const express = require("express");
const { userRouter } = require("./routes/user");
const { CourseRouter } = require("./routes/course");

const app = express();

app.use(express.json());

const PORT = 4000;

app.use("/user", userRouter);
app.use("/course", CourseRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} PORT`);
});
