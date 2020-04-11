import { Router, Request, Response } from "express";

export const SingerRoutes = Router();

SingerRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
SingerRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
SingerRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
SingerRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
SingerRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
