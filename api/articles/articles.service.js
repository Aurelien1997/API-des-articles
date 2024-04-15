const Article = require("./articles.schema");

class ArticleService {
  async create(userId, data) {
    data.user = userId;
    return Article.create(data);
  }

  async update(articleId, data) {
    return Article.findByIdAndUpdate(articleId, data, { new: true });
  }

  async delete(articleId) {
    return Article.findByIdAndDelete(articleId);
  }
}

module.exports = new ArticleService();
