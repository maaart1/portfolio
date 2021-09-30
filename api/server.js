const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));

app.set("views", "./views");
app.set("view engine", "ejs");

// const url_path = `${__dirname}/api/v1`;

app.get("/", (request, response) => {
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

app.get("*", (request, response) => {
    response.render("404");
})

app.listen(5000, () => {
    console.log("Start...")
})