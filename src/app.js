import express from "express";
import cors from "cors";
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
app.use(cors());
routes(app);

export default app;