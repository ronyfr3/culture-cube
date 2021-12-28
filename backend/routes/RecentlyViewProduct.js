const express = require("express");
const router = express.Router();
const view = require("../controllers/RecentlyViewProduct");

router.get("/", view.getAll);
router.get("/userviewedProduct/:id", view.getProductsByUser);
router.post("/:id", view.create);

module.exports = router;
