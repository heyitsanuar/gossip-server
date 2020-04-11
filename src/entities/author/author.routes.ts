import { Router, Request, Response } from "express";
import { AuthorController } from "./author.controller";
import { APIResponse } from "../../app/models/response.interface";

export const AuthorRoutes = Router();
export const author = new AuthorController();

AuthorRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const authorResponse: APIResponse = await author.getAuthors();

    res.status(authorResponse.status).send(authorResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

AuthorRoutes.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const authorResponse: APIResponse = await author.getAuthorById(id);

    res.status(authorResponse.status).send(authorResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

AuthorRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const authorResponse: APIResponse = await author.createAuthor(req.body);

    res.status(authorResponse.status).send(authorResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

AuthorRoutes.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const authorResponse: APIResponse = await author.updateAuthor(req.body, id);

    res.status(authorResponse.status).send(authorResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

AuthorRoutes.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const authorResponse: APIResponse = await author.removeAuthor(id);

    res.status(authorResponse.status).send(authorResponse.data || authorResponse.message);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});
