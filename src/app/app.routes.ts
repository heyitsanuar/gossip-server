import { Router } from "express";

import { ArticleRoutes } from "../entities/article/article.routes";
import { AuthorRoutes } from "../entities/author/author.routes";
import { SongRoutes } from "../entities/song/song.routes";

export const AppRoutes = Router();

AppRoutes.use("/article", ArticleRoutes);
AppRoutes.use("/author", AuthorRoutes);
AppRoutes.use("/song", SongRoutes);
