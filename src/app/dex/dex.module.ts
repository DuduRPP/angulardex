import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DexComponent } from './components/dex/dex.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

const routes : Routes = [{path: '', component: DexComponent}];

@NgModule({
  declarations: [DexComponent, HeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes),MaterialModule],
  providers: [],
})
export class DexModule {}
