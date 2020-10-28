const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageURL: {
      type: mongoose.SchemaTypes.Url,
    },
    ingredients: {
      type: String,
    },
    instructions: {
      type: String,
    },
    cookbookId: {
      type: Schema.Types.ObjectId,
      ref: "cookbook",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
