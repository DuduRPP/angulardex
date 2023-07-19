import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './components/dex/dex.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

const routes : Routes = [{path: '', component: DexComponent}];

@NgModule({
  declarations: [DexComponent, CardComponent, ListComponent],
  imports: [CommonModule, RouterModule.forChild(routes),MaterialModule],
  providers: [],
})
export class DexModule {}
