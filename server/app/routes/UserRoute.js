import express from "express";
import { createUser } from "../controller/userController.js";
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.send("respond with a resource");
});

router.get("/:id", function (req, res, next) {
   res.send("respond with a user by id");
});

/* POST new user */
router.post("/register", createUser);
router.post("/login", () => {});
export { router as UserRoute };
