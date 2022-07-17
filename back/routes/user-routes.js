const express = require("express");
const { add, getData, edit, remove } = require("../controllers/supplierC");
const {
  signup,
  login,
  verifyToken,
  getUser,
  refreshToken,
  logout,
} = require("../controllers/user-controller");
const {contact} = require('../controllers/Contact_control')
const {getproduct , addproduct, removeproduct}  = require('../controllers/productC')
const {addbuyer,getBuyer,removeBuyer} = require('../controllers/buyerC');
const { email } = require("../controllers/Email");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout",logout)
router.get("/user", verifyToken, getUser);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/", verifyToken, logout);
router.post("/add", add);
router.get("/getdata", getData);
router.patch("/edit/:id", edit);
router.delete("/deleteuser/:id", remove);
router.post('/contact',contact);
router.post('/addproduct',addproduct);
router.get('/getproduct',getproduct);
router.delete('/removeproduct/:id',removeproduct)
router.post('/addbuyer',addbuyer);
router.get('/getbuyer',getBuyer);
router.delete('/removeBuyer/:id',removeBuyer);
router.post('/email',email)



module.exports = router;
