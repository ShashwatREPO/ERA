import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const app = express();
const port = 3000;
app.use(cors({ origin: "*" }));

app.use(express.json());
dotenv.config();

const upload = multer({ dest: "uploads/" });

const fileManager = new GoogleAIFileManager(process.env.API_KEY);
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/generate-response", upload.single("image"), async (req, res) => {
  try {
    const fixedPrompt =
      "You are given a description of the injury that occurred to a person act as a first aid assistant and provide step by step methods help in first aid of that person. Give precise and accurate steps. If an image is provided to you analyze the image and then provide the necessary steps for the first aid. Keep the steps clear and in simple  language that is easy for the user to understand.";
    const userPrompt = req.body.prompt;
    const textPrompt = fixedPrompt + userPrompt;

    if (!textPrompt) {
      return res.status(400).json({ error: "Text prompt is required" });
    }

    let fileData = [];

    if (req.file) {
      const imagePath = req.file.path;

      const uploadResult = await fileManager.uploadFile(imagePath, {
        mimeType: req.file.mimetype,
        displayName: req.file.originalname,
      });

      fileData = [
        {
          fileData: {
            fileUri: uploadResult.file.uri,
            mimeType: uploadResult.file.mimeType,
          },
        },
      ];
    }

    const result = await model.generateContent([textPrompt, ...fileData]);

    res.json({ text: result.response.text() });
  } catch (error) {
    console.error("Error generating response:", error.message);
    res.status(500).json({ error: "Error generating response" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
