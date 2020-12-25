import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(userRouter);

app.listen(5000, () => console.log("listening on port 5000"));
