const express = require("express")
const routers = require('./src/routes')
const bodyParser = require('body-parser')

app.set("view engine", "html")
app.engine("html", require("hbs").__express)
app.set("views", __dirname + "/src/views")

app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({extended: true}))

app.use(routers)

app.listen(3333, () => console.log('Server on in 3333'))