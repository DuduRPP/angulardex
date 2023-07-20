import { Type } from "./type";

export interface PokemonDisplay{
  image: string,
  number: number,
  name: string,
  types: Type[],
}
