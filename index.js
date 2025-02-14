import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js"
import { errorHandler } from "./middlewares/errorMiddleware.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(errorHandler);

app.use("/api/users", userRoutes);
app.get('/', (req, res) => {
  res.send("APP is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on ${PORT}`);
});


export default app;
