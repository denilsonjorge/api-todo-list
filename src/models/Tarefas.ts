import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Tarefas extends Model{
    declare id: number;
    declare titulo: string;
    declare descricao: string;
    declare estado: "pendente" | "concluido";
}

Tarefas.init({
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    titulo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estado:{
        type: DataTypes.ENUM("pendente","concluido"),
        allowNull: false,
        defaultValue: "pendente"
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        references:{
            model:"categorias",
            key:"id"
        }
    },
    criado_em:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    atualizado_em:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
},{sequelize,timestamps:false,tableName:"tarefas"})

Tarefas.sync();

export default Tarefas