import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import transactionsRoute from "./routes/transactions.route.js";

dotenv.config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;



app.use("/api/transactions", transactionsRoute)



initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
  });
});
