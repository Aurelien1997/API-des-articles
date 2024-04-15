const express = require("express");
const articlesController = require("./articles.controller");
const authMiddleware = require("../../middlewares/auth");
const userController = require("../users/users.controller");
const router = express.Router();

router.post("/", authMiddleware, articlesController.create);

router.put("/:id", authMiddleware, articlesController.update);

router.delete("/:id", authMiddleware, articlesController.delete);

router.get("/:userId/articles", userController.getUserArticles);

module.exports = router;
