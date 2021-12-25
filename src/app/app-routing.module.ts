import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ByHandComponent} from "./pages/by-hand/by-hand.component";

const routes: Routes = [
  {
    path: 'film/:id',
    component: ByHandComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
