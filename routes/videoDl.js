import express from "express";
import { GetVideoDl } from "../controllers/GetVideoDlLink.js";

const router = express.Router();
router.post("/", GetVideoDl);

export default router;
