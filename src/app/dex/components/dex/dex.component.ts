import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
})
export class DexComponent implements OnInit{
  search: string = "";

  constructor(private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.search = this.activatedRoute.snapshot.params['value'];
  }
}
