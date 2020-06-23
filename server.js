const express = require("express")

const app = express();
app.get("/cho", (request, response) => {
    const amount = request.query.amount;
    response.send(`amount${amount}`)
})

app.listen(3000, function() {
    console.log("hi")
})