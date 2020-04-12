import { Router, Request, Response } from "express";
import { APIResponse } from "../../app/models/response.interface";
import { CategoryController } from "./category.controller";

export const CategoryRoutes = Router();
const category = new CategoryController();

CategoryRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const categoryResponse: APIResponse = await category.getCategories();

    res.status(categoryResponse.status).send(categoryResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

CategoryRoutes.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const categoryResponse: APIResponse = await category.getCategoryById(id);

    res.status(categoryResponse.status).send(categoryResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

CategoryRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const categoryResponse: APIResponse = await category.createCategory(req.body);

    res.status(categoryResponse.status).send(categoryResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

CategoryRoutes.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const categoryResponse: APIResponse = await category.updateCategory(req.body, id);

    res.status(categoryResponse.status).send(categoryResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

CategoryRoutes.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const categoryResponse: APIResponse = await category.removeCategory(id);

    res.status(categoryResponse.status).send(categoryResponse.data || categoryResponse.message);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});
