import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./src/router/userRouter"

const port = 3000

// const cors = require('cors');
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
)

// app.use(routes);
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("server is running!")
})

app.post("/users", userRouter)

app.listen(port, () => {
    console.log(`
  ################################################

       🛡️  Server listening on port: ${port} 🛡️

  ################################################
`);
});