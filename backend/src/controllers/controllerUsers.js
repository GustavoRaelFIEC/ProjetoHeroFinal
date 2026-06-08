const db = require("../config/db");
const schemaCadastro = require("../schemas/schemaCadastro");

exports.listarUsers = async (req, res) => {
  res.send({ message: "Usuários listados com sucesso!" });
};

exports.cadastrarUser = async (req, res) => {
  res.send({ message: "Usuários cadastrado com sucesso!" });
};