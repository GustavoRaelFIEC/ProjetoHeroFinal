const { z } = require("zod");

module.exports.schemaCadastro = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres").max(100, "O nome deve ter no máximo 100 caracteres"),
  email: z.email("E-mail inválido"),
  senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres").max(50, "A senha deve ter no máximo 50 caracteres"),
});
