const http = require("http");

const users = [
  {
    id: 1,
    name: "John",
    gender: "m",
  },
  {
    id: 2,
    name: "Rosa",
    gender: "w",
  },
];

const responseUsers = JSON.stringify(users);

// GET '/users'
// Response:
// [
//   {
//     "id": 1,
//     "name": "John",
//     "gender": "m",
//   },
//   {
//     "id": 2,
//     "name": "Rosa",
//     "gender": "w",
//   },
// ];

http
  .createServer(function (req, res) {
    if (req.url === "/users") {
      res.write(responseUsers);
    } else if (req.url === "/hello") {
      res.write("Hello!");
    } else if (req.url === "/bye") {
      res.write("Bye");
    } else {
      res.write("Hello World!");
    }

    res.end();
  })
  .listen(3000);

// 192.168.1.127:3000
