//requisitando os modulos
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

//configurando o express para o postman e para usar a pagina
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

//configurando o banco de dados
mongoose.connect("mongodb://127.0.0.1:27017/foreverflowers", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//criando a model do seu projeto
const UsuarioSchema = new mongoose.Schema({
  nome: { type: String },
  senha: { type: String },
});

const ProdutoArtificial = new mongoose.Schema({
  idProdutoArtificial: { type: String },
  descricao: { type: String },
  fornecedor: { type: String },
  dataFabri: { type: String },
  estoque: { type: Number }
});

const Produto = mongoose.model("Produto", ProdutoArtificial);
const Usuario = mongoose.model("Usuario", UsuarioSchema);

//configuração dos roteamendos
//cadastrousuario
app.post("/cadastrousuario", async (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;

  //validação de campos

  const usuario = new Usuario({
    nome: nome,
    senha: senha
  });

  try {
    const newUsuario = await usuario.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newUsuario._id });
  } catch (error) {}
});

app.post("/cadastroproduto", async (req, res) => {
  const idProdutoArtificial = req.body.idProdutoArtificial;
  const descricao = req.body.descricao;
  const fornecedor = req.body.fornecedor;
  const dataFabri = req.body.dataFabri;
  const estoque = req.body.estoque;

  const produto = new Produto({
    idProdutoArtificial: idProdutoArtificial,
    descricao: descricao,
    fornecedor: fornecedor,
    dataFabri: dataFabri,
    estoque: estoque,
  });

  try{
    const newProduto = await produto.save();
    res.json({ error: null, msg: "Cadastro ok", UsuarioId: newProduto._id });
  } catch (error){}
  
});
if(estoque > 26){
  console.log("O número excedeu o limite de estoque")
}
else if(estoque == 0){
  console.log("O número de produtos no estoque não pode ser nulo, digitar um numero entre 1 e 26");
}

//rota de get de formulario
app.get("/cadastrousuario", async (req, res) => {
  res.sendFile(__dirname + "/cadastrousuario.html");
});

app.get("/cadastroproduto", async (req, res) => {
  res.sendFile(__dirname + "/foreverflowers.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

