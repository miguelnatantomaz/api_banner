import { Router } from "express";
import BannerControllers from "../controllers/bannerController";
import { handleBannerError, validateBannerCreate } from "./../middlewares/schemaValidationBanner.middleware"

const bannerRouter = Router();

bannerRouter.get("", BannerControllers.index)
bannerRouter.post("", validateBannerCreate(handleBannerError),BannerControllers.create)
bannerRouter.get("/:id", BannerControllers.show)
bannerRouter.patch("/:id", BannerControllers.update)
bannerRouter.delete("/:id", BannerControllers.delete)

export default bannerRouter