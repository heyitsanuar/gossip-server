import { Router, Request, Response } from "express";

export const SongRoutes = Router();

SongRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
SongRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
SongRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
SongRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
SongRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
