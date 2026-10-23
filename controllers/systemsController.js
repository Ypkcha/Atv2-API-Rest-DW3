// Controller de sistemas de rpg
// O controller tratará as requisições do cliente
// Importando o service
import systemService from '../services/systemsService.js';
// Importando o ObjectID do mongodb
import { ObjectId } from 'mongodb';

// Função que irá tratar a requisição para LISTAR os sistemas
const getAllSystems = async (req, res) => {
    try {
        const systems = await systemService.getAll()
        res.status(200).json({ systems: systems })
        // Cod. 200 - OK - Requisição feita com sucesso
    } catch (error) {
        console.log(error)
        // Tratando a resposta que api irá enviar em caso de erro
        res.status(500).json({ error: 'Ocorreu um erro ao listar os sistemas. Erro interno do servidor.' })
    }
}
// Função que irá tratar a requisição para CADASTRAR os sistemas
const createSystem = async (req, res) => {
    try {
        // const title = req.body.title
        // const year = req.body.year
        // Coletando dados enviados (formulário, da requisição, etc) e gravando nas variáveis
        
        const { title, year, price, descriptions } = req.body;

        // Enviando dados para o Service cadastrar
        await systemService.Create(title, year, price, descriptions);
        res.status(201).json({ message: "Sistema de rpg cadastrado com sucesso!" })
        // Cod. 201 (CREATED) -> Recurso criado com sucesso no servidor
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}

// Função que trata a requisição para EXCLUIR um sistema
const deleteSystem = async (req, res) => {
    try {
        // Coletando a ID da rota
        const id = req.params.id;
        // Fazendo a validação do ObjectID        
        if (ObjectId.isValid(id)) {
            await systemService.Delete(id);
            res.sendStatus(204);
            // Cod. 204 (NO CONTENT) : Requisição bem sucedida, porém não há conteúdo para retornar.
        } else {
            res.status(400).json({ error: 'Requisição mal formada, ID inválido.' })
            // Cod. 400 : BAD REQUEST
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

// Função que trata a requisição para ALTERAR um sistema
const updateSystem = async (req, res) => {
    try {
        // Coletando a ID da rota
        const id = req.params.id
        // Validando o ObjectID
        if (ObjectId.isValid(id)) {
            // Coletando os dados que serão alterados
            const { title, year, price, descriptions } = req.body
            // Enviando os dados para o service
            await systemService.Update(id, title, year, price, descriptions);
            res.status(200).json({ message: 'Sistema de rpg atualizado com sucesso.' });
        } else {
            res.status(400).json({ error: 'Requisição mal formada, ID inválido.' })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Erro interno do servidor.' })
    }
}

// Função que trata a requisição para LISTAR um sistema ÚNICO
const getOneSystem = async (req, res) => {
    try {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            const system = await systemService.getOne(id);
            // Verificando se houve retorno na busca
            if (!system) {
                res.status(404).json({ error: 'Sistema de rpg não encontrado.' });
                // Cod. 404 - Not found
            } else {
                res.status(200).json({ system });
            }
        //  Se o ID não for válido
        } else {
            res.status(400).json({error: 'O ID informado é inválido.'})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Erro interno do servidor.' });
    }
}
// Exportando as funções
export default { getAllSystems, createSystem, deleteSystem, updateSystem, getOneSystem }