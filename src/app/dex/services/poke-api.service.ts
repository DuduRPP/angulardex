import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, switchMap, tap } from 'rxjs';
import { PokeApiResponse } from '../types/pokeApiResponse';
import { PokemonStatus } from '../types/pokemonStatus';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private urlAll: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151";
  private urlSingle: string = "https://pokeapi.co/api/v2/pokemon/";

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemon():Observable<PokeApiResponse>{
    return this.http.get<PokeApiResponse>(this.urlAll).pipe(
      tap(res => res.results.map(
        (resPokemon) => {
          return this.apiGetPokemonFromUrl(resPokemon.url).subscribe(resStatus => resPokemon.status = resStatus)
        }
      )
      )
    );
  }

  apiGetPokemonFromUrl(url: string): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(url)
  }

  apiGetPokemonFromId(id: number): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(this.urlSingle+id)
  }

}
