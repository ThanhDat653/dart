import { createConnection } from "mysql";

const connection = createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "dart_shop",
});

connection.connect((err) => {
   if (err) throw err;
   console.log("Connected to MySQL Server!");
   connection.query("SELECT * FROM products", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
   });
});
