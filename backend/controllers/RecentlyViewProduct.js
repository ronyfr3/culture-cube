const RecentlyViewProduct = require("../Model/RecentlyViewProduct");
const AsyncErrorHandler = require("../Middleware/catchAsyncError");
const Product = require("../Model/Products");

const view = {
  getAll: AsyncErrorHandler(async (req, res) => {
    const products = await RecentlyViewProduct.find();
    const totalCount = await RecentlyViewProduct.countDocuments();
    if (!products) {
      res.status(400).json({ message: "No view products" });
    } else {
      res.status(400).json({ products, totalDocument: totalCount });
    }
  }),
  create: AsyncErrorHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    const viewProducts = await RecentlyViewProduct.find({});
    if (!product) {
      res.status(400).json({ message: "No product found" });
    } else {
      viewProducts.push(product);
      const viewProduct = new RecentlyViewProduct({ products: viewProducts });
      const items = await viewProduct.save();
      res.status(200).json({ items });
    }
  }),
};
module.exports = view;
