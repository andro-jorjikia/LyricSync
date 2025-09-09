import express from "express";

const router = express.Router();

// Mock endpoint for speech recognition
router.post("/recognize", async (req, res) => {
  // Placeholder: later replace with OpenAI Whisper or Google Speech API
  res.json({ text: "Yo, I’m stepping to the mic tonight" });
});

export default router;