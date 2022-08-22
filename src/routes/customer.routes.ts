import { Router } from "express";
import CustomerControllers from "../controllers/customerController";
import { handleCustomerError, validateCustomerCreate } from "../middlewares/schemaValidationCustomer.middleware";

const customerRouter = Router();

customerRouter.get("", CustomerControllers.index)
customerRouter.post("", validateCustomerCreate(handleCustomerError),CustomerControllers.create)
customerRouter.get("/:id", CustomerControllers.show)
customerRouter.patch("/:id", CustomerControllers.update)
customerRouter.delete("/:id", CustomerControllers.delete)

export default customerRouter