import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ProductRoute } from "./routes/ProductRoute.js";
import { UserRoute } from "./routes/UserRoute.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Config static files
app.use(express.static(path.join(__dirname, "public")));

// Config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Config Router
app.use("/user", UserRoute);
app.use("/product", ProductRoute);
app.get("/test", (req, res) => {
   res.render("sample");
});
app.use("/", (req, res) => {
   res.send("Welcome to my server, this is homepage");
});

var port = process.env.PORT || "8000";

app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`);
});
