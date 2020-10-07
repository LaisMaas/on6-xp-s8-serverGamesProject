const { response, request } = require("../app")
const games = require("../model/jogos.json")


const getAll = (request, response) =>{
    console.log(request.url)
    response.status(200).send(novaListaJogos)
}


const listar = jogos.map(jogo =>{
    const listarJogos = {
        id: jogo.id,
        name: jogo.name,
        genre: jogo.genre,
        plataforms: jogo.plataforms,
        slug: jogo.slug,
        summary: jogo.summary,
        first_release_date: jogo.first_release_date,
        company: jogo.company,
        cover: jogo.cover,
    }
    return jogos
 })
 

   

const getJogosById = (request, response) =>{
    const id = request.params.id 
    const jogo = jogos.find(item => item.id == id)
    if (jogo) {
        response.status(200).send(jogo)
    } else {
        response.status(404).send("O jogo informado não foi encontrado!")
    }
}

module.exports = {
    getAll,
    getJogosById
}