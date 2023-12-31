import { Router } from "express";
import { shortenUrl, getUrl, accessUrl, deleteUrl } from "../controllers/urlsController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateAuth } from "../middlewares/validateAuth.js";
import { schemaUrl } from "../schemas/urls.schemas.js";

const urlsRouter = Router();
urlsRouter.post("/urls/shorten", validateAuth, validateSchema(schemaUrl), shortenUrl);
urlsRouter.get("/urls/:id", getUrl);
urlsRouter.get("/urls/open/:shortUrl", accessUrl);
urlsRouter.delete("/urls/:id", validateAuth, deleteUrl)

export default urlsRouter;