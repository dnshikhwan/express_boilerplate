import { Router } from "express";
import { testController } from "../controllers/test.controller";

export const createRouter = () => {
  const router = Router();

  router.use("/test", testController());

  return router;
};
