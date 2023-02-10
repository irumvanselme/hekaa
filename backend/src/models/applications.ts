import { model, Schema } from "mongoose";

const appSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

model("App", appSchema)