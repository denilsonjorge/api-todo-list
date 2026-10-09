import type { NextFunction,Request,Response } from "express";
import {z} from "zod";
import Categorias from "../models/Categorias.js";

export function validarCategoria(req:Request,res:Response, next:NextFunction){
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            erro: "Nenhum dado foi enviado!"
    })}
    const tarefaSchema=z.object({
        nome:z
        .string()
        .trim()
        .min(1,"A categoria é obrigatoria!")
        .max(150,"A categoria deve ter no máximo 150 caracteres")
    })
    const resultado=tarefaSchema.safeParse(req.body)
    if(!resultado.success){
        return res.status(403).json({
            erro: resultado.error.issues[0]?.message
        })
    }
    next()
}

export async function categoriaExiste(nome:string) {
    const categoria=await Categorias.findAll({where:{nome}});
    console.log("CATEGORIAS:",categoria)
    
    if(categoria){
        return true;
    }else{
        return false;
    }
}