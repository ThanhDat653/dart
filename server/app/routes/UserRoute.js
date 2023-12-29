import express from "express";
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
   res.send("respond with a resource");
});
router.get("/:id", function (req, res, next) {
   res.send("respond with a user by id");
});

export { router as UserRoute };
