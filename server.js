const express = require("express")
const path = require("path")

const app = express()
const dirPath = path.join(__dirname, "public")
const port = process.env.PORT || 999

app.use(express.static(dirPath))

app.get("/", (req, res) => {
  res.sendFile(path.join(dirPath, "index.html"))
})
app.get("/home", (req, res) => {
  res.sendFile(path.join(dirPath, "maintain.html"))
})

app.listen(port, console.log(`listening....... ${port}`))
