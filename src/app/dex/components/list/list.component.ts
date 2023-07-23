import { Component, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonEntry } from '../../types/pokemonEntry';
import { Type } from '../../types/type';
import { Observable, combineLatest, filter, lastValueFrom, map, switchMap } from 'rxjs';
import { PokeApiResponse } from '../../types/pokeApiResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  public breakpoint = 2;
  public showButton = false;
  public allPokemonList: PokemonEntry[];
  public listedPokemon: PokemonEntry[];
  public visiblePoke$: Observable<PokemonEntry[]>;

  @Input('searched')
  public searched = "";

  ngOnChanges(changes: SimpleChanges): void {

  }

  calculateBreakpoint(width:number): number{
    if(width < 578){
      return 1;
    } else if(width < 806){
      return 2;
    } else if (width < 1028){
      return 3;
    } else if(width < 1270){
      return 4;
    } else{
      return 5;
    }
  }

  constructor(
    private pokeApiService: PokeApiService
  ){
    this.visiblePoke$ = this.pokeApiService.allPokemon$
  }

  ngOnInit() {
    this.breakpoint = this.calculateBreakpoint(window.innerWidth);
    this.pokeApiService.apiListAllPokemon();
    //this.visiblePoke$ = this.pokeApiService.allPokemon$;

    this.visiblePoke$ = combineLatest([
       this.pokeApiService.allPokemon$,
       this.pokeApiService.searchFilter$
    ]).pipe(
        map( ([allPoke,filterValue]: [PokemonEntry[], string]) =>{
          return allPoke.filter(poke => poke.name.includes(filterValue));
        })
    )
  }

  onResize(event: any) {
    this.breakpoint = this.calculateBreakpoint(event.target.innerWidth);
  }

  @HostListener('window:scroll')
  onScroll(): void{
    this.showButton = (window.pageYOffset || document.documentElement.scrollTop) > 300;
  }
  scrollToTop(): void{
    window.scrollTo({top: 0,behavior: 'smooth'});
  }

  getSearch(value: string): void{
    this.pokeApiService.setFilter(value);
  }
}
