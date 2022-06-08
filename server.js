require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const server = http.createServer(app);

const PORT = process.env.PORT || 4444;

server.listen(PORT, () => {
  console.log(`server l on ${PORT}`);
});
