const express = require("express")

const app = express();
app.get("/myMessage", (request, response) => {
    const amount = request.query.amount;
    response.send("Hello World")
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("hi")
})