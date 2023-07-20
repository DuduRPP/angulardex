import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('pokemon')
  public pokemon: any;

  public leadingZeros(n: number): string{
    let s = String(n);
    while(s.length < 4){
      s = "0" + s;
    }
    return s;
  }

  public capitalize(s: string): string{
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  public getImage(id: number): string{
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png"
  }
}
