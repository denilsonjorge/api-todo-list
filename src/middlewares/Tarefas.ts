import type { NextFunction,Request,Response } from "express";
import {z} from "zod";
import Tarefas from "../models/Tarefas.js";

export function validarTarefas(req:Request,res:Response, next:NextFunction){
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            erro: "Nenhum dado foi enviado"
    })}
    const tarefaSchema=z.object({
        titulo:z
        .string("O titulo é obrigatorio")
        .trim()
        .min(3,"o titulo deve ter pelo menos 3 caraters")
        .max(100,"Titulo demasiado grande"),
        descricao:z
        .string()
        .optional(),
        categoria_id: z
        .number("informe o id da categoria")
        .int()
        .positive()
        
    })
    const resultado=tarefaSchema.safeParse(req.body)
    if(!resultado.success){
        return res.status(403).json({
            erro: resultado.error.issues[0]?.message
        })
    }
    next()

}