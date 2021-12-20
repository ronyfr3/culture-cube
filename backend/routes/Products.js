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
router.put("/:id", protect, admin, Products.update);
router.delete("/", protect, admin, Products.delete);

module.exports = router;
