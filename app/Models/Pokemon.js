export default class Pokemon{
    constructor(data){
        this.name = data.name 
        this.img = data.img
        this.description = data.desc || data.description
        this.weight = data.weight || "unimaginable"
        this.height = data.height || "bigger than you"
        this.types = data.types
        this._id = data._id
    }
    get ActiveTemplate(){
        return /*html*/`
        <div class="card">
                        <div class="card-body">
                            <p>${this.img}<p>
                            <h3 class="card-title">Pokemon Name: ${this.name}</h3>
                            <h5 class="card-text">Description: ${this.description}</h5>
                            <p class="card-text">Weight: ${this.weight}</p>
                            <p class="card-text">Height: ${this.height}</p>
                            <p class="card-text">Type: ${this.types}</p>
                            ${this.ButtonBuilder}
                        </div>
          </div>
        `
    }
get ButtonBuilder(){
    if(this._id){
        return `<button class="btn btn-danger" onclick="app.pokeApiController.releasePokemon()">Release</button>`
    }
    return`
    <button class="btn btn-success" onclick="app.pokeApiController.capturePokemon()">Capture</button>`
}
}

