import { Router } from "express";
import authController from "../controllers/auth.controller";

export const createRouter = () => {
  const router = Router();

  router.use("/auth", authController());

  return router;
};
