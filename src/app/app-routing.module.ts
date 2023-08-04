import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DexComponent } from "./dex/components/dex/dex.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
