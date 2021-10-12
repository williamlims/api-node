const express = require("express");
const app = express();

// to receive json
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRouter = require("./routers/index");
const todoRouter = require("./routers/todo");

app.use("/", indexRouter);
app.use("/todos", todoRouter);



module.exports = app;