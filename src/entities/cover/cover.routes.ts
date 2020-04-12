import { Router, Request, Response } from "express";

export const CoverRoutes = Router();

CoverRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
CoverRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
CoverRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
CoverRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
CoverRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
