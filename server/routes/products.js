const express = require("express");
const router = express.Router();
const productController = require("../controller/products");
const multer = require("multer");

router.get("/all-product", productController.getAllProduct);
router.post("/product-by-category", productController.getProductByCategory);
router.post("/product-by-price", productController.getProductByPrice);
router.post("/wish-product", productController.getWishProduct);
router.post("/cart-product", productController.getCartProduct);

// router.post("/add-product", upload.any(), productController.postAddProduct);
router.post("/add-product", productController.postAddProduct);
router.post("/edit-product", productController.postEditProduct);
router.post("/delete-product", productController.getDeleteProduct);
router.post("/single-product", productController.getSingleProduct);

router.post("/add-review", productController.postAddReview);
router.post("/delete-review", productController.deleteReview);

module.exports = router;
