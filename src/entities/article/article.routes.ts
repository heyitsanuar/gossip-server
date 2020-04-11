import { Router, Request, Response } from "express";
import { ArticleController } from "./article.controller";
import { APIResponse } from "../../app/models/response.interface";

export const ArticleRoutes = Router();
const article = new ArticleController();

ArticleRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const articlesResponse: APIResponse = await article.getArticles();

    res.status(articlesResponse.status).send(articlesResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

ArticleRoutes.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const articleResponse: APIResponse = await article.getArticleById(id);

    res.status(articleResponse.status).send(articleResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

ArticleRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
ArticleRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
ArticleRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
ArticleRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
