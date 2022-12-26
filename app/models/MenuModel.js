import mongoose from "mongoose";

const Schema = mongoose.Schema;

const Menu = new Schema(
  {
    name_food: { type: String, default: "" },
    img_food: { type: String, default: "" },
    description_food: { type: String, default: "" },
    price_food: { type: String, default: "" },
    type_image: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Menu", Menu);
