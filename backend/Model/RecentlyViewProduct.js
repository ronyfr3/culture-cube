const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    productId:String,
    name: String,
    image: String,
    price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("recentlyViewed", viewSchema);
