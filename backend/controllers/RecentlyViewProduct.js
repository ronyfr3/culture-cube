const RecentlyViewProduct = require("../Model/RecentlyViewProduct");
const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../Middleware/catchAsyncError");
const Product = require("../Model/Products");
const mongoose = require("mongoose");

const view = {
  getAll: AsyncErrorHandler(async (req, res, next) => {
    const products = await RecentlyViewProduct.find();
    const totalCount = await RecentlyViewProduct.countDocuments();
    if (products.length === 0) {
      return next(new ErrorHandler("No products found", 404));
    } else {
      res.status(200).json({ products, totalDocument: totalCount });
    }
  }),
  getProductsByUser: AsyncErrorHandler(async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(
        new ErrorHandler(`No user found with id:${req.params.id}`, 400)
      );
    }
    const products = await RecentlyViewProduct.find();
    const findUserProduct = products.filter(
      (product) => product.user === req.params.id.toString()
    );
    if (findUserProduct.length === 0) {
      return next(new ErrorHandler("Empty viewed products"));
    } else {
      res.status(200).json({
        products: findUserProduct,
        totalProducts: findUserProduct.length,
      });
    }
  }),
  create: AsyncErrorHandler(async (req, res, next) => {
    //this will check all collections _ids if it matches then go for next() otherwise throw an error
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(
        new ErrorHandler(`No product found with id:${req.params.id}`, 400)
      );
    }
    //this will check _ids from Products if it matches then go for next() otherwise throw an error
    const allProducts = await Product.find();
    const exactMatch = allProducts.some(
      (x) => x._id.toString() === req.params.id
    );

    if (!exactMatch) {
      return next(new ErrorHandler(`Invalid product id ${req.params.id}`, 400));
    }
    const viewedItems = await RecentlyViewProduct.find();
    const findUserProduct = viewedItems.filter(
      (product) => product.user === req.user._id
    );
    const itemIndex = findUserProduct.findIndex(
      (item) => item.productId === req.params.id
    );
    const product = await Product.findById(req.params.id);

    if (itemIndex !== -1) {
      return next(new ErrorHandler("product already viewed", 409));
    } else {
      const viewedProduct = new RecentlyViewProduct({
        user: req.user._id,
        productId: product._id,
        name: product.name,
        image: product.image,
        price: product.price,
      });
      await viewedProduct
        .save()
        .then((data) =>
          res.status(200).json({ data, message: "Product saved successfully" })
        )
        .catch((err) => res.status(500).json({ message: "something wrong" }));
    }
  }),
};
module.exports = view;
