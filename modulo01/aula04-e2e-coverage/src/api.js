const http = require("http");

const { once } = require("events");

const DEFAULT_USER = {
  username: "ErickWendel",
  password: "123",
};

const routes = {
  "/contact:get": (req, res) => {
    res.write("Contact us page");
    return res.end();
  },
  "/login:post": async (req, res) => {
    const user = JSON.parse(await once(req, "data"));
    const toLower = (text) => text.toLowerCase();
    if (
      !Object.entries(DEFAULT_USER).every(([field, value]) =>
        field === "username"
          ? toLower(user[field]) === toLower(value)
          : user[field] === value
      )
    ) {
      res.writeHead(401);
      res.end("Logging failed!");
      return;
    }
    res.end("Log in succeeded!");
  },
  default: (req, res) => {
    res.writeHead(404);
    return res.end("Not Found");
  },
};

const handler = (req, res) => {
  const { url, method } = req;
  console.log(url, method);

  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

  const chosen = routes[routeKey] || routes.default;
  return chosen(req, res);
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("Servidor rodando na porta 3000!"));

module.exports = app;
