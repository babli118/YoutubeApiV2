import express from "express";
import { sendAudioDlLink } from "../controllers/sendAudioDlLink.js";

const router = express.Router();

router.post("/", sendAudioDlLink);

export default router;
