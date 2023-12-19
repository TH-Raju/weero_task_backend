let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let taskSchema = new Schema(
  {
    category: {
      type: String,

    },
    subCategoriy: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

let Task = mongoose.model("task", taskSchema);
module.exports = Task;
