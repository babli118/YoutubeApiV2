import express from "express";
import { sendSearch } from "../controllers/SendSearch.js";

const router = express.Router();
router.post("/", sendSearch);

export default router;
