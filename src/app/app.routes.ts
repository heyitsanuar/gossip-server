import { Router } from "express";
import { ArticleRoutes } from "../entities/article/article.routes";

export const AppRoutes = Router();

AppRoutes.use("/article", ArticleRoutes);
