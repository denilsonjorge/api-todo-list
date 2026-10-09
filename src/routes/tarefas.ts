import { Router } from "express";
import { alterarEstado, atualizar, Criar, remover, tarefas } from "../controllers/tarefaController.js";
import { validarTarefas } from "../middlewares/Tarefas.js";

const router=Router();

router.get("/tarefas",tarefas);
router.post("/tarefas",validarTarefas,Criar);
router.put("/tarefas/:id",atualizar);
router.delete("/tarefas/:id",remover);
router.put("/tarefas/:id/concluir",alterarEstado);

export default router;