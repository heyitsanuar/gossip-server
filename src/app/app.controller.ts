import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
//@ts-ignore
import expressSanitizer from "express-sanitizer";

import { AppRoutes } from "./app.routes";

export const AppController: Application = express();

AppController.use(expressSanitizer());
AppController.use(bodyParser.json());
AppController.use(bodyParser.urlencoded({ extended: true }));

AppController.use(cors());

AppController.use("/api", AppRoutes);

// Handling 404 requests
AppController.use((req: Request, res: Response) => {
  res.send({ message: "Endpoint not found." });
});
