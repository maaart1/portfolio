const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.static("public"));
app.use("/css", express.static(__dirname + "/public/css"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("home");
})

app.get("/about", (request, response) => {
    response.render("about");
})

app.get("*", (request, response) => {
    response.render("404");
})

app.listen(3000, () =>{
    console.log("Start...")
})