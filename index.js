import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./routes/hello.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(3000, () => console.log("listening on port 3000"));
