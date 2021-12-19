const mongoose = require("mongoose");


const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "Category field required!"],
    },
    subCategory: {
      type: String,
      required: [true, "Sub-category field required!"],
    },
    type: {
      type: String,
      required: [true, "Product type field required!"],
    },
    name: {
      type: String,
      required: [true, "Name field required!"],
    },
    price: {
      type: Number,
      required: [true, "Price field required!"],
    },
    image: {
      type: String,
      required: [true, "Image field required!"],
    },
    description: {
      type: String,
      required: [true, "Description field required!"],
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    countInStock: Boolean,
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("CultureCubeProduct", productSchema);

module.exports = Product;
