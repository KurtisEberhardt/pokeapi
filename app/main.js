// import ValuesController from "./Controllers/ValuesController.js";
import PokeApiController from "./Controllers/PokeAPIController.js"

class App {
  // valuesController = new ValuesController();
  pokeApiController = new PokeApiController();
}

window["app"] = new App();
