const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const internalUser = {
  username: null,
  password: null,
  token: null,
};

const internalUsers = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/user/login", (req, res) => {
  const { username, password } = req.body;

  const internalUser = internalUsers.find((user) => user.username == username);

  if (!internalUser?.username) {
    return res.status(400).send({
      message: "User not registered!",
    });
  }

  if (
    internalUser?.username &&
    !(internalUser?.username == username && internalUser?.password == password)
  )
    return res.status(401).send({
      message: "username or password invalid!",
    });

  const token = Math.floor(Math.random() * 20000000);
  internalUsers.forEach((internalUser) => {
    if (internalUser.username == username) {
      internalUser.token = token;
    }
  });
  res.send({ token: internalUser.token });
});

app.post("/user/register", (req, res) => {
  const { username, password } = req.body;

  const userAlreadyExists = internalUsers.find(
    (user) => user?.username == username
  );

  if (userAlreadyExists) {
    return res.status(400).send({ message: "User already registered " });
  }

  if (!username || !password || username == "" || password == "")
    return res
      .status(500)
      .send({ message: "You should send a username and a password" });

  const internalUser = {
    username: username,
    password: password,
    token: null,
  };

  internalUsers.push(internalUser);

  return res.send({ message: "user created successfully" });
});

app.use((req, res, next) => {
  let [_, token] = req.headers.authorization.split(" ");
  const internalUser = internalUsers.find((user) => user.token == token);
  if (
    token == null ||
    internalUser?.token == null ||
    !(String(token) == String(internalUser.token))
  )
    return res.status(401).send({ message: "User not authorized" });
  next();
});

app.get("/albums", (_, res) => {
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

app.get("/stories", (_, res) => {
  res.send([
    {
      id: "1",
      name: "Nathanzinho",
      img: "https://uploads.metropoles.com/wp-content/uploads/2022/08/17164733/WhatsApp-Image-2022-08-17-at-16.36.56-835x1024.jpeg",
    },
    {
      id: "2",
      name: "Anderson Paak",
      img: "https://monkeybuzz.com.br/wp-content/uploads/2019/06/hollie-fernando-1920x1280.jpg",
    },
    {
      id: "3",
      name: "Beyonce",
      img: "https://i.em.com.br/I-gX53eZOL0FN60bnwMrmcgTRo4=/750x0/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/08/09/1543194/beyonce_1_83139.jpg",
    },
    {
      id: "4",
      name: "Madonna",
      img: "https://veja.abril.com.br/wp-content/uploads/2022/03/Madonna.jpg.jpg?quality=90&strip=info&w=680&h=453&crop=1",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
