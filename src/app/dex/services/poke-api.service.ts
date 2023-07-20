import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, switchMap, tap } from 'rxjs';
import { PokeApiResponse } from '../types/pokeApiResponse';
import { PokemonStatus } from '../types/pokemonStatus';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemon():Observable<PokeApiResponse>{
    return this.http.get<PokeApiResponse>(this.url).pipe(
      tap(res => res.results.map(
        (resPokemon) => {
          return this.http.get<PokemonStatus>(resPokemon.url).subscribe(resStatus => resPokemon.status = resStatus)
        }
      )
      )
    );
  }
}
