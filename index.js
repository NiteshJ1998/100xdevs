const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { CourseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use(express.json());

const PORT = 4000;

app.use("/user", userRouter);
app.use("/course", CourseRouter);
app.use("/admin", adminRouter);

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/coursera-app");
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT} PORT`);
  });
}

main();
