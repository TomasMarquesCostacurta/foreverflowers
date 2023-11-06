const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/foreverflowers", 
{  useNewUrlParser: true,  useUnifiedTopology: true});


const UsuarioSchema = new mongoose.Schema({  
    email: { type: String},  
    senha: { type: Number}});

const Usuario = mongoose.model("Usuario", UsuarioSchema);
    
const produtoartificial = new mongoose.Schema({
    id_produtoartificial: { type : String}, 
    Descricao :  {type : String},
    Fornecedor : {type : String},
    DataFabricacao : {type : Date},
    QuantidadeEstoque : {type : Number}
});

const produtoartificial = mongoose.model("ProdutoArtificial", produtoartificial);

app.post("/cadastromodelFovererFlowers", async (req, res) =>{
     const id_produtoartificial = req.body.id_produtoartificial;
     const Descricao = req.body.Descricao;
     const Fornecedor = req.body.Fornecedor;
     const DataFabricacao = req.body.DataFabricacao;
     const QuantidadeEstoque = req.body.QuantidadeEstoque
})

const foreverflowers = new produtoartificial({
    id_produtoartificial: id_produtoartificial,
    Descricao : Descricao,
    Fornecedor : Fornecedor,
    DataFabricacao : DataFabricacao,
    QuantidadeEstoque : QuantidadeEstoque
})

try{
    const foreverflowers =  await produtoartificial.save();
    res.json({error : null, msg: "Cadastro ok",
    UsuarioId : newprodutoartificial._id});
}catch (error) {};
});



app.post("/cadastrousuario", async (req, res) => {
    const senha = req.body.senha;
    const email = req.body.email;})



const usuario = new Usuario({
    senha: senha,
    email: email
});

try {
    const newUsuario =  await usuario.save();
    res.json({ error: null, msg: "Cadastro ok", 
    UsuarioId: newUsuario._id });
  } catch (error) {};


  app.get("/", (req, res)=> {
    //primeira rota de teste
    res.json({message : "Rota de teste será trocada!!!"});
    });
    //escutando a porta
    app.listen(port, ()=>{
    console.log(`O backend está rodando na porta ${port}`)
    });