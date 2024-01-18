import express from "express";
import { ProductRoute } from "./ProductRoute.js";
import { UserRoute } from "./UserRoute.js";

const router = express.Router();

/* GET home page. */
router.get("/listproduct", function (req, res, next) {
   res.render("index", { title: "Express" });
});

router.use("/user", UserRoute);

router.use("/product", ProductRoute);

router.get("/test", (req, res) => {
   res.render("sample");
});

router.get("/", (req, res) => {
   res.render("homepage");
});

export default router;
