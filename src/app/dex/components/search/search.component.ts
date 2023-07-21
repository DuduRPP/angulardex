import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges{
  value = '';

  @Input('searchedName')
  public searched = "";

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.searched)
    this.value = ''
    this.value = this.searched;
  }

  @Output()
  public emitSearch: EventEmitter<string> = new EventEmitter();

  public search(){
    this.emitSearch.emit(this.value);
  }

}
