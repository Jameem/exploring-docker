const express = require("express")
const redis = require("redis")

const app = express()
const client = redis.createClient()
client.set("visits", 0)

app.get("/", (req, res) => {
  client.get("visists", (err, visits) => {
    res.send("Number of Visits: " + visits)
  })

  client.set("visits", +visits + 1)
})

app.listen(8081, () => console.log("Listening on port 8081"))
