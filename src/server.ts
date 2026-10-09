import express from "express";
import routerTarefas from "./routes/tarefas.js";
import routerCategorias from "./routes/categorias.js";
const app=express()
const port = 8080;


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",routerTarefas,routerCategorias)


app.listen(port,()=>console.log(`servidor rodando em http://localhost:${port}`));
