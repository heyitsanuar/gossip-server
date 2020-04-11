import { Router, Request, Response } from "express";

export const CategoryRoutes = Router();

CategoryRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
CategoryRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
CategoryRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
CategoryRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
CategoryRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
