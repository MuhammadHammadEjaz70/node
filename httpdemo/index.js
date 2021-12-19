const http = require("http");

http
  .createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
      case "/":
        res.write("<h1>My home page</h1>");

        break;
      case "/hammad.html":
        res.write("<h1>Hammad Gujjar</h1>");

        break;

      default:
        res.write("<h1>Page not found</h1>");

        break;
    }
    res.end();
  })
  .listen(8080);
