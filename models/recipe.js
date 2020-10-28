const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema(
  {
    ingredient: {
      type: String,
      // required: true,
    },
    quantity: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const instructionSchema = new Schema(
  {
    instruction: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    imageURL: {
      type: mongoose.SchemaTypes.Url,
      // required: true,
    },
    ingredients: [ingredientSchema],
    instructions: [instructionSchema],
    cookbookId: {
      type: Schema.Types.ObjectId,
      ref: "cookbook",
    },
    recipeAuthor: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
