import express from "express";
import cors from "cors";
import speechRoutes from "./routes/speech.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Rapper Prompter Backend is running...");
});

app.use("/speech", speechRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
