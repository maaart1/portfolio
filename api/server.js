const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));

app.set("views", "./views");
app.set("view engine", "ejs");

// const url_path = `${__dirname}/api/v1`;

app.get("/home", (request, response) => {
    response.render("home");
})

app.get("/school", (request, response) => {
    response.render("school");
})

app.get("/experience", (request, response) => {
    response.render("experience");
})

app.get("/about", (request, response) => {
    response.render("about");
})

app.get("/navbar", (request, response) => {
    response.render("navbar");
})

app.get("/footer", (request, response) => {
    response.render("footer");
})

app.get("*", (request, response) => {
    response.render("404");
})

app.listen(5000, () => {
    console.log("Start...")
})