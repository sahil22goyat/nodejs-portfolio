const express = require("express");
const cors = require("cors");
const userouter = require("./routes/index.js");
const path = require("path");
const app = express();
const mongodb=require("./connection.js")
const PORT = 8000;
const MONGO_URI="mongodb+srv://admin:admin@cluster0.zcypud8.mongodb.net/reactfrom?retryWrites=true&w=majority";

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, 'public')));
mongodb(MONGO_URI);


app.use(cors());

app.use("/", userouter);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
