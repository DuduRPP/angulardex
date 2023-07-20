import { Component, HostListener, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonEntry } from '../../types/pokemonEntry';
import { Type } from '../../types/type';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public breakpoint = 2;
  public showButton = false;
  public allPokemonList: PokemonEntry[];
  public listedPokemon: PokemonEntry[];

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

  }

  ngOnInit() {
    this.breakpoint = this.calculateBreakpoint(window.innerWidth);
    this.pokeApiService.apiListAllPokemon.subscribe(
      res => {
        this.allPokemonList = res.results;
        this.listedPokemon = this.allPokemonList;
      }
    );

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
    const filteredPokemon = this.allPokemonList.filter( (res: PokemonEntry) => {
      let a = res.status.types.map<boolean>((a)=>{
        return a.type.name.includes(value.toLowerCase());
      })
      return res.name.includes(value.toLowerCase()) || a.reduce((a,b)=> a || b);
    })

    this.listedPokemon = filteredPokemon;
  }
}
