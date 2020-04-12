import { Router, Request, Response } from "express";

export const AuthorRoutes = Router();

AuthorRoutes.get("/", (req: Request, res: Response) => res.send("GET"));
AuthorRoutes.post("/", (req: Request, res: Response) => res.send("POST"));
AuthorRoutes.put("/", (req: Request, res: Response) => res.send("PUT"));
AuthorRoutes.patch("/", (req: Request, res: Response) => res.send("PATCH"));
AuthorRoutes.delete("/", (req: Request, res: Response) => res.send("DELETE"));
