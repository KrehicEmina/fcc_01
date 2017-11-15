const express = require("express");
const app = express();

app.use("/", express.static("./public"));

/*
app.get("/:time", function (req, res) {
    const output = parseTime(req.params.time);
    res.send(JSON.stringify(output));
});
*/

app.listen(process.env.PORT || 3000);