const express = require("express");
const authRoute = require("./routes/auth-router");
const userRoute = require("./routes/user-router");
const chatRoute = require("./routes/chat-router");
const postRoute = require("./routes/post-router");
const socket = require("./models/SocketIO");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/auth", authRoute);

app.use("/user", userRoute);

app.use("/chat", chatRoute);

app.use("/post", postRoute);

app.use((error, req, res, next) => {
  res.status(error.errorCode);
  res.json({ message: error.message });
});

const server = app.listen(process.env.LISTENING_PORT || 3000);

socket.init(server);
