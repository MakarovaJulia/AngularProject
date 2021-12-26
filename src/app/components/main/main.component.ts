import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ToggleComponent} from "../toggle/toggle.component";
import {FilmService} from "../../services/film.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class MainComponent implements OnInit{
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
