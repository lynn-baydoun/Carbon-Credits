import mongoose, { Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default mongoose.model(
  "Campaign",
  mongoose.Schema({
    user: {
      type: String,
      ref: "User",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description : {
      type : String, 
      required : true
    },
    image: {
      type: String,
      required: true
    },
    deadline:{
      type : Number, 
      require: true
    },
    amountCollected : {
      type: Number,
      required: true
    },
    contractAddress : {
      type : String, 
      required : true
    },
    approved : {
      type : Boolean,
      required : true,
    }
  }, modelOptions)
);