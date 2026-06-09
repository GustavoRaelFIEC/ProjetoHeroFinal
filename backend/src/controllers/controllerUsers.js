const db = require("../config/db");
const { schemaCadastro } = require("../schemas/schemaCadastro");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.listarUsers = async (req, res) => {
  res.send({ message: "Usuários listados com sucesso!" });
};

exports.cadastrarUser = async (req, res) => {  
  try {
    const result = schemaCadastro.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ message: result.error });
    }

    const { nomeCompleto, email, senha } = result.data;

    // RoundSalt
    const roundSalt = 10;

    const senhaHash = await bcrypt.hash(senha, roundSalt);

    await db.query(
      "INSERT INTO recrutador (nome_completo, email, senha) VALUES (?, ?, ?)",
      [nomeCompleto, email, senhaHash],
    );

    // JWT
    const token = jwt.sign({ id: result.data.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!", token });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "Erro interno no servidor" });
  }
};
