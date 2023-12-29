import express from "express";

import { ProductRoute } from "./routes/ProductRoute.js";
import { UserRoute } from "./routes/UserRoute.js";

const app = express();

app.use("/user", UserRoute);
app.use("/product", ProductRoute);

var port = process.env.PORT || "8000";

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
