// Serviços de systems
// Aqui será inserido os métodos para Ler, cadastrar, Alterar e Excluir systems

// Importando o Model
import system from "../models/Systems.js"

class systemService {
    // Serviço/MÉTODO para ler os sistemas
    async getAll() {
        // Tentativa da promessa (sucesso)
        try {
            //  o método .find() do mongoose busca registros
            const systems = await system.find()
            return systems
            // Caso ocorra um erro será executado o catch
        } catch (error) {
            console.log(error)
        }
    }
    // MÉTODO PARA CADASTRAR sistemaS
    async Create(title, year, price, descriptions) {
        try {
            // Enviando os dados a serem cadastrados para o Model
            const newsystem = new system({
                // title: title,
                title,
                year,
                price,
                descriptions
            });
            // Aguardar a operação de cadastro
            await newsystem.save(); // .save() é o método do mongoose para cadastrar
        } catch (error) {
            console.log(error);
        }
    }
    // MÉTODO PARA EXCLUIR UM sistema
    async Delete(id) {
        try {
            await system.findByIdAndDelete(id);
            // O método findByIdAndDelete() do mongoose busca um registro pela ID e deleta
            console.log(`O sistema com a id ${id} foi deletado.`)
        } catch (error) {
            console.log(error)
        }

    }

    //  MÉTODO PARA ALTERAR UM sistema
    async Update(id, title, year, price, descriptions) {
        try {
            await system.findByIdAndUpdate(id, {
                // title : title
                title,
                year,
                price,
                descriptions
            })
            console.log(`O sistema com a id ${id} foi alterado.`)
        } catch (error) {
            console.log(error)
        }
    }

    // MÉTODO PARA LISTAR UM REGISTRO ÚNICO
    async getOne(id) {
        try {
            const system = await system.findOne({ _id: id })
            // findOne : método do Mongoose para selecionar um registro único
            return system
        } catch (error) {
            console.log(error)
        }
    }
    // ENCERRA A CLASSE
}
// Exportando a classe
export default new systemService()

