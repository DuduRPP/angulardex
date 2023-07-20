import { PokemonEntry } from "./pokemonEntry";

export interface PokeApiResponse{
  count: number,
  next: string,
  previous: string,
  results: PokemonEntry[]
}
