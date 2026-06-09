const express = require("express");
const cors = require("cors");
const routes = require("./src/routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT_SERVER, () => console.log("Servidor Rodando"));