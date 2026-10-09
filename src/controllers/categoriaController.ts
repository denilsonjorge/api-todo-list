import type { Request,Response } from "express"
import Categorias from "../models/Categorias.js"
import { categoriaExiste } from "../middlewares/Categoria.js"

export async function categorias(req:Request,res:Response) {
    const categorias=await Categorias.findAll();
    res.json({msg:"Todas as categorias",categorias})
}
export async function criar(req:Request,res:Response) {
    const categoria=await Categorias.findAll({where:{nome:req.body.nome}});
    // console.log(categoria)
    if(!(categoria.length==0)){
       return res.status(400).json({msg:"Está categoria já este!"}) 
    }
    await Categorias.create({nome:req.body.nome})
    .then(()=>{
        return res.status(201).json({msg:"criada categoria '"+req.body.nome+"'!"})
    })
    .catch(erro=>{
        console.log(erro)
        return res.status(500).json({
            msg:"Não foi possivel criar categoria",
            erro
        })
    })
}
export async function atualizar(req:Request,res:Response) {
    if(!req.params.id){
        return res.status(400).json({msg:"informe o id da categoria"})
    }
    if(!req.body.nome || req.body.nome.length===0){
        return res.status(400).json({msg:"O nome é obrigatorio"})
    }
    const id = Number(req.params.id)
    const categorias=await Categorias.findByPk(id);
    if(!categorias){
        return res.status(400).json({msg:"não é possivel atualizar categoria com id:"+id})
    }
    if(categorias.dataValues.nome===req.body.nome){
        return res.status(200).json({msg:"Nenhuma alteração foi aplicada!"});
    }
    await Categorias.update({nome:req.body.nome},{where:{id}}).then(()=>{
        return res.status(200).json({msg:"Categoria atualizada!"})
    }).catch(erro=>{
        console.log(erro)
        return res.status(500).json({msg:"Não foi possivel atualizar categoria",erro})
    })
}
export async function remover(req:Request,res:Response) {
    const id = Number(req.params.id)
    if(!id)return res.status(400).json({msg:"informe o id"})
    const categorias=await Categorias.findByPk(id);
    if(!categorias){
        return res.status(400).json({msg: "nenhuma categoria encontrada com este id"})
    }
    await Categorias.destroy({where:{id}}).then(()=>{
        return res.status(200).json({msg:`Categoria Excluida com sucesso!'`})
    }).catch(erro=>{
        return res.status(500).json({msg:"não é possivel excluir categoria",erro})
    })
}