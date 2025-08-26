const express = requrie("express");

const app = express();

app.use(express.json());

const PORT = 3000;

app.post("/user/signup", function (req, res) {
  res.json({
    message: "User created successfully",
  });
});

app.post("/user/login", function (req, res) {
  res.json({
    message: "User logged in successfully",
  });
});

app.get("/user/purchases", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

app.post("/cousrse/purchase", function (req, res) {
  res.json({
    message: "Course purchased successfully",
  });
});

app.get("/courses", function (req, res) {
  res.json({
    message: "Courses fetched successfully",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT} PORT`);
});
