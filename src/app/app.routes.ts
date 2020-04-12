import { Router } from "express";

import { ArticleRoutes } from "../entities/article/article.routes";
import { AuthorRoutes } from "../entities/author/author.routes";
import { CategoryRoutes } from "../entities/category/category.routes";
import { CoverRoutes } from "../entities/cover/cover.routes";
import { SongRoutes } from "../entities/song/song.routes";
import { SingerRoutes } from "../entities/singer/singer.routes";

export const AppRoutes = Router();

AppRoutes.use("/article", ArticleRoutes);
AppRoutes.use("/author", AuthorRoutes);
AppRoutes.use("/category", CategoryRoutes);
AppRoutes.use("/cover", CoverRoutes);
AppRoutes.use("/song", SongRoutes);
AppRoutes.use("/singer", SingerRoutes);
