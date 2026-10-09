import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Categorias=sequelize.define("Categorias",{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    nome:{type:DataTypes.STRING,allowNull:false},
    cor:{type:DataTypes.STRING,allowNull:true},
    criado_em:{type:DataTypes.DATE,allowNull:false,defaultValue:DataTypes.NOW},
},{tableName:"categorias", timestamps:false})

Categorias.sync()

export default Categorias