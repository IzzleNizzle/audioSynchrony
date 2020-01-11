const express = require("express");

const PORT = 3030

var app = express();

app.use(express.static('./'))

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});