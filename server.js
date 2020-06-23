const express = require("express")

const app = express();
app.get("/myMessage", (request, response) => {
    const amount = request.query.amount;
    response.send("Hello World")
})

app.listen(3000, function() {
    console.log("hi")
})