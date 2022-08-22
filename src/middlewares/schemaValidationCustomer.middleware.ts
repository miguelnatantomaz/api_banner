import { Request, Response, NextFunction } from "express";
import { ICustomerRequest } from "../interfaces/customer/index";
import * as yup from "yup";
import { SchemaOf } from "yup";

export const handleCustomerError: SchemaOf<ICustomerRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    phone: yup.string().required()
});

export const validateCustomerCreate =
  (schema: SchemaOf<ICustomerRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.body = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          status: "error",
          error: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };

