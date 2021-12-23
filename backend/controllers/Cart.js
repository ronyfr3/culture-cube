const ErrorHandler = require("../utils/errorHandler");
const AsyncErrorHandler = require("../Middleware/catchAsyncError");
const Product = require("../Model/Products");
const Cart = require("../Model/Cart");

const cartItems = async () => {
  const carts = await Cart.find().populate({
    path: "items.productId",
    select: "name price total",
  });
  return carts[0]; //zero index means all products will store in a single array field which is cart[0].items:[{product1},{product2},etc]
};

const cartCtrl = {
  getAll: AsyncErrorHandler(async (req, res, next) => {
    const carts = await cartItems();
    const totalCount = await Cart.countDocuments();
    if (carts.length === 0) {
      res.status(200).json({ msg: "Empty Items list" });
    } else {
      res.status(200).json({ totalCarts: totalCount, success: true, carts });
    }
  }),
  create: AsyncErrorHandler(async (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(new ErrorHandler("Items not added!", 404));
    } else {
      const { productId } = req.body;
      const quantity = Number.parseInt(req.body.quantity);
      let cart = await cartItems();
      let productDetails = await Product.findById(productId);
      if (!productDetails) {
        return next(new ErrorHandler("Item not found", 404));
      }
      //check if cart exists
      if (cart) {
        const itemIndex = cart.items.findIndex(
          (item) => item.productId.id === productId
        );
        //if quantity is zero it will remove from cart
        if (itemIndex !== -1 && quantity <= 0) {
          cart.items.splice(itemIndex, 1);
          if (cart.items.length === 0) {
            cart.subTotal = 0;
          } else {
            cart.subTotal = cart.items
              .map((item) => item.total)
              .reduce((acc, next) => acc + next);
          }
        }
        //check if the product is already exist,just add the previous quantity with the new quantity and update total price
        else if (itemIndex !== -1) {
          cart.items[itemIndex].quantity =
            cart.items[itemIndex].quantity + quantity;
          cart.items[itemIndex].total =
            cart.items[itemIndex].quantity * productDetails.price;
          cart.items[itemIndex].price = productDetails.price;
          cart.subTotal = cart.items
            .map((item) => item.total)
            .reduce((acc, next) => acc + next);
        } else if (quantity > 0) {
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
        //if quantity of price is 0 throw the error
        else {
          return next(new ErrorHandler("Item not added", 400));
        }
        let data = await cart.save();
        res.status(200).json({
          totalCarts: data.items.length,
          data: data,
          message: "item added successfully",
        });
      } else {
        const cartData = {
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
        cart = await Cart.create(cartData);
        res.status(201).json({
          cart,
          message: "Item added to cart successfully",
        });
      }
    }
  }),
  delete: AsyncErrorHandler(async (req, res, next) => {
    let cart = await cartItems();
    if (cart.items.length || req.params.id) {
      const index = cart.items.findIndex(
        (item) => item._id.toString() === req.params.id
      );
      if (index > -1) {
        cart.items.splice(index, 1);
      }
      await cart.save();
      res
        .status(200)
        .json({ success: true, message: "Item deleted successfully" });
    } else {
      return next(new ErrorHandler("Item not found", 404));
    }
  }),
  emptyCart: AsyncErrorHandler(async (req, res, next) => {
    const cart = await cartItems();
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res
      .status(200)
      .json({ data: data, message: "cart has been emptied successfully" });
  }),
};

module.exports = cartCtrl;
