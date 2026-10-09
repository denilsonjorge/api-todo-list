import {Sequelize} from "sequelize";

const sequelize = new Sequelize("listadetarefas","root","1234",{
    host:"localhost",
    dialect:"mysql"
})

try {
    sequelize.authenticate();
    console.log("base de dados conectado!")
} catch (error) {
    console.log(error)
}

export default sequelize