const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../Middleware/catchAsyncError");
const Product = require("../Model/Products");
const Cart = require("../Model/Cart");
const mongoose = require("mongoose");

const cartCtrl = {
  getAll: AsyncErrorHandler(async (req, res, next) => {
    const carts = await Cart.find().populate({
      path: "items.productId",
      select: "name price total image",
    });
    const totalCount = await Cart.countDocuments();
    if (!carts) {
      res.status(404).json({ msg: "Empty Items list" });
    } else {
      res.status(200).json({ carts, totalCarts: totalCount, success: true });
    }
  }),
  create: AsyncErrorHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(new ErrorHandler("Items not added!", 404));
    } else {
      const { productId, quantity } = req.body;
      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return next(new ErrorHandler("item not found", 400));
      }
      let user = req.user._id;
      let cart = await Cart.findOne({ user });
      // console.log("cart", cart); //return identified cart object

      let productDetails = await Product.findById(productId);
      if (!productDetails) {
        return next(new ErrorHandler("Item not found", 404));
      }

      //check if cart exists
      if (cart) {
        const itemIndex = cart.items.findIndex(
          (item) => item.productId._id.toString() === productId.toString()
        );

        //check if the product is already exist,just add the previous quantity with the new quantity and update total price
        if (itemIndex !== -1) {
          cart.items[itemIndex].quantity =
            cart.items[itemIndex].quantity + quantity;
          cart.items[itemIndex].total =
            cart.items[itemIndex].quantity * productDetails.price;
          cart.items[itemIndex].price = productDetails.price;
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        } else {
          //user exists already but the product is not exist, then push new objects to the exists cart
          cart.items.push({
            productId: productId,
            quantity: quantity,
            price: productDetails.price,
            total: parseInt(productDetails.price * quantity),
          });
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        }
        cart = await cart.save();
        res.status(200).json({
          totalCarts: cart.items.length,
          cart,
          message: "item added successfully",
        });
      } else {
        //no cart for user, create new cart
        const newCart = {
          user,
          items: [
            {
              productId: productId,
              quantity: quantity,
              total: parseInt(productDetails.price * quantity),
              price: productDetails.price,
            },
          ],
          subTotal: parseInt(productDetails.price * quantity),
        };
        await Cart.create(newCart);
        res.status(201).json({
          message: "new item added to cart",
        });
      }
    }
  }),
  //if user wants to delete an item
  delete: AsyncErrorHandler(async (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return next(new ErrorHandler("item not found", 400));
    }
    // let user = req.user._id
    let user = req.user._id;
    let cart = await Cart.findOne({ user });
    // console.log(cart);
    // handle mongoose id vaidation mongoose.types.....
    if (!cart) {
      return next(
        new ErrorHandler("you can't delete this cart,unauthorized user")
      );
    }
    const itemIndex = cart.items.findIndex(
      (item) => item._id.toString() === req.params.id
    );
    if (itemIndex > -1) {
      cart.items.splice(itemIndex, 1);
      cart.subTotal = 0;
      await cart.save();
      res
        .status(200)
        .json({ success: true, message: "Item deleted successfully" });
    } else if (cart.items.length <= 0) {
      await Cart.findByIdAndDelete(cart._id);
    } else {
      return next(
        new ErrorHandler(
          "something wrong happened during delete operation!",
          400
        )
      );
    }
  }),
  //if user wants to delete all items
  emptyCart: AsyncErrorHandler(async (req, res, next) => {
    let user = req.user._id;
    let cart = await Cart.findOne({ user });
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res
      .status(200)
      .json({ data: data, message: "cart has been emptied successfully" });
  }),
};

module.exports = cartCtrl;
