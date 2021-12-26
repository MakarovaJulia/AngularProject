import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ByHandComponent} from "./pages/by-hand/by-hand.component";
import {AppComponent} from "./app.component";
import {MainComponent} from "./components/main/main.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
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
