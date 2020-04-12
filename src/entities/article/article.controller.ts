import { Article } from "./article.model";
import { APIResponse } from "../../app/models/response.interface";

export class ArticleController {
  getArticles(): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Article.find({}, (err, articles) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for articles.",
          });
        }

        return resolve({
          status: 200,
          data: articles,
        });
      });
    });
  }

  getArticleById(id: string): Promise<APIResponse> {
    return new Promise((resolve, reject) => {
      Article.findById(id, (err, articles) => {
        if (err) {
          return reject({
            status: 500,
            message: "There was a problem when looking for articles.",
          });
        }

        return resolve({
          status: 200,
          data: articles,
        });
      });
    });
  }
}
