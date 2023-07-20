import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, map, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemon():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res.results.map(
        (resPokemon: any) => {
          return this.http.get<any>(resPokemon.url).subscribe(resStatus => resPokemon.status = resStatus)
        }
      )
      )
    );
  }
}
