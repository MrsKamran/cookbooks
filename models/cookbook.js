const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const cookbookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    authors: {
      type: String,
    },
    coverImageURL: {
      type: mongoose.SchemaTypes.Url,
    },
    foreword: {
      type: String,
    },
    forewordAuthor: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cookbook", cookbookSchema);
