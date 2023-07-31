import express from "express";
import cors from "cors";
import route from "./routes";
import { connectToDB } from "./utils/database";
import dotenv from "dotenv"
dotenv.config()
const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
await connectToDB();

app.use(route);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));