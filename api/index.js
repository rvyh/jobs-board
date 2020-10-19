const express = require('express')
const app = express()
const port = 3001

// redis
const redis = require("redis");
const client = redis.createClient();
// wrap methods with promises using the built-in Node.js util.promisify
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

app.get('/jobs', async (req, res) => {
  const jobs = await getAsync("github");
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from

  res.send(jobs); // teacher adds return
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})