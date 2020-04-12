import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
//@ts-ignore
import expressSanitizer from "express-sanitizer";
import { AppRoutes } from "./app.routes";
import { APIResponse } from "./models/response.interface";

export const AppController: Application = express();

AppController.use(expressSanitizer());
AppController.use(bodyParser.json());
AppController.use(bodyParser.urlencoded({ extended: true }));

AppController.use(cors());

AppController.use("/api", AppRoutes);

// Handling 404 requests
AppController.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ message: "Endpoint not found." });
});

// error handler middleware
AppController.use(
  (error: APIResponse, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status || 500).send({
      error: {
        status: error.status || 500,
        message:
          error.message || "Sorry, we're facing some issues in our servers.",
      },
    });
  }
);
