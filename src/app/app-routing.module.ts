import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent } from './pages/users/user/user.component';
import { UsersComponent } from './pages/users/users.component';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'app',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: UserComponent
      }
    ]
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
