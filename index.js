const StaticServer = require("static-server");

const server = new StaticServer({
  rootPath: "./src/",
  port: 8080,
  cors: "*"
});

server.start(() => {
  console.log(`Server starting at port ${server.port}`);
});
