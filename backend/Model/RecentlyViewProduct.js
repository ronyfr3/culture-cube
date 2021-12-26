const mongoose = require("mongoose");

const viewSchema = new mongoose.Schema(
  {
    products: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("recentlyViewed", viewSchema);
