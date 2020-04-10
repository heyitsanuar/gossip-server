import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("hey");
});

app.listen(5000, () => console.log("listening on 5000"));
