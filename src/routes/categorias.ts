import { Router } from "express";
import { atualizar, categorias, criar, remover } from "../controllers/categoriaController.js";
import { validarCategoria } from "../middlewares/Categoria.js";
const router=Router();

router.get("/categorias",categorias);
router.post("/categorias",validarCategoria,criar);
router.put("/categorias/:id",atualizar);
router.delete("/categorias/:id",remover);

export default router;