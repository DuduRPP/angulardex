import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const materialComponents = [
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}
