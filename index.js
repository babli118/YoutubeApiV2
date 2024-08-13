import helmet from "helmet";
import audioDlRoutes from "./routes/audioDl.js";
import videoRoutes from "./routes/video.js";
import videoDlRoutes from "./routes/videoDl.js";
import searchRoutes from "./routes/search.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/videoInfo", videoRoutes);
// app.use("/musicInfo", musicRoutes);
app.use("/videoDl", videoDlRoutes);
app.use("/audioDl", audioDlRoutes);
app.use("/search", searchRoutes);

const PORT = 3004;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
