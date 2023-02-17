import bug from "../assets/TypePokemons/bug.png";
import dark from "../assets/TypePokemons/dark.png";
import dragon from "../assets/TypePokemons/dragon.png";
import electric from "../assets/TypePokemons/electric.png";
import fairy from "../assets/TypePokemons/fairy.png";
import fighting from "../assets/TypePokemons/fighting.png";
import fire from "../assets/TypePokemons/fire.png";
import flying from "../assets/TypePokemons/flying.png";
import ghost from "../assets/TypePokemons/ghost.png";
import grass from "../assets/TypePokemons/grass.png";
import ground from "../assets/TypePokemons/grass.png";
import ice from "../assets/TypePokemons/ice.png";
import normal from "../assets/TypePokemons/normal.png";
import poison from "../assets/TypePokemons/poison.png";
import psychic from "../assets/TypePokemons/psychic.png";
import rock from "../assets/TypePokemons/rock.png";
import steel from "../assets/TypePokemons/steel.png";
import water from "../assets/TypePokemons/water.png";

  export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return electric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return water;
    }
  };