import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { KinopoiskComponent } from './pages/kinopoisk/kinopoisk.component';
import { FormatValuePipe } from './pipes/format-value.pipe';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import {RouterModule} from "@angular/router";
import { ByHandComponent } from './pages/by-hand/by-hand.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    KinopoiskComponent,
    HeaderComponent,
    FormatValuePipe,
    UsersComponent,
    UserComponent,
    ToggleComponent,
    ButtonComponent,
    GenreSearchComponent,
    ByHandComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
