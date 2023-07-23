import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, concatMap, map, switchMap, tap } from 'rxjs';
import { PokeApiResponse } from '../types/pokeApiResponse';
import { PokemonStatus } from '../types/pokemonStatus';
import { PokemonEntry } from '../types/pokemonEntry';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private urlAll: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
  private urlSingle: string = "https://pokeapi.co/api/v2/pokemon/";

  allPokemon$ = new BehaviorSubject<PokemonEntry[]>([]);
  searchFilter$ = new BehaviorSubject<string>("");

  setFilter(value: string): void{
    this.searchFilter$.next(value);
  }

  constructor(
    private http: HttpClient
  ) { }

  apiListAllPokemon(){
    this.http.get<PokeApiResponse>(this.urlAll).pipe(
      tap(res => res.results.map(
        (resPokemon) => {
          return this.apiGetPokemonFromUrl(resPokemon.url).subscribe(resStatus => resPokemon.status = resStatus)
        })
      ),
    ).subscribe( res => {
      this.allPokemon$.next(res.results);
      console.log(this.allPokemon$);
    });
  }

  apiGetPokemonFromUrl(url: string): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(url)
  }

  apiGetPokemonFromId(id: number): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(this.urlSingle+id)
  }

}
