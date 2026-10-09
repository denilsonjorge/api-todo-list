import type { Request,Response } from "express";
import Tarefas from "../models/Tarefas.js";
// import { tarefaExiste } from "../services/Tarefas.js";
import { categorias } from "./categoriaController.js";
import Categorias from "../models/Categorias.js";

export async function tarefas(req:Request,res:Response) {
    const taredas=await Tarefas.findAll();
    return res.json({msg:"Todas as tarefas",taredas});
}
export async function Criar(req:Request,res:Response) {
    const tarefasExiste=await Tarefas.findAll({where:{titulo:req.body.titulo}})
    if(!(tarefasExiste.length===0)){
        return res.status(400).json({msg:"já tem uma tarefa com este titulo"})
    }
    await Tarefas.create(req.body).then(()=>{
        return res.status(201).json({msg:"Nova tarefa Adicionada!"});
    }).catch(erro=>{
        return res.status(500).json({msg:"A categoria informada não existe!",erro})
    })
   
}
export async function atualizar(req:Request,res:Response) {
    const id=Number(req.params.id);
    const {titulo,descricao}=req.body
    if(!req.params.id)return res.status(403).json({msg: "informe o id!"});
    if(!titulo && !descricao)return res.status(403).json({msg: "informe o campo que pretende alterar!"});
    const tarefa=await Tarefas.findByPk(id);
    if(!tarefa){
        return res.status(400).json({msg: "Tarefa não encontrada!"})
    }
    try {
        Tarefas.update({titulo:titulo,descricao:descricao},{where:{id}})     
        return res.json({msg:"tarefa atualizada",data:tarefa})
    } catch (erro) {
        return res.status(500).json({msg:"Erro no Servidor",erro})   
    }
    // await Tarefas.update({titulo:titulo,descricao:descricao},{where:{id}}).then(()=>{
    //     return res.json({msg:"tarefa atualizada",data:tarefa})
    // }).catch(erro=>{
    //     return res.status(500).json({msg:"Erro no Servidor",erro})
    // })
}
export async function remover(req:Request,res:Response) {
    const {id}=req.params;
    const tarefa=await Tarefas.findByPk(Number(id));
    if(!id){
        return res.status(400).json({msg:"Não foi possivel remover esta tarefa"});
    }
    await Tarefas.destroy({where:{id}})
    res.json({msg:"tarefa removida!"})
}
export async function alterarEstado(req:Request,res:Response) {
    const {id}=req.params;
    const tarefa=await Tarefas.findByPk(Number(id));
    // console.log(tarefa)
    let estado=tarefa?.estado==="pendente"?"concluido":"pendente";
    await Tarefas.update({estado: estado},{where:{id}})
    res.json({msg:"Estado atualizado!",tarefa})
}
