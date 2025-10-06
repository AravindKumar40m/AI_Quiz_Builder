import express from "express";
import { getQuizzes } from "../controllers/QuizzController.js";

const router = express.Router();

router.get("/quiz/:id", getQuizzes);

export default router;
