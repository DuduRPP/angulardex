import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DexModule } from './dex/dex.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DexModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
