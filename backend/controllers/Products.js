const Product = require("../model/Products");
const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../Middleware/catchAsyncError");
const APIfeatures = require("../utils/Queries");

const Products = {
  getByLastYear: AsyncErrorHandler(async (req, res, next) => {
    const totalCount = await Product.countDocuments();
    const lastYearData = await Product.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().getTime() - 365 * 24 * 60 * 60 * 1000),
          },
        },
      },
    ]);
    if (lastYearData) {
      res.status(200).json({
        totalDocument: totalCount,
        returnDocuments: lastYearData.length,
        success: true,
        lastYearData,
      });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  getByLast6Month: AsyncErrorHandler(async (req, res, next) => {
    const now = new Date();
    const temp = new Date(now).setMonth(now.getMonth() - 6);
    const priorSix = new Date(temp);
    const totalCount = await Product.countDocuments();
    const last6MonthData = await Product.find({
      createdAt: { $gte: priorSix, $lt: new Date() },
    });
    if (last6MonthData) {
      res.status(200).json({
        totalDocument: totalCount,
        returnDocuments: last6MonthData.length,
        success: true,
        last6MonthData,
      });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  getByLastMonth: AsyncErrorHandler(async (req, res, next) => {
    const totalCount = await Product.countDocuments();
    const d = new Date();
    d.setMonth(d.getMonth() - 1); //1 month ago
    const lastMonthData = await Product.find({
      createdAt: { $gte: d.toISOString() },
    });
    if (lastMonthData) {
      res.status(200).json({
        totalDocument: totalCount,
        returnDocuments: lastMonthData.length,
        success: true,
        lastMonthData,
      });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  getByLastWeek: AsyncErrorHandler(async (req, res, next) => {
    const totalCount = await Product.countDocuments();
    const lastWeekData = await Product.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
          },
        },
      },
    ]);
    if (lastWeekData) {
      res
        .status(200)
        .json({ totalDocument: totalCount, success: true, lastWeekData });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  uniqueCategory: AsyncErrorHandler(async (req, res, next) => {
    const unique = await Product.distinct("category");
    if (!unique) {
      return next(new ErrorHandler("no category found", 404));
    } else {
      res.status(200).json({ success: true, unique });
    }
  }),
  getAll: AsyncErrorHandler(async (req, res, next) => {
    const apiFeature = new APIfeatures(Product.find(), req.query)
      .search()
      .sorting()
      .filtering()
      .paginating(15);
    const totalCount = await Product.countDocuments();
    const products = await apiFeature.query;
    if (products.length === 0) {
      return next(new ErrorHandler("Empty Items list", 400));
    } else {
      res.status(200).json({ totalItems: totalCount, success: true, products });
    }
  }),
  getOne: AsyncErrorHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.status(200).json({ success: true, product });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  create: AsyncErrorHandler(async (req, res, next) => {
    if (
      Object.keys(req.body).length === 0 ||
      !req.body.name ||
      !req.body.type ||
      !req.body.category ||
      !req.body.subCategory ||
      !req.body.price ||
      !req.body.image ||
      !req.body.description
    ) {
      return next(new ErrorHandler("please fill in all fields", 404));
    } else {
      const {
        name,
        type,
        category,
        subCategory,
        price,
        image,
        description,
        discount
      } = req.body;
      const calculatedDiscount = price - (price * discount) / 100;
      const product = new Product({
        name,
        type,
        category,
        subCategory,
        price: calculatedDiscount,
        image,
        description,
        discount
      });

      const product_details = await product.save();
      res
        .status(201)
        .json({ product_details, message: "Item created successfully" });
    }
  }),
  update: AsyncErrorHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(new ErrorHandler("please fill at least one field", 404));
    } else {
      const {
        name,
        type,
        category,
        subCategory,
        price,
        image,
        description,
        discount,
        countInStock
      } = req.body;
      const product = await Product.findById(req.params.id);
      const calculatedDiscount = price - (price * discount) / 100;
      if (product) {
        product.name = name;
        product.image = image;
        product.category = category;
        product.description = description;
        product.subCategory = subCategory;
        product.price = calculatedDiscount;
        product.type = type;
        product.discount = discount;
        product.countInStock = countInStock;

        const product_details = await Product.save();
        res
          .status(200)
          .json({ product_details, message: "Item updated successfully" });
      } else {
        return next(new ErrorHandler("Item not found", 404));
      }
    }
  }),
  delete: AsyncErrorHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res
        .status(200)
        .json({ success: true, message: "Item deleted successfully" });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  review: AsyncErrorHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(new ErrorHandler("please fill at least one field", 404));
    } else {
      const { rating, comment } = req.body;
      const product = await Product.findById(req.params.id);
      if (product) {
        const alreadyReview = product.reviews.find(
          (r) => r.user.toString() === req.user._id.toString()
        );
        if (alreadyReview) {
          res.status(400).json({ msg: "Item already reviewed" });
        }
        const review = {
          rating: Number(rating),
          comment,
          name: req.user.name,
          user: req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
          product.reviews.reduce((acc, item) => item.rating + acc, 0) /
          product.reviews.length;
        await product.save();
        res.status(201).json({ message: "review added" });
      } else {
        return next(new ErrorHandler("Item not found", 404));
      }
    }
  }),
};
module.exports = Products;
