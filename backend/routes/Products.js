const express = require("express");
const router = express.Router();
const Products = require("../controllers/Products");
const { protect, admin } = require("../middleware/auth");

router.get("/", Products.getAll);
router.get("/:id", Products.getOne);
// router.post("/", protect, admin, Products.create);
router.post("/",  Products.create);
router.get("/unique",Products.uniqueCategory)
router.post("/", Products.create);
router.post("/wishlist/:id", Products.wishlist);
router.post("/userWishlist/:id", Products.findOnesWishlistedProduct);
// router.put("/:id", protect, admin, Products.update);
router.patch("/:id",  Products.update);
// router.delete("/:id", protect, admin, Products.delete);
router.delete("/:id", Products.delete);

module.exports = router;
