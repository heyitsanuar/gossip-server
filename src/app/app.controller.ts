import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";

export const AppController: Application = express();

AppController.use(bodyParser.json());
AppController.use(bodyParser.urlencoded({ extended: true }));

// Handling 404 requests
AppController.use((req: Request, res: Response) => {
  res.send({ message: "Endpoint not found." });
});
