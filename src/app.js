import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexão com sucesso");
});

const app = express();
routes(app);



app.delete("/livros/:id", (req,res) => {
    const index = buscaLivro(req.params.id);
    console.log(index);

    if(index > -1 ){
        livros.splice(index, 1);
        res.status(200).send("Livro deletado com sucesso!");
    }else {
        res.status(500).send("Livro não encontrado");
    }


});

export default app;