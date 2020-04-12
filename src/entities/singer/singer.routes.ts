import { Router, Request, Response } from "express";
import { APIResponse } from "../../app/models/response.interface";
import { SingerController } from "./singer.controller";

export const SingerRoutes = Router();
const singer = new SingerController();

SingerRoutes.get("/", async (req: Request, res: Response) => {
  try {
    const singerResponse: APIResponse = await singer.getSingers();

    res.status(singerResponse.status).send(singerResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

SingerRoutes.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const singerResponse: APIResponse = await singer.getSingerById(id);

    res.status(singerResponse.status).send(singerResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

SingerRoutes.post("/", async (req: Request, res: Response) => {
  try {
    const singerResponse: APIResponse = await singer.createSinger(req.body);

    res.status(singerResponse.status).send(singerResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

SingerRoutes.patch("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const singerResponse: APIResponse = await singer.updateSinger(req.body, id);

    res.status(singerResponse.status).send(singerResponse.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});

SingerRoutes.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const singerResponse: APIResponse = await singer.removeSinger(id);

    res.status(singerResponse.status).send(singerResponse.data || singerResponse.message);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
});
