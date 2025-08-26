const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/coursera-app");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  fisrtName: String,
  lastName: String,
});

const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  fisrtName: String,
  lastName: String,
});

const courseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  ImageURL: String,
  creatorId: ObjectId,
});

const purchaseSchema = new mongoose.Schema({
  userId: ObjectId,
  courseId: ObjectId,
});

const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Course = mongoose.model("Course", courseSchema);
const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = {
  User: User,
  Admin: Admin,
  Course: Course,
  Purchase: Purchase,
};
