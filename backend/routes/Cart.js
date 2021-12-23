const express = require("express");
const router = express.Router();
const cartCtrl = require("../controllers/Cart");

router.get("/", cartCtrl.getAll);
router.post("/",  cartCtrl.create);
router.delete("/:id",cartCtrl.delete)
router.post("/empty",cartCtrl.emptyCart)

module.exports = router;