import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FilmService} from "./services/film.service";
import {delay, distinctUntilChanged} from "rxjs/operators";
import {ToggleComponent} from "./components/toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class AppComponent implements OnInit{
  title = 'my-app';
  form: FormGroup;
  films$ = this.filmService.films$;
  isFilmSearch: boolean = true;
  formToggle: FormGroup;

  constructor(private fb: FormBuilder, private filmService: FilmService) {
    this.form = this.fb.group({
      searchInput: [],
      genre:[[]]
    })

    this.formToggle = this.fb.group({
      toggle: [true]
    })

    this.formToggle.valueChanges.subscribe(res => {
      this.isFilmSearch = res.toggle;
    })

  }

  ngOnInit(): void {
  }
}
