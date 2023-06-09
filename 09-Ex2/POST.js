const Comment = require("./Comment");

class Post {
  constructor(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.comments = [];
  }

  addComment(username, content) {
    this.comments = new Comment(username, content);
  }
}

module.exports = Post;
