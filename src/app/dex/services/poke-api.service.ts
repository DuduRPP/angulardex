import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, concatMap, distinctUntilChanged, forkJoin, from, map, mergeMap, of, switchMap, tap, toArray } from 'rxjs';
import { PokeApiResponse } from '../types/pokeApiResponse';
import { PokemonStatus } from '../types/pokemonStatus';
import { PokemonEntry } from '../types/pokemonEntry';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private urlAll: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=120";
  private urlSingle: string = "https://pokeapi.co/api/v2/pokemon/";

  allPokemon$ = new BehaviorSubject<PokemonStatus[]>([]);
  searchFilter$ = new BehaviorSubject<string>("");

  setFilter(value: string): void{
    this.searchFilter$.next(value);
  }

  constructor(
    private http: HttpClient
  ) { }

  apiListAllPokemon(){
    console.log("oi")
    this.http.get<PokeApiResponse>(this.urlAll).pipe(
      distinctUntilChanged(),
      map(res => res.results),
      map(res => {
        return from(res).pipe(
          concatMap((v) => this.apiGetPokemonFromUrl(v.url)),
        );
      }),
      concatMap((value) => value)
    ).subscribe( res => {
      console.log(res);
      this.allPokemon$.next([...this.allPokemon$.getValue(),res]);
    });
  }

  apiGetPokemonFromUrl(url: string): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(url)
  }

  apiGetPokemonFromId(id: number): Observable<PokemonStatus>{
    return this.http.get<PokemonStatus>(this.urlSingle+id)
  }

}
