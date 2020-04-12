import { Router, Request, Response } from "express";

export const ArticleRoutes = Router();

ArticleRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
ArticleRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
ArticleRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
ArticleRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
ArticleRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
