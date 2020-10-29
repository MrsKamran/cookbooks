const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("mongoose-type-url");

const cookbookSchema = new Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    subtitle: {
      type: String,
      // required: true,
    },
    coverImageURL: {
      type: mongoose.SchemaTypes.Url,
      // required: true,
    },
    foreword: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cookbook", cookbookSchema);
