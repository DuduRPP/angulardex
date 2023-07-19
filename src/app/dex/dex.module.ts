import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './components/dex/dex.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [{path: '', component: DexComponent}];

@NgModule({
  declarations: [DexComponent, CardComponent, ListComponent, SearchComponent],
  imports: [FormsModule,CommonModule, RouterModule.forChild(routes),MaterialModule],
  providers: [],
})
export class DexModule {}
