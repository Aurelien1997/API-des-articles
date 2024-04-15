const articleService = require("./articles.service");

class ArticleController {
  async create(req, res, next) {
    try {
      const userId = req.user._id;
      const article = await articleService.create(userId, req.body);
      res.status(201).json(article);
    } catch (error) {
      next(error);
    }
  }

  async update(req, res, next) {
    try {
      const articleId = req.params.id;
      const updatedArticle = await articleService.update(articleId, req.body);
      res.json(updatedArticle);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const articleId = req.params.id;
      await articleService.delete(articleId);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ArticleController();
