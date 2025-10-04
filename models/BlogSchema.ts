import mongoose, { models } from "mongoose";

const blogSchema = new mongoose.Schema({
  title: String,
  desc: String,
  image: String,
  teg: String,
  createdDate: { type: Date, default: Date.now },
});

const BlogModel = models.blogs || mongoose.model("blogs", blogSchema);

export default BlogModel;
