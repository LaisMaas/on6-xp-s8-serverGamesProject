const express = require("express")
const app = express()
const router = require("./route/jogosRoute")

app.use("/", router)

module.exports = app


/*const app = require('./src/app')

const PORT = 8088

app.listen(PORT, function (request, response) {
    console.log("O Nosso app esta rodando na porta " + PORT)
})*/