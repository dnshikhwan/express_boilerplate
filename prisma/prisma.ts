import { PrismaClient } from "@prisma/client";
import { logger } from "../helpers/log.helper";

const prisma = new PrismaClient();

export const prismaInit = () => {
  try {
    prisma.$connect;
    logger.info("Connected to DB");
  } catch (err) {
    logger.error("Error connecting to DB:", err);
  }
};

export default prisma;
