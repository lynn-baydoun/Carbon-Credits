import mongoose from "mongoose";
import modelOptions from "./model.options.js";

const userSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
  }
}, modelOptions);


const userModel = mongoose.model("User", userSchema);

export default userModel;

