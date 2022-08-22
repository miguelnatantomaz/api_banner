import "dotenv/config";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./middlewares/express-error.middleware";
import bannerRouter from "./routes/banner.routes";
import customerRouter from "./routes/customer.routes";

const app = express();
app.use(express.json());

app.use("/customer", customerRouter);
app.use("/banner", bannerRouter);

app.use(errorHandler);

export default app;
