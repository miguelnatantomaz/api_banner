import { IBanner} from "@src/interfaces/banner";
import { Request, Response, NextFunction } from "express";

import * as yup from "yup";
import { SchemaOf } from "yup";

export const handleBannerError: SchemaOf<IBanner> = yup.object().shape({
    name: yup.string().required(),
    image: yup.string().required(),
    customerId: yup.string().required(),
    endAt: yup.string().required()
});

export const validateBannerCreate =
  (schema: SchemaOf<IBanner>) =>
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

