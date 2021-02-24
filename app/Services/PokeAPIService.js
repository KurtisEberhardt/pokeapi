import {ProxyState} from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import {pokeApi} from "./AxiosService.js"
debugger;

class PokeApiService{
    constructor(){
        console.log("pokeapiservice")
        this.getPokemonApi()
    } 
    async getPokemonApi(){
        try {
            const res = await pokeApi.get("")
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    }
    async setActivePokemon(){
        try {
            let res = await pokeApi.get()
            console.log(res)
            console.log()
            ProxyState.activePokemon = new Pokemon(res.data)
        } catch (error) {
            console.error(error)
        }
    }
}



export const pokeApiService = new PokeApiService()