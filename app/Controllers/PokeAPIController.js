import {ProxyState} from "../AppState.js"
import {pokeApiService} from "../Services/PokeAPIService.js"
function _drawPokeApi(){
    let pokemon = ProxyState.pokeAPI
    console.log(pokemon)
    console.log('draw fn')
    let template = ""
    pokemon.forEach(p => template += `<li onclick="app.pokeApiController.setActivePokemon('${p.name}')"> ${p.name}</li>`)
    document.getElementById('pokemon-api').innerHTML= template;
}
function _drawActivePokemon(){
    if(ProxyState.activePokemon){
        document.getElementById("active-pokemon").innerHTML = ProxyState.activePokemon.ActiveTemplate
    }else
    document.getElementById('active-pokemon').innerHTML=""
}
export default class PokeApiController{
    constructor(){
        console.log("PokeApiController")
        ProxyState.on('pokeAPI', _drawPokeApi)
        ProxyState.on('activePokemon', _drawActivePokemon)
        
    }
    setActivePokemon(index){
        console.log(index)
        pokeApiService.setActivePokemon()
    }
}