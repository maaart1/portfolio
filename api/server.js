const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (request, response) => {
    response.render("./views/pages/index.ejs");
})

app.get("/about", (request, response) => {
    response.render("./views/pages/");
})

app.get("*", (request, response) => {
    response.render("404");
})

app.listen(3000, () =>{
    console.log("Start...")
})