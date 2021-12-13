var express = require("express");
var path = require("path");
var app = express();

const port = 8080;

app.use(express.static("./dist/anugartest"));

app.get("/*", (req, res, next) => {
    res.sendFile("index.html", { root: "dist/anugartest" });
});
app.listen(port, () => {
    console.log(`App is running on Localhost:${port}`);
});
