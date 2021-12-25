import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { FilmService } from '../../services/film.service';
import {ToggleComponent} from "../../components/toggle/toggle.component";

@Component({
  selector: 'app-kinopoisk',
  templateUrl: './kinopoisk.component.html',
  styleUrls: ['./kinopoisk.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.kinopoisk]': 'true'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleComponent),
      multi: true
    }
  ]
})
export class KinopoiskComponent implements OnInit{

  form: FormGroup;
  modalIsOpen: boolean = false;
  isFilmSearch: boolean = true;
  formToggle: FormGroup;

  films$ = this.filmService.films$;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService
  ) {
    this.form = this.fb.group({
      searchInput: []
    });

    this.formToggle = this.fb.group({
      toggle: [true]
    })

    this.form.get('searchInput')!.valueChanges.subscribe(res => {
        this.filmService.searchFilm(res);
      });

    this.formToggle.valueChanges.subscribe(res => {
        this.isFilmSearch = res.toggle;
      }
    )
  }

  formatValue(arr: any[], id:any): any {
    return arr.find(item => item.id === id);
  }

  openModal(): void {
    this.modalIsOpen = true;
    }

  delete():void{
    this.filmService.clean();
    this.form.get('searchInput')?.setValue('');
  }

  ngOnInit(): void {
  }

  toggle():void{
    this.isFilmSearch = !this.isFilmSearch;
    console.log(this.isFilmSearch)
  }
}
