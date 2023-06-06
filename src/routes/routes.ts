import express, { Request, Response, NextFunction } from "express";
let router = express.Router();
const { getData, postData } = require("../controllers/controller");
const { middlewareCheck } = require("../middleware/middleware");

router.get("/", getData);
router.post("/post", postData);
module.exports = router;
