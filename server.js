const express = require("express");
const cors = require("cors");
const auth = require("./route/auth");
const users = require("./route/users");
const course = require("./route/course");
const blog = require("./route/blog/blog");
const instructor = require("./route/instructors/instructor");
const app = express();
const bodyParser = require('body-parser');
const server = require("http").createServer(app);
server.listen(process.env.PORT || 3001);

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: [
      "http://172.16.0.83:81",
      "http://172.16.0.83:82",
      // "http://172.16.0.133:82",
      "http://192.168.0.116",
      "http://10.102.71.175",
    ],
  })
);

app.use("/", auth);
app.use("/users", users);
app.use("/course", course);
app.use("/blog", blog);
app.use("/instructor", instructor);
