

const express = require("express");
const app = express();
const getTime = require("./getTime.js");

app.use("/", express.static("./public"));



app.get("/:date", (req, res) => {
    const output = getTime(req.params.date);
    res.send(JSON.stringify(output));
});

app.listen(process.env.PORT || 3000);