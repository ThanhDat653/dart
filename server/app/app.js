import express from "express";
import { __dirname, __filename } from "./libs/path.js";
import configViewEngine from "./config/viewEngine.js";
import router from "./routes/index.js";
import { connection } from "./database/db.js";
import { productData } from "./mocks/products.js";
import "./config/load.env.js";
import cors from "cors";

// console.log(process.env.HOST_NAME);
const port = process.env.PORT || 8000;
const app = express();

// Config view engine
configViewEngine(app);

// Config Router
app.use(cors());
app.use("/", router);

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
