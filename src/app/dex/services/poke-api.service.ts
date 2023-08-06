import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  BehaviorSubject,
  Observable,
  concatMap,
  distinctUntilChanged,
  from,
  map,
  mergeMap,
  switchMap,
} from "rxjs";
import { PokeApiResponse } from "../types/pokeApiResponse";
import { PokemonStatus } from "../types/pokemonStatus";

@Injectable({
  providedIn: "root",
})
export class PokeApiService {
  private urlAll: string =
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1010";
  private urlSingle: string = "https://pokeapi.co/api/v2/pokemon/";

  allPokemon$ = new BehaviorSubject<PokemonStatus[]>([]);
  searchFilter$ = new BehaviorSubject<string>("");

  setFilter(value: string): void {
    this.searchFilter$.next(value);
  }

  constructor(private http: HttpClient) {}

  apiListAllPokemon() {
    if (this.allPokemon$.getValue().length > 0) {
      return;
    }
    this.http
      .get<PokeApiResponse>(this.urlAll)
      .pipe(
        map((res) => res.results),
        map((res) => {
          return from(res).pipe(
            concatMap((v) => this.apiGetPokemonFromUrl(v.url))
          );
        }),
        mergeMap((value) => value)
      )
      .subscribe((res) => {
        this.allPokemon$.next([...this.allPokemon$.getValue(), res]);
      });
  }

  apiGetPokemonFromUrl(url: string): Observable<PokemonStatus> {
    return this.http.get<PokemonStatus>(url);
  }

  apiGetPokemonFromId(id: number): Observable<PokemonStatus> {
    return this.http.get<PokemonStatus>(this.urlSingle + id);
  }
}
