/**
 *  Hello World #048
 *  By @mcecode
 */

module.exports = () => {
  const cp = require("child_process");
  const fs = require("fs");
  const path = require("path");

  const server = `${__dirname}${path.sep}hello-world-server.js`;

  fs.writeFileSync(
    server,
    `
      const http = require("http");

      http
        .createServer((req, res) => {
          if (req.method === "GET" && req.url === "/hello-world") {
            res.end("Hello, World");
          }
        })
        .listen(3000, "localhost")
        .unref();

      http
        .request("http://localhost:3000/hello-world", (res) => {
          let body = "";

          res
            .on("data", (chunk) => { body += chunk })
            .on("end", () => { console.log(body) });
        })
        .end();
    `,
    "utf-8"
  );

  const res = (cp.execFileSync("node", [server]) + "").trim();

  fs.rmSync(server);

  return res;
};

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null;
