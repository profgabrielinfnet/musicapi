const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const internalUser = {
  username: null,
  password: null,
  token: null,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user/login", (req, res) => {
  const { username, password } = req.body;

  if (
    !internalUser.username ||
    !(internalUser.username == username && internalUser.password == password)
  )
    return res.status(401).send({
      message: "username or password invalid!",
    });

  internalUser.token = Math.floor(Math.random() * 20000000);
  res.send({ token: internalUser.token });
});

app.post("/user/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password || username == "" || password == "")
    return res
      .status(500)
      .send({ message: "You should send a username and a password" });

  internalUser.username = username;
  internalUser.password = password;

  return res.send({ message: "user created successfully" });
});

app.get("/movies", (req, res) => {
  let [_, token] = req.headers.authorization.split(" ");
  if (
    token == null ||
    internalUser.token == null ||
    !(String(token) == String(internalUser.token))
  )
    return res.status(401).send({ message: "User not authorized" });
  res.send([
    {
      id: "1",
      album: "Angra",
      img: "https://m.media-amazon.com/images/I/51Yee8dkecL._UF1000,1000_QL80_.jpg",
    },
    {
      id: "2",
      album: "Legiao",
      img: "https://www.vagalume.com.br/legiao-urbana/discografia/legiao-urbana.jpg",
    },
    {
      id: "3",
      album: "Iron maden",
      img: "https://pbs.twimg.com/media/F9c7D_vX0AAkl7C?format=jpg&name=large",
    },
    {
      id: "4",
      album: "Guns",
      img: "https://www12.senado.leg.br/radio/1/capitulo-rock/2020/01/31/guns-n2019-roses/guns_n_roses.jpg/@@images/24c8f793-0823-4756-b0e7-3c1f1b71fb1e.jpeg",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
