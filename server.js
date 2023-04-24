const http = require("http");
require("dotenv").config();
const app = require("./app");

const server = http.createServer(app);
const port = process.env.PORT || 3600;
server.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
