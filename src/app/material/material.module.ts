import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';

const materialComponents = [
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule
]

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}
