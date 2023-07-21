import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonStatus } from '../../types/pokemonStatus';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  pokemon: PokemonStatus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService,
  ){

  }

  ngOnInit(): void{
    this.getPokemon();
  }

  private getPokemon(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.pokeApiService.apiGetPokemonFromId(id).subscribe(res => {
      this.pokemon = res;
    });
  }

  public leadingZeros(n: number): string{
    let s = String(n);
    while(s.length < 4){
      s = "0" + s;
    }
    return s;
  }

  public capitalize(s: string): string{
    if(s === "hp"){
      return "HP";
    }
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  public getImage(id: number): string{
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"
  }

  public calcStatPercentage(stat: number): number{
    return stat/255 * 100
  }
}
