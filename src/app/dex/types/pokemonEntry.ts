import { PokemonStatus } from "./pokemonStatus";
import { Type } from "./type";

export interface PokemonEntry{
  name: string,
  url: string,
  status: PokemonStatus
}
