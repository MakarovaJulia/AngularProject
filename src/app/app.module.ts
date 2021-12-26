import { OverlayModule } from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { KinopoiskComponent } from './pages/kinopoisk/kinopoisk.component';
import { FormatValuePipe } from './pipes/format-value.pipe';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ButtonComponent } from './components/button/button.component';
import { GenreSearchComponent } from './components/genre-search/genre-search.component';
import {RouterModule} from "@angular/router";
import { ByHandComponent } from './pages/by-hand/by-hand.component';
import { MainComponent } from './components/main/main.component';
import { FilmInfoComponent } from './pages/film-info/film-info.component';

@NgModule({
  declarations: [
    AppComponent,
    KinopoiskComponent,
    HeaderComponent,
    FormatValuePipe,
    ToggleComponent,
    ButtonComponent,
    GenreSearchComponent,
    ByHandComponent,
    MainComponent,
    FilmInfoComponent
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
