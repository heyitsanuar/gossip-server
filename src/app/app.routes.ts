import { Router } from "express";

import { ArticleRoutes } from "../entities/article/article.routes";
import { AuthorRoutes } from "../entities/author/author.routes";

export const AppRoutes = Router();

AppRoutes.use("/article", ArticleRoutes);
AppRoutes.use("/author", AuthorRoutes);
