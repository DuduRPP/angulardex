import { Type } from "./type"

export interface PokemonStatus{
  id: number,
  name: string,
  types: {
    slot: number,
    type: {
      name: Type,
      url: string,
    }
  }[],
  stats: any
}
