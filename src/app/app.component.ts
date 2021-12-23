import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {FilmService} from "./services/film.service";
import {delay, distinctUntilChanged} from "rxjs/operators";
import {ToggleComponent} from "./components/toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-app';
  form: FormGroup;
  films$ = this.filmService.films$;

  constructor(private fb: FormBuilder, private filmService: FilmService, public toggle: ToggleComponent) {
    this.form = this.fb.group({
      searchInput: [],
      genre:[[]]
    })


  this.form.get('searchInput')!.valueChanges
    .pipe(
      delay(700),
      distinctUntilChanged()
    )
    .subscribe(res => {
      this.filmService.searchFilm(res);
    })
  }

  formatValue(arr: any[], id:any ):any {
      return arr.find(item => item.id === id);
  }

  removeElement(inx:number):any {
    (this.form.get('form') as FormArray).removeAt(inx);
  }
}
